import { notesList } from "./notes-list";
import { chordsList } from "./chords-list";

export function sortKeys(keys) {
  return keys.sort(
    (key1, key2) =>
      key1.number < key2.number ? -1 : key1.number > key2.number ? 1 : 0
  );
}

export function sortNotes(notes) {
  return notes.sort(
    (note1, note2) =>
      notesList[note1].order < notesList[note2].order
        ? -1
        : notesList[note1].order > notesList[note2].order
          ? 1
          : 0
  );
}

export function getNotesFromKeys(keys) {
  const unicNotes = keys.reduce(function(result, key) {
    return result.indexOf(key.name) !== -1 ? result : [...result, key.name];
  }, []);
  return sortKeys(unicNotes);
}



export const notesList = {
  Cb: { order: 1, value: 12 },
  C: { order: 2, value: 1 },
  "C#": { order: 3, value: 2 },
  Db: { order: 4, value: 2 },
  D: { order: 5, value: 3 },
  "D#": { order: 6, value: 4 },
  Eb: { order: 7, value: 4 },
  E: { order: 8, value: 5 },
  "E#": { order: 9, value: 6 },
  Fb: { order: 10, value: 5 },
  F: { order: 11, value: 6 },
  "F#": { order: 12, value: 7 },
  Gb: { order: 13, value: 7 },
  G: { order: 14, value: 8 },
  "G#": { order: 15, value: 9 },
  Ab: { order: 16, value: 9 },
  A: { order: 17, value: 10 },
  "A#": { order: 18, value: 11 },
  Bb: { order: 19, value: 11 },
  B: { order: 20, value: 12 },
  "B#": { order: 21, value: 1 }
};