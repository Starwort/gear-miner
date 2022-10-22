#![allow(clippy::module_name_repetitions)]
use std::collections::HashMap;
use std::hash::BuildHasher;

use ability_miner::Ability;
use serde::{Deserialize, Serialize};
use web_sys::window;

include!(concat!(env!("OUT_DIR"), "/gear.rs"));

#[derive(Debug, Serialize, Deserialize, PartialEq, Eq, Clone)]
pub enum GearData {
    Mined(u32),
    InProgress(Vec<(Ability, Option<Ability>)>, Option<(Vec<u32>, usize)>),
}

#[must_use]
pub fn load_data() -> HashMap<GearID, GearData> {
    let window = window().expect("window missing");
    let local_storage = window
        .local_storage()
        .expect("Failed to get localStorage")
        .expect("localStorage was null");
    let data = serde_json::from_str(
        &local_storage
            .get_item("gear-miner-data")
            .unwrap_or(None)
            .unwrap_or_else(|| "{}".to_string()),
    );
    data.unwrap_or_default()
}

pub fn save_data<S: BuildHasher>(data: &HashMap<GearID, GearData, S>) {
    let window = window().expect("window missing");
    let local_storage = window
        .local_storage()
        .expect("Failed to get localStorage")
        .expect("localStorage was null");
    local_storage
        .set_item(
            "gear-miner-data",
            &serde_json::to_string(&data).expect("Conversion to JSON failed"),
        )
        .expect("Writing to localStorage failed");
}
