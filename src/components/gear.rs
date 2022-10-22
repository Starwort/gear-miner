#![allow(clippy::module_name_repetitions)]
use std::cell::RefCell;
use std::cmp::PartialEq;
use std::collections::HashMap;
use std::rc::Rc;

use ability_miner::{get_ability, Ability};
use material_yew::dialog::{ActionType, MatDialogAction};
use material_yew::list::{ListIndex, SelectedDetail};
use material_yew::{
    MatButton,
    MatCircularProgress,
    MatDialog,
    MatList,
    MatListItem,
    MatSelect,
    WeakComponentLink,
};
use reqwest::Client;
use serde::{Deserialize, Serialize};
use yew::prelude::*;
use yew_hooks::use_async;

use crate::app_string;
use crate::data::{GearData, GearID, GearInfo};
use crate::lang::{Langs, ABILITY_NAMES, BRAND_NAMES, DRINK_NAMES, GEAR_NAMES};

#[derive(Serialize, Deserialize)]
/// Server input type
struct MiningData {
    rolls: Vec<(Ability, Option<Ability>)>,
    candidates: Option<Vec<u32>>,
    brand: ability_miner::Brand,
}

#[derive(PartialEq, Eq, Properties)]
pub struct DrinkProps {
    ability: usize,
    lang: Langs,
}

#[function_component(Drink)]
pub fn drink(props: &DrinkProps) -> Html {
    let DrinkProps {
        ability,
        lang,
    } = props;
    html! {
        <p class="with-icon">
            <img
                src={format!(
                    "{IMAGE_URL}skill/{}.webp",
                    Ability::from_usize(*ability).internal_name(),
                )}
                alt=""
            />
            {DRINK_NAMES[*lang as usize][*ability]}
        </p>
    }
}

#[derive(PartialEq, Eq, Properties)]
pub struct AbilityDisplayProps {
    ability: usize,
    lang: Langs,
}

#[function_component(AbilityDisplay)]
pub fn ability_display(props: &AbilityDisplayProps) -> Html {
    let AbilityDisplayProps {
        ability,
        lang,
    } = props;
    html! {
        <p class="with-icon">
            <img
                src={format!(
                    "{IMAGE_URL}skill/{}.webp",
                    Ability::from_usize(*ability).internal_name(),
                )}
                alt=""
            />
            {ABILITY_NAMES[*lang as usize][*ability]}
        </p>
    }
}
#[derive(PartialEq, Eq, Properties)]
pub struct BrandProps {
    id: usize,
    lang: Langs,
}

#[function_component(Brand)]
pub fn brand(props: &BrandProps) -> Html {
    let BrandProps {
        id,
        lang,
    } = props;
    html! {
        <p class="with-icon">
            <img
                src={format!(
                    "{IMAGE_URL}brand/{}.webp",
                    ability_miner::Brand::from_usize(*id).internal_name(),
                )}
                alt=""
            />
            {BRAND_NAMES[*lang as usize][*id]}
        </p>
    }
}

#[derive(PartialEq, Properties)]
pub struct GearDisplayProps {
    pub data: Option<GearData>,
    pub info: GearInfo,
    pub lang: Langs,
    pub all_data: Rc<RefCell<HashMap<GearID, GearData>>>,
    pub on_change: Callback<()>,
}

const IMAGE_URL: &str = "https://leanny.github.io/splat3/images/";

