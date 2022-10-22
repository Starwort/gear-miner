use yew::prelude::*;
use yew_hooks::prelude::*;

use crate::components::gear::GearDisplay;
use crate::data::{load_data, save_data, GEAR};
use crate::lang::Langs;

fn use_rerender() -> Callback<()> {
    let state = use_state(|| 0);
    Callback::from(move |_| state.set(0))
}

/// Home page
#[function_component(Home)]
pub fn home() -> Html {
    let all_data = use_mut_ref(load_data);
    let lang = use_state(|| Langs::EUen);
    let rerender = use_rerender();
    save_data(&all_data.borrow());
    html! {
        <div class="app">
            <div class="gear-rack">
                {GEAR.iter().map(|info| html! {
                    <GearDisplay
                        data={all_data.borrow().get(&info.id).cloned()}
                        info={*info}
                        lang={*lang}
                        all_data={all_data.clone()}
                        on_change={rerender.clone()}
                    />
                }).collect::<Html>()}
            </div>
        </div>
    }
}
