use ability_miner::{get_results, Ability, Brand, Slot};
use serde::{Deserialize, Serialize};
use yew_agent::{AgentLink, HandlerId, Public};

pub struct Agent {
    link: AgentLink<Self>,
}

#[derive(Serialize, Deserialize)]
pub struct AgentInput(
    pub Brand,
    pub Vec<(Ability, Option<Ability>)>,
    pub Option<(Vec<u32>, usize)>,
);

impl yew_agent::Agent for Agent {
    type Input = AgentInput;
    type Message = ();
    type Output = Vec<u32>;
    type Reach = Public<Self>;

    fn create(link: AgentLink<Self>) -> Self {
        Self {
            link,
        }
    }

    fn update(&mut self, _msg: Self::Message) {
        // no messaging
    }

    fn handle_input(&mut self, msg: Self::Input, id: HandlerId) {
        // this runs in a web Agent
        // and does not block the main
        // browser thread!

        let slots = msg
            .1
            .iter()
            .map(|&(ability, drink)| {
                Slot {
                    ability,
                    drink,
                }
            })
            .collect::<Vec<_>>();

        let results = if let Some((candidates, _)) = msg.2 {
            get_results(candidates.into_iter(), Some(100), msg.0, &slots)
        } else {
            get_results(0..=u32::MAX, Some(100), msg.0, &slots)
        };

        self.link.respond(id, results);
    }

    fn name_of_resource() -> &'static str {
        "Agent.js"
    }
}
