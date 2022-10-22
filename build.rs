use std::env;
use std::fs::File;
use std::io::Write;
use std::path::Path;
use std::time::{SystemTime, UNIX_EPOCH};

use serde_json::{Map, Value};

macro_rules! get_str {
    ($item:ident, $key:expr) => {{
        let key = $key;
        $item
            .get(key)
            .unwrap_or_else(|| panic!("{} was None", key))
            .as_str()
            .unwrap()
    }};
}

#[allow(clippy::too_many_lines)]
fn main() {
    let out_dir = env::var_os("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("gear.rs");
    let mut out_file = File::create(dest_path).expect("creating file failed");
    write!(
        out_file,
        "
        #[derive(Clone, Copy, PartialEq, Eq)]
        pub struct GearInfo {{
            pub brand: ::ability_miner::Brand,
            pub id: GearID,
            pub image_url: &'static str,
        }}
        ",
    )
    .unwrap();
    let data_dir = Path::new("data");
    let lang_dir = data_dir.join("lang");
    let mut gear_ids: Vec<String> = Vec::new();
    let mut gear_info: Vec<String> = Vec::new();
    let hat_data: Vec<Map<String, Value>> = serde_json::from_reader(
        File::open(data_dir.join("GearInfoHead.json"))
            .expect("GearInfoHead.json missing"),
    )
    .expect("GearInfoHead.json is not valid JSON");
    let clothes_data: Vec<Map<String, Value>> = serde_json::from_reader(
        File::open(data_dir.join("GearInfoClothes.json"))
            .expect("GearInfoClothes.json missing"),
    )
    .expect("GearInfoClothes.json is not valid JSON");
    let shoes_data: Vec<Map<String, Value>> = serde_json::from_reader(
        File::open(data_dir.join("GearInfoShoes.json"))
            .expect("GearInfoShoes.json missing"),
    )
    .expect("GearInfoShoes.json is not valid JSON");
    for it in hat_data.iter().chain(&clothes_data).chain(&shoes_data) {
        gear_ids.push(get_str!(it, "__RowId").to_string());
        gear_info.push(format!(
            r#"
            GearInfo {{
                brand: ::ability_miner::Brand::{0},
                id: GearID::{1},
                image_url: "https://leanny.github.io/splat3/images/gear/{1}.webp",
            }}
            "#,
            get_str!(it, "Brand"),
            get_str!(it, "__RowId"),
        ));
    }
    write!(
        out_file,
        "
        #[repr(usize)]
        #[derive(::serde::Serialize, ::serde::Deserialize)]
        #[derive(Debug, Clone, Copy, ::std::hash::Hash, PartialEq, Eq)]
        #[derive(::enum_utils::FromStr)]
        #[allow(non_camel_case_types)]
        pub enum GearID {{
            {}
        }}

        pub const GEAR: [GearInfo; {}] = [{}];
        ",
        gear_ids.join(","),
        gear_info.len(),
        gear_info.join(","),
    )
    .unwrap();
    let mut gear_name: Vec<Vec<String>> = Vec::new();
    let mut brand_name: Vec<Vec<String>> = Vec::new();
    let mut ability_name: Vec<Vec<String>> = Vec::new();
    let mut drink_name: Vec<Vec<String>> = Vec::new();
    for lang in [
        "CNzh", "EUde", "EUen", "EUes", "EUfr", "EUit", "EUnl", "EUru", "JPja", "KRko",
        "TWzh", "USen", "USes", "USfr",
    ] {
        let mut lang_gear_name: Vec<String> = Vec::new();
        let mut lang_brand_name: Vec<String> = Vec::new();
        let mut lang_ability_name: Vec<String> = Vec::new();
        let mut lang_drink_name: Vec<String> = Vec::new();
        let lang_data: Map<String, Value> = serde_json::from_reader(
            File::open(lang_dir.join(format!("{lang}.json"))).unwrap(),
        )
        .unwrap();
        let lang_brand_data = lang_data
            .get("CommonMsg/Gear/GearBrandName")
            .unwrap()
            .as_object()
            .unwrap();
        for i in 0..22 {
            lang_brand_name.push(
                lang_brand_data
                    .get(::ability_miner::Brand::from_usize(i).internal_name())
                    .unwrap_or(&Value::String("???".to_string()))
                    .as_str()
                    .unwrap()
                    .to_string(),
            );
        }
        let lang_ability_data = lang_data
            .get("CommonMsg/Gear/GearPowerName")
            .unwrap()
            .as_object()
            .unwrap();
        let lang_drink_data = lang_data
            .get("CommonMsg/Lobby/LobbyFoodName")
            .unwrap()
            .as_object()
            .unwrap();
        for i in 0..14 {
            lang_drink_name.push(
                get_str!(
                    lang_drink_data,
                    ::ability_miner::Ability::from_usize(i).legacy_internal_name()
                )
                .to_string(),
            );
            lang_ability_name.push(
                get_str!(
                    lang_ability_data,
                    ::ability_miner::Ability::from_usize(i).internal_name()
                )
                .to_string(),
            );
        }
        let lang_hat_names = lang_data
            .get("CommonMsg/Gear/GearName_Head")
            .expect("CommonMsg/Gear/GearName_Head missing");
        let lang_clothes_names = lang_data
            .get("CommonMsg/Gear/GearName_Clothes")
            .expect("CommonMsg/Gear/GearName_Clothes missing");
        let lang_shoes_names = lang_data
            .get("CommonMsg/Gear/GearName_Shoes")
            .expect("CommonMsg/Gear/GearName_Shoes missing");
        for gear_id in &gear_ids {
            lang_gear_name.push(
                match &gear_id[..4] {
                    "Clt_" => get_str!(lang_clothes_names, &gear_id[4..]),
                    "Hed_" => get_str!(lang_hat_names, &gear_id[4..]),
                    "Shs_" => get_str!(lang_shoes_names, &gear_id[4..]),
                    other => panic!("{other} not a valid prefix"),
                }
                .to_string(),
            );
        }
        gear_name.push(lang_gear_name);
        brand_name.push(lang_brand_name);
        ability_name.push(lang_ability_name);
        drink_name.push(lang_drink_name);
    }
    let mut lang_file = File::create(Path::new(&out_dir).join("lang.rs"))
        .expect("creating file failed");
    write!(
        lang_file,
        "
        pub const GEAR_NAMES: [[&str; {}]; {}] = [{}];
        pub const BRAND_NAMES: [[&str; {}]; {}] = [{}];
        pub const ABILITY_NAMES: [[&str; {}]; {}] = [{}];
        pub const DRINK_NAMES: [[&str; {}]; {}] = [{}];
        ",
        gear_name[0].len(),
        gear_name.len(),
        gear_name
            .iter()
            .map(|translations| {
                format!(
                    "[{}]",
                    translations
                        .iter()
                        .map(|str| format!("{str:?}"))
                        .collect::<Vec<_>>()
                        .join(",")
                )
            })
            .collect::<Vec<_>>()
            .join(","),
        brand_name[0].len(),
        brand_name.len(),
        brand_name
            .iter()
            .map(|translations| {
                format!(
                    "[{}]",
                    translations
                        .iter()
                        .map(|str| format!("{str:?}"))
                        .collect::<Vec<_>>()
                        .join(",")
                )
            })
            .collect::<Vec<_>>()
            .join(","),
        ability_name[0].len(),
        ability_name.len(),
        ability_name
            .iter()
            .map(|translations| {
                format!(
                    "[{}]",
                    translations
                        .iter()
                        .map(|str| format!("{str:?}"))
                        .collect::<Vec<_>>()
                        .join(",")
                )
            })
            .collect::<Vec<_>>()
            .join(","),
        drink_name[0].len(),
        drink_name.len(),
        drink_name
            .iter()
            .map(|translations| {
                format!(
                    "[{}]",
                    translations
                        .iter()
                        .map(|str| format!("{str:?}"))
                        .collect::<Vec<_>>()
                        .join(",")
                )
            })
            .collect::<Vec<_>>()
            .join(","),
    )
    .unwrap();
    println!(
        "cargo:warning=hello from build at {}",
        SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .map(|a| a.as_secs())
            .unwrap_or(0)
    );
    println!("cargo:rerun-if-changed=data");
}
