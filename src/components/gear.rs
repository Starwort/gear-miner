use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct GearDisplayProps {}

#[function_component(GearDisplay)]
pub fn gear_display(props: &GearDisplayProps) -> Html {
    let GearDisplayProps {} = props;
    html! {
        <div class="gear-display">
        </div>
    }
}
