use yew::prelude::*;
use yew_hooks::prelude::*;

use crate::components::gear::GearDisplay;
use crate::data::{load_data, save_data, GearData, GearID, GEAR};
use crate::lang::Langs;

/// Home page
#[function_component(Home)]
pub fn home() -> Html {
    let all_data = use_state(load_data);
    save_data(&all_data);

    html! {
        <div class="app">
            <div class="gear-rack">
                {GEAR.iter().map(|data| html! {
                    <GearDisplay
                        data={all_data.get(&data.id).cloned()}
                        info={*data}
                        lang={Langs::EUen}
                        all_data={all_data.clone()}
                    />
                }).collect::<Html>()}
            </div>
        </div>
    }
}
