use serde::de::DeserializeOwned;
use serde::{Deserialize, Serialize};
use yew::prelude::*;
use yew_hooks::prelude::*;

/// About page
#[function_component(About)]
pub fn about() -> Html {
    html! {
        {"Todo"}
    }
}

async fn fetch_repo(repo: String) -> Result<Repo, Error> {
    fetch::<Repo>(format!("https://api.github.com/repos/{}", repo)).await
}

/// You can use reqwest or other crates to fetch your api.
async fn fetch<T>(url: String) -> Result<T, Error>
where
    T: DeserializeOwned,
{
    let response = reqwest::get(url).await;
    if let Ok(data) = response {
        if let Ok(repo) = data.json::<T>().await {
            Ok(repo)
        } else {
            Err(Error::DeserializeError)
        }
    } else {
        Err(Error::RequestError)
    }
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
struct Repo {
    id: i32,
    name: String,
    full_name: String,
    description: String,
}

// You can use thiserror to define your errors.
#[derive(Clone, Debug, PartialEq)]
enum Error {
    RequestError,
    DeserializeError,
    // etc.
}

#[cfg(test)]
mod tests {
    use wasm_bindgen_test::*;

    wasm_bindgen_test_configure!(run_in_browser);

    use yew::start_app;

    use super::About;

    #[wasm_bindgen_test]
    fn about_page_has_an_app_link() {
        start_app::<About>();

        let app_links = gloo_utils::document().get_elements_by_class_name("app-link");

        assert_eq!(app_links.length(), 1);

        let link = app_links.item(0).expect("No app-link").inner_html();
        assert_eq!(link, "Create Yew App");
    }
}
