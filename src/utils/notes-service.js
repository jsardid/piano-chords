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

export function getChordNameFromNotes(notes) {
  const chordsMatch = chordsList.filter(chord =>
    isSameChord(chord.notes, notes)
  );
  return chordsMatch.length === 0
    ? ""
    : `${chordsMatch[0].key} ${chordsMatch[0].type}`;
}

function isSameChord(chord1, chord2) {
  return chord1.length !== chord2.length
    ? false
    : chord1.filter(
        noteChord1 => !chord2.find(noteChord2 => notesList[noteChord2].value === notesList[noteChord1].value)
      ).length === 0;
}
