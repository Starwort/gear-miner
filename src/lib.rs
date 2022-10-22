pub mod app;
pub mod components;
pub mod data;
pub mod lang;
pub mod routes;

use ability_miner::init_thread_pool;
use app::App;
use wasm_bindgen::prelude::*;
use web_sys::window;

// Use `std::alloc` as the global allocator.
#[global_allocator]
static ALLOC: std::alloc::System = std::alloc::System;

// This is the entry point for the web app
#[wasm_bindgen]
pub fn run() {
    wasm_logger::init(wasm_logger::Config::default());
    let window = window().expect("window missing");
    let navigator = window.navigator();
    init_thread_pool(navigator.hardware_concurrency());
    yew::start_app::<App>();
}
