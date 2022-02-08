use chrono::{
  format::{DelayedFormat, StrftimeItems},
  Local,
};
mod database;
pub use database::crud;

#[derive(Debug, serde::Serialize)]
pub struct Note {
  pub id: Option<u32>,
  pub note_type: String,
  pub description: String,
  pub date: String,
}

impl Note {
  pub fn new(id: Option<u32>, note_type: String, description: String, date: String) -> Note {
    Note {
      id,
      note_type,
      description,
      date,
    }
  }
}

pub fn get_date() -> DelayedFormat<StrftimeItems<'static>> {
  Local::now().format("%D")
}

// pub fn ask_type<'a>() -> &'a str {
//     let selections = &["frontend", "backend", "soft skills"];

//     let selection = Select::with_theme(&ColorfulTheme::default())
//         .with_prompt("select the note type")
//         .default(0)
//         .items(&selections[..])
//         .interact()
//         .unwrap();

//     println!("Enjoy your {}!", selections[selection]);
//     selections[selection]
// }

// pub fn ask_description() -> String {
//     let description: String = Input::with_theme(&ColorfulTheme::default())
//         .with_prompt("what did you learn today")
//         .default("Today I learnt".to_string())
//         .interact_text()
//         .unwrap();

//     println!("description: {}", &description);
//     description
// }
