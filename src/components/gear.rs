use std::cmp::PartialEq;
use std::collections::HashMap;

use ability_miner::{get_ability, Ability};
use material_yew::dialog::{ActionType, MatDialogAction};
use material_yew::list::{ListIndex, SelectedDetail};
use material_yew::{
    MatButton,
    MatDialog,
    MatList,
    MatListItem,
    MatSelect,
    WeakComponentLink,
};
use yew::prelude::*;

use crate::data::{GearData, GearID, GearInfo};
use crate::lang::{Langs, ABILITY_NAMES, BRAND_NAMES, DRINK_NAMES, GEAR_NAMES};

#[derive(PartialEq, Properties)]
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

#[derive(PartialEq, Properties)]
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
#[derive(PartialEq, Properties)]
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
    pub all_data: UseStateHandle<HashMap<GearID, GearData>>,
}

const IMAGE_URL: &str = "https://leanny.github.io/splat3/images/";

#[function_component(GearDisplay)]
pub fn gear_display(props: &GearDisplayProps) -> Html {
    let GearDisplayProps {
        data,
        info,
        lang,
        all_data,
    } = props;
    let dialogue_link = use_state(<WeakComponentLink<MatDialog> as Default>::default);
    const SEED_COUNT: usize = 15;
    let mined__seeds = use_mut_ref(|| Vec::with_capacity(10));
    let mined__drink = use_state::<Option<Ability>, _>(|| None);
    let dialogue_content = match data {
        None => {
            html! {<span onclick={{
                let all_data = all_data.clone();
                let id = info.id;
                Callback::from(move |_| {
                    let mut data = (*all_data).clone();
                    data.insert(id, GearData::InProgress(vec![]));
                    all_data.set(data);
                })
            }}>
                <MatButton icon="add" label="Start collecting data" raised={true} />
            </span>}
        },
        Some(GearData::Mined(seed)) => {
            let content = {
                (*mined__seeds.borrow_mut()).clear();
                let mut seed = *seed;
                let mut rv = Vec::with_capacity(SEED_COUNT);
                for _ in 0..SEED_COUNT {
                    let ability = get_ability(&mut seed, info.brand, *mined__drink);
                    (*mined__seeds.borrow_mut()).push(seed);
                    rv.push(html! {
                        <MatListItem>
                            <AbilityDisplay ability={ability as usize} {lang} />
                        </MatListItem>
                    })
                }
                rv
            };
            let update_seed = {
                let all_data = all_data.clone();
                let id = info.id;
                let mined__seeds = mined__seeds.clone();
                Callback::from(move |idx: ListIndex| {
                    if let ListIndex::Single(Some(idx)) = idx {
                        let mut data = (*all_data).clone();
                        *data.get_mut(&id).unwrap() =
                            GearData::Mined(mined__seeds.borrow()[idx]);
                        all_data.set(data);
                    }
                })
            };
            html! {
                <>
                <div>{"Current seed: "}{seed}</div>
                <div class="expand-select">
                    <MatSelect
                        label="Drink"
                        index={{mined__drink.map(|i|i as i64 + 1).unwrap_or(0)}}
                        onselected={{
                            let mined__drink = mined__drink.clone();
                            Callback::from(move |SelectedDetail {index: idx, ..}| {
                                use ListIndex::*;
                                mined__drink.set(match idx {
                                    Single(Some(0)) => None,
                                    Single(Some(idx)) => Some(
                                        Ability::from_usize(idx - 1)
                                    ),
                                    _ => None,
                                });
                            })
                        }}
                    >
                        <MatListItem selected={mined__drink.is_none()}>
                            {""}
                        </MatListItem>
                        {(0..14).map(|i| html!{
                            <MatListItem
                                selected={matches!(*mined__drink, Some(i))}
                                value={i.to_string()}
                            >
                                <Drink ability={i} {lang} />
                            </MatListItem>
                        }).collect::<Vec<_>>()}
                    </MatSelect>
                </div>
                <MatList onaction={update_seed}>{content}</MatList>
                </>
            }
        },
        Some(GearData::InProgress(data)) => {
            let components = data
                .iter()
                .enumerate()
                .map(|(i, (ability, drink))| {
                    let ability_callback = {
                        let all_data = all_data.clone();
                        let id = info.id;
                        Callback::from(
                            move |SelectedDetail {
                                      index: idx, ..
                                  }| {
                                use GearData::InProgress;
                                use ListIndex::*;
                                let mut data = (*all_data).clone();
                                if let Some(InProgress(rolls)) = data.get_mut(&id) {
                                    rolls[i].0 = match idx {
                                        Single(Some(idx)) => Ability::from_usize(idx),
                                        _ => unreachable!(),
                                    };
                                    all_data.set(data);
                                }
                            },
                        )
                    };
                    let drink_callback = {
                        let all_data = all_data.clone();
                        let id = info.id;
                        Callback::from(
                            move |SelectedDetail {
                                      index: idx, ..
                                  }| {
                                use GearData::InProgress;
                                use ListIndex::*;
                                let mut data = (*all_data).clone();
                                if let Some(InProgress(rolls)) = data.get_mut(&id) {
                                    rolls[i] = (
                                        rolls[i].0,
                                        match idx {
                                            Single(Some(0)) => None,
                                            Single(Some(idx)) => {
                                                Some(Ability::from_usize(idx - 1))
                                            },
                                            _ => None,
                                        },
                                    );
                                    all_data.set(data);
                                }
                            },
                        )
                    };
                    html! {
                        <div class="expand-select-pair">
                            <MatSelect
                                label="Ability"
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
                                }).collect::<Vec<_>>()}
                            </MatSelect>
                            <MatSelect
                                label="Drink"
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
                                            Some(i),
                                        )}
                                        value={i.to_string()}
                                    >
                                        <Drink ability={i} {lang} />
                                    </MatListItem>
                                }).collect::<Vec<_>>()}
                            </MatSelect>
                        </div>
                    }
                })
                .collect::<Vec<_>>();
            html! {<div class="height-expand">
                {components}
                <span onclick={{
                    let all_data = all_data.clone();
                    let id = info.id;
                    Callback::from(move |_| {
                        let mut data = (*all_data).clone();
                        if let Some(GearData::InProgress(rolls)) = data.get_mut(&id) {
                            rolls.push((Ability::MainInk_Save, None));
                            all_data.set(data);
                        }
                    })
                }}>
                    <MatButton label="Add roll" raised={true} />
                </span>
            </div>}
        },
    };

    html! {
        <div
            class={classes!(
                "gear-display",
                data.as_ref().map(|data| match data {
                    GearData::Mined(_) => "mined",
                    GearData::InProgress(data) => "started",
                    _ => "",
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
                    <MatButton label="dismiss" />
                </MatDialogAction>
                {if !data.is_none() {html!{
                    <MatDialogAction action_type={ActionType::Secondary}>
                        <span class="danger" onclick={{
                            let all_data = all_data.clone();
                            let id = info.id;
                            Callback::from(move |_| {
                                let mut data = (*all_data).clone();
                                data.remove(&id);
                                all_data.set(data);
                            })
                        }}>
                            <MatButton label="delete" icon="delete" />
                        </span>
                    </MatDialogAction>
                }} else {html!{}}}
            </MatDialog>
        </div>
    }
}
