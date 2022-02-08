export interface Note {
  id: number;
  note_type: string;
  description: string;
}

export interface NotesMap {
  [month: string]: { [day: string]: { [noteType: string]: Note[] } };
}

export enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
