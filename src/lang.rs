use yew::html::ImplicitClone;

include!(concat!(env!("OUT_DIR"), "/lang.rs"));

#[repr(usize)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub enum Langs {
    CNzh,
    EUde,
    EUen,
    EUes,
    EUfr,
    EUit,
    EUnl,
    EUru,
    JPja,
    KRko,
    TWzh,
    USen,
    USes,
    USfr,
}
impl Langs {
    pub const fn repr(&self) -> &'static str {
        [
            "CNzh", "EUde", "EUen", "EUes", "EUfr", "EUit", "EUnl", "EUru", "JPja",
            "KRko", "TWzh", "USen", "USes", "USfr",
        ][*self as usize]
    }
}
impl ImplicitClone for Langs {
}

pub const APP_STRINGS: [&[&str]; 14] = [&[
    "Gear Miner",
    "About",
    "Current seed: ",
    "Start collecting data",
    "Add roll",
    "Drink",
    "Ability",
    "Dismiss",
    "Delete",
]; 14];
#[repr(usize)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub enum Strings {
    Title,
    About,
    CurrentSeed,
    InitData,
    AddRoll,
    Drink,
    Ability,
    Dismiss,
    Delete,
}

#[macro_export]
macro_rules! app_string {
    ($lang:expr, $string:ident) => {
        crate::lang::APP_STRINGS[$lang as usize][crate::lang::Strings::$string as usize]
    };
}
