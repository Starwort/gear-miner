use material_yew::top_app_bar_fixed::{MatTopAppBarActionItems, MatTopAppBarTitle};
use material_yew::MatTopAppBarFixed;
use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::AppRoute;

type AppLink = Link<AppRoute>;
/// Nav component
#[function_component(Nav)]
pub fn nav() -> Html {
    html! {
        <MatTopAppBarFixed>
            <MatTopAppBarTitle>
                <div class="app-title">
                    <AppLink to={AppRoute::Home}>{"Gear Miner"}</AppLink>
                </div>
            </MatTopAppBarTitle>
            // <MatTopAppBarActionItems>
            //     <div class="app-title">
            //         <AppLink to={AppRoute::About}>{"About"}</AppLink>
            //     </div>
            // </MatTopAppBarActionItems>
        </MatTopAppBarFixed>
    }
}
