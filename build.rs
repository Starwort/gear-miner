use std::path::Path;
use std::time::{SystemTime, UNIX_EPOCH};
use std::{env, fs};

fn main() {
    let out_dir = env::var_os("OUT_DIR").unwrap();
    let dest_path = Path::new(&out_dir).join("hello.rs");
    fs::write(
        &dest_path,
        "pub fn message() -> &'static str {
            \"Hello, World!\"
        }
        ",
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
