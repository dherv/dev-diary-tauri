pub mod crud {

  use std::{collections::HashMap, vec};

  use chrono::NaiveDate;
  use rusqlite::{params, Connection};

  use crate::Note;

  pub fn store_note(note: Note) -> Result<(), rusqlite::Error> {
    let conn = Connection::open("diary.db")?;

    conn.execute(
      "CREATE TABLE IF NOT EXISTS notes (
                id                   INTEGER PRIMARY KEY,
                note_type            TEXT NOT NULL,
                description          TEXT NOT NULL,
                date                 DATETIME NOT NULL
                )",
      [],
    )?;

    conn.execute(
      "INSERT INTO notes (note_type, description, date) VALUES (?1, ?2, ?3)",
      params![note.note_type, note.description, note.date],
    )?;

    Ok(())
  }

  pub fn get_notes(
  ) -> Result<HashMap<String, HashMap<String, HashMap<String, Vec<Note>>>>, rusqlite::Error> {
    let conn = Connection::open("diary.db")?;

    let mut stmt =
      conn.prepare("SELECT id, note_type, description, date FROM notes ORDER BY date")?;
    let note_iter = stmt.query_map([], |row| {
      Ok(Note {
        id: row.get(0)?,
        note_type: row.get(1)?,
        description: row.get(2)?,
        date: row.get(3)?,
      })
    })?;

    let mut notes = Vec::new();

    for note in note_iter {
      notes.push(note?)
    }

    let mut result = HashMap::new();
    notes.into_iter().for_each(|note| {
      let month = NaiveDate::parse_from_str(&note.date, "%y/%m/%d")
        .unwrap()
        .format("%B")
        .to_string();

      let day = NaiveDate::parse_from_str(&note.date, "%y/%m/%d")
        .unwrap()
        .format("%d")
        .to_string();

      let month_group = result.entry(month).or_insert(HashMap::new());
      let day_group = month_group.entry(day).or_insert(HashMap::new());
      let notes = day_group.entry(note.note_type.clone()).or_insert(vec![]);
      notes.push(note);
    });

    // group similar by date

    Ok(result)
  }
}
