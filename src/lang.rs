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
