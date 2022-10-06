use std::collections::HashMap;

use ability_miner::Ability;
use web_sys::window;

include!(concat!(env!("OUT_DIR"), "/gear.rs"));

#[derive(Serialize, Deserialize)]
pub enum GearData {
    Mined(u32),
    InProgress(Vec<(Ability, Option<Ability>)>),
}

pub fn load_data() -> HashMap<GearID, GearData> {
    let window = window();
    todo!()
}
