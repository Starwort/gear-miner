pub mod agents;
pub mod app;
pub mod components;
pub mod data;
pub mod lang;
pub mod routes;

use app::App;
use wasm_bindgen::prelude::*;

// Use `std::alloc` as the global allocator.
#[global_allocator]
static ALLOC: std::alloc::System = std::alloc::System;

// This is the entry point for the web app
#[wasm_bindgen]
pub fn run() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::start_app::<App>();
}
