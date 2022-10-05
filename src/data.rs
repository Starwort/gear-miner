use ability_miner::Ability;

pub enum GearData {
    Mined(u32),
    InProgress(Vec<(Ability, Option<Ability>)>),
}
