#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use app::{crud, Note};
use std::collections::HashMap;

#[tauri::command]
fn get_notes() -> Result<HashMap<String, HashMap<String, HashMap<String, Vec<Note>>>>, String> {
  let notes = crud::get_notes().unwrap();
  println!("get notes: {:?}", notes);
  Ok(notes)
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![get_notes])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
