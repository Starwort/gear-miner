#![allow(clippy::no_effect_underscore_binding, clippy::let_unit_value)]
use ability_miner::{get_results, Ability, Brand, Slot};
use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::Header;
use rocket::log::private::warn;
use rocket::serde::json::Json;
use rocket::{launch, options, post, routes, Request, Response};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct MiningData {
    rolls: Vec<(Ability, Option<Ability>)>,
    candidates: Option<Vec<u32>>,
    brand: Brand,
}

/// Catches all OPTION requests in order to get the CORS related Fairing
/// triggered.
#[options("/<_..>")]
fn all_options() {
    // Intentionally left empty
}

#[post("/mine", data = "<data>")]
fn mine(data: Json<MiningData>) -> Json<Vec<u32>> {
    warn!("Starting request for {data:?}");
    let Json(MiningData {
        rolls,
        candidates,
        brand,
    }) = data;
    let slots = rolls
        .iter()
        .map(|&(ability, drink)| {
            Slot {
                ability,
                drink,
            }
        })
        .collect::<Vec<_>>();

    warn!("Converted slots");
    let results = if let Some(candidates) = candidates {
        get_results(candidates, None, brand, &slots)
    } else {
        get_results(0..=u32::MAX, Some(100), brand, &slots)
    };
    warn!("Complete: {results:?}");
    Json(results)
}
pub struct Cors;

#[rocket::async_trait]
impl Fairing for Cors {
    fn info(&self) -> Info {
        Info {
            name: "Cross-Origin-Resource-Sharing Fairing",
            kind: Kind::Response,
        }
    }

    async fn on_response<'r>(
        &self,
        _request: &'r Request<'_>,
        response: &mut Response<'r>,
    ) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new(
            "Access-Control-Allow-Methods",
            "POST, PATCH, PUT, DELETE, HEAD, OPTIONS, GET",
        ));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(Cors)
        .mount("/api", routes![mine, all_options])
}