#[function_component(GearDisplay)]
pub fn gear_display(props: &GearDisplayProps) -> Html {
    const SEED_COUNT: usize = 15;
    let GearDisplayProps {
        data,
        info,
        lang,
        all_data,
        on_change,
    } = props;
    let dialogue_link = use_state(<WeakComponentLink<MatDialog> as Default>::default);
    let mined_seeds = use_mut_ref(|| Vec::with_capacity(SEED_COUNT));
    let mined_drink = use_state::<Option<Ability>, _>(|| None);
    let is_mining = use_state(|| false);
    let mine = use_async::<_, _, !>({
        let brand = info.brand;
        let all_data = all_data.clone();
        let on_change = on_change.clone();
        let is_mining = is_mining.clone();
        let id = info.id;
        async move {
            let task = if let Some(GearData::InProgress(rolls, candidates)) =
                (*all_data).borrow().get(&id)
            {
                let rolls = rolls.clone();
                let candidates = candidates.clone();
                is_mining.set(true);
                Some(
                    Client::new()
                        .post("http://starbright.dyndns.org:8000/api/mine")
                        .json(&MiningData {
                            brand,
                            rolls,
                            candidates: candidates.map(|(cands, _)| cands),
                        })
                        .send(),
                )
            } else {
                None
            };
            if let Some(task) = task {
                log::info!("Starting fetch");
                let first_result = task.await;
                log::info!("Result: {first_result:?}");
                let results: Vec<u32> = match match first_result {
                    Ok(data) => {
                        log::info!("Got data {data:?}");
                        data
                    },
                    Err(e) => {
                        log::error!("{e:?}");
                        panic!("Error: {e}")
                    },
                }
                .json()
                .await
                {
                    Ok(data) => {
                        log::info!("Got data {data:?}");
                        data
                    },
                    Err(e) => {
                        log::error!("{e:?}");
                        panic!("Error: {e}")
                    },
                };

                is_mining.set(false);
                if results.len() == 1 {
                    (*all_data)
                        .borrow_mut()
                        .insert(id, GearData::Mined(results[0]));
                } else if results.len() < 100 {
                    if let Some(GearData::InProgress(rolls, candidates)) =
                        (*all_data).borrow_mut().get_mut(&id)
                    {
                        *candidates = Some((results, rolls.len()));
                    }
                }
                on_change.emit(());
            }
            Ok(())
        }
    });
    // let miner_agent = use_bridge::<MinerAgent, _>({
    //     let id = info.id;
    //     let all_data = all_data.clone();
    //     let on_change = on_change.clone();
    //     let is_mining = is_mining.clone();
    //     move |results| {
    //         is_mining.set(false);
    //         if results.len() == 1 {
    //             (*all_data)
    //                 .borrow_mut()
    //                 .insert(id, GearData::Mined(results[0]));
    //         } else if results.len() < 100 {
    //             if let Some(GearData::InProgress(rolls, candidates)) =
    //                 (*all_data).borrow_mut().get_mut(&id)
    //             {
    //                 *candidates = Some((results, rolls.len()));
    //             }
    //         }
    //         on_change.emit(());
    //     }
    // });
    let dialogue_content = match data {
        None => {
            html! {<span onclick={{
                let all_data = all_data.clone();
                let id = info.id;
                let on_change = on_change.clone();
                Callback::from(move |_| {
                    (*all_data).borrow_mut().insert(
                        id,
                        GearData::InProgress(vec![], None)
                    );
                    on_change.emit(());
                })
            }}>
                <MatButton
                    icon="add"
                    label={app_string!(*lang, InitData)}
                    raised={true}
                />
            </span>}
        },
        Some(GearData::Mined(seed)) => {
            let content = {
                (*mined_seeds.borrow_mut()).clear();
                let mut seed = *seed;
                let mut rv = Vec::with_capacity(SEED_COUNT);
                for _ in 0..SEED_COUNT {
                    let ability = get_ability(&mut seed, info.brand, *mined_drink);
                    (*mined_seeds.borrow_mut()).push(seed);
                    rv.push(html! {
                        <MatListItem>
                            <AbilityDisplay ability={ability as usize} {lang} />
                        </MatListItem>
                    });
                }
                rv
            };
            let update_seed = {
                let all_data = all_data.clone();
                let id = info.id;
                let on_change = on_change.clone();
                Callback::from(move |idx: ListIndex| {
                    if let ListIndex::Single(Some(idx)) = idx {
                        *(*all_data).borrow_mut().get_mut(&id).unwrap() =
                            GearData::Mined(mined_seeds.borrow()[idx]);
                        on_change.emit(());
                    }
                })
            };
            html! {
                <>
                <div>{app_string!(*lang, CurrentSeed)}{seed}</div>
                <div class="expand-select">
                    <MatSelect
                        label={app_string!(*lang, Drink)}
                        index={{mined_drink.map(|i|i as i64 + 1).unwrap_or(0)}}
                        onselected={{
                            let mined_drink = mined_drink.clone();
                            Callback::from(move |SelectedDetail {index: idx, ..}| {
                                mined_drink.set(match idx {
                                    ListIndex::Single(Some(0)) => None,
                                    ListIndex::Single(Some(idx)) => Some(
                                        Ability::from_usize(idx - 1)
                                    ),
                                    _ => None,
                                });
                            })
                        }}
                    >
                        <MatListItem selected={mined_drink.is_none()}>
                            {""}
                        </MatListItem>
                        {(0..14).map(|i| html!{
                            <MatListItem
                                selected={matches!(*mined_drink, Some(_))}
                                value={i.to_string()}
                            >
                                <Drink ability={i} {lang} />
                            </MatListItem>
                        }).collect::<Html>()}
                    </MatSelect>
                </div>
                <MatList onaction={update_seed}>{content}</MatList>
                </>
            }
        },
        Some(GearData::InProgress(data, _)) => {
            let components = data
                .iter()
                .enumerate()
                .map(|(i, (ability, drink))| {
                    let ability_callback = {
                        let all_data = all_data.clone();
                        let id = info.id;
                        let on_change = on_change.clone();
                        Callback::from(
                            move |SelectedDetail {
                                      index: idx, ..
                                  }| {
                                use GearData::InProgress;
                                if let Some(InProgress(rolls, candidates)) =
                                    (*all_data).borrow_mut().get_mut(&id)
                                {
                                    rolls[i].0 = match idx {
                                        ListIndex::Single(Some(idx)) => {
                                            Ability::from_usize(idx)
                                        },
                                        _ => unreachable!(),
                                    };
                                    if let Some((_, last)) = candidates {
                                        if *last > i {
                                            *candidates = None;
                                        }
                                    }
                                }
                                on_change.emit(());
                            },
                        )
                    };
                    let drink_callback = {
                        let all_data = all_data.clone();
                        let id = info.id;
                        let on_change = on_change.clone();
                        Callback::from(
                            move |SelectedDetail {
                                      index: idx, ..
                                  }| {
                                use GearData::InProgress;
                                if let Some(InProgress(rolls, candidates)) =
                                    (*all_data).borrow_mut().get_mut(&id)
                                {
                                    rolls[i].1 = match idx {
                                        ListIndex::Single(Some(0)) => None,
                                        ListIndex::Single(Some(idx)) => {
                                            Some(Ability::from_usize(idx - 1))
                                        },
                                        _ => None,
                                    };
                                    if let Some((_, last)) = candidates {
                                        if *last > i {
                                            *candidates = None;
                                        }
                                    }
                                }
                                on_change.emit(());
                            },
                        )
                    };
                    html! {
                        <div class="expand-select-pair">
                            <MatSelect
                                label={app_string!(*lang, Ability)}
                                // icon={{html!{
                                //     <img src={format!(
                                //         "{IMAGE_URL}skill/{}.webp",
                                //         ability.internal_name(),
                                //     )} alt="" />
                                // }}}
                                index={*ability as i64}
                                onselected={ability_callback}
                            >
                                {(0..14).map(|i| html!{
                                    <MatListItem
                                        selected={*ability as usize == i}
                                        value={i.to_string()}
                                    >
                                        <AbilityDisplay ability={i} {lang} />
                                    </MatListItem>
                                }).collect::<Html>()}
                            </MatSelect>
                            <MatSelect
                                label={app_string!(*lang, Drink)}
                                index={drink.map(|i|i as i64).unwrap_or(0)}
                                onselected={drink_callback}
                            >
                                <MatListItem selected={drink.is_none()}>
                                    {""}
                                </MatListItem>
                                {(0..14).map(|i| html!{
                                    <MatListItem
                                        selected={matches!(
                                            drink.map(|i| i as usize),
                                            Some(_),
                                        )}
                                        value={i.to_string()}
                                    >
                                        <Drink ability={i} {lang} />
                                    </MatListItem>
                                }).collect::<Html>()}
                            </MatSelect>
                        </div>
                    }
                })
                .collect::<Html>();
            html! {<div class="height-expand">
                {components}
                <div class="gear-mining-buttons">
                    <span onclick={{
                        let all_data = all_data.clone();
                        let id = info.id;
                        let on_change = on_change.clone();
                        Callback::from(move |_| {
                            if let Some(GearData::InProgress(rolls, _)) =
                                (*all_data).borrow_mut().get_mut(&id)
                            {
                                rolls.push((Ability::MainInk_Save, None));
                            }
                            on_change.emit(());
                        })
                    }}>
                        <MatButton label={app_string!(*lang, AddRoll)} raised={true} />
                    </span>
                    {if *is_mining {
                        html! {<MatCircularProgress indeterminate={true} />}
                    } else {
                        html!{<span onclick={{
                            Callback::from(move |_| {
                                mine.run();
                            })
                        }}>
                            <MatButton
                                label={app_string!(*lang, MineData)}
                                raised={true}
                            />
                        </span>}
                    }}
                </div>
            </div>}
        },
    };

    html! {
        <div
            class={classes!(
                "gear-display",
                data.as_ref().map(|data| match data {
                    GearData::Mined(_) => "mined",
                    GearData::InProgress(_, _) => "started",
                }),
            )}
            onclick={{
                let dialogue_link = dialogue_link.clone();
                Callback::from(move |_| dialogue_link.show())
            }}
        >
            <img
                src={info.image_url}
                alt=""
            />
            <h2>{GEAR_NAMES[*lang as usize][info.id as usize]}</h2>
            <Brand id={info.brand as usize} {lang} />
            <MatDialog
                heading={GEAR_NAMES[*lang as usize][info.id as usize]}
                dialog_link={(*dialogue_link).clone()}
            >
                {dialogue_content}
                <div class="dialogue-enlarger"></div>
                <MatDialogAction action_type={ActionType::Primary} action="close">
                    <MatButton label={app_string!(*lang, Dismiss)} />
                </MatDialogAction>
                {if data.is_none() { html!{} } else { html!{
                    <MatDialogAction action_type={ActionType::Secondary}>
                        <span class="danger" onclick={{
                            let all_data = all_data.clone();
                            let id = info.id;
                            let on_change = on_change.clone();
                            Callback::from(move |_| {
                                (*all_data).borrow_mut().remove(&id);
                                on_change.emit(());
                            })
                        }}>
                            <MatButton
                                label={app_string!(*lang, Delete)}
                                icon="delete"
                            />
                        </span>
                    </MatDialogAction>
                } }}
            </MatDialog>
        </div>
    }
}
