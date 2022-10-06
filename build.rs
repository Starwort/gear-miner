use std::env;
use std::fs::File;
use std::io::Write;
use std::path::Path;
use std::time::{SystemTime, UNIX_EPOCH};

use serde_json::{Map, Result, Value};

fn main() -> Result<()> {
    let out_dir = env::var_os("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("gear.rs");
    let mut out_file = File::create(dest_path).expect("creating file failed");
    write!(
        out_file,
        "
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
        macro_rules! get_str {
            ($item:ident, $key:literal) => {
                $item.get($key).unwrap().as_str().unwrap()
            };
        }
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
        pub enum GearID {{
            {}
        }}

        pub const GEAR: [GearInfo; {}]: [{}];
        ",
        gear_ids.join(","),
        gear_info.len(),
        gear_info.join(","),
    )
    .unwrap();
    let mut gear_name: Vec<String> = Vec::new();
    let mut brand_name: Vec<String> = Vec::new();
    let mut ability_name: Vec<String> = Vec::new();
    let mut drink_name: Vec<String> = Vec::new();
    for (i, &lang) in [
        "CNzh", "EUde", "EUen", "EUes", "EUfr", "EUit", "EUnl", "EUru", "JPja", "KRko",
        "TWzh", "USen", "USes", "USfr",
    ]
    .iter()
    .enumerate()
    {
        let lang_data: Map<String, Value> = serde_json::from_reader(
            File::open(lang_dir.join(format!("{lang}.json"))).unwrap(),
        )
        .unwrap();
    }
    println!(
        "cargo:warning=hello from build at {}",
        SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .map(|a| a.as_secs())
            .unwrap_or(0)
    );
    println!("cargo:rerun-if-changed=data");
    Ok(())
}
