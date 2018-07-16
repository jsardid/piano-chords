const notesList = {
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

const chordsList = [
  { type: "Major", key: "C", notes: ["C", "E", "G"] },
  { type: "Major", key: "C#", notes: ["C#", "E#", "G#"] },
  { type: "Major", key: "D", notes: ["D", "F#", "A"] },
  { type: "Major", key: "Eb", notes: ["Eb", "G", "Bb"] },
  { type: "Major", key: "E", notes: ["E", "G#", "B"] },
  { type: "Major", key: "F", notes: ["F", "A", "C"] },
  { type: "Major", key: "F#", notes: ["F#", "A#", "C#"] },
  { type: "Major", key: "G", notes: ["G", "B", "D"] },
  { type: "Major", key: "Ab", notes: ["Ab", "C", "Eb"] },
  { type: "Major", key: "A", notes: ["A", "C#", "E"] },
  { type: "Major", key: "Bb", notes: ["Bb", "D", "F"] },
  { type: "Major", key: "B", notes: ["B", "D#", "F#"] },
  { type: "Minor", key: "C", notes: ["C", "Eb", "G"] },
  { type: "Minor", key: "C#", notes: ["C#", "E", "G#"] },
  { type: "Minor", key: "D", notes: ["D", "F", "A"] },
  { type: "Minor", key: "Eb", notes: ["Eb", "Gb", "Bb"] },
  { type: "Minor", key: "E", notes: ["E", "G", "B"] },
  { type: "Minor", key: "F", notes: ["F", "Ab", "C"] },
  { type: "Minor", key: "F#", notes: ["F#", "A", "C#"] },
  { type: "Minor", key: "G", notes: ["G", "Bb", "D"] },
  { type: "Minor", key: "Ab", notes: ["Ab", "B", "Eb"] },
  { type: "Minor", key: "A", notes: ["A", "C", "E"] },
  { type: "Minor", key: "Bb", notes: ["Bb", "Db", "F"] },
  { type: "Minor", key: "B", notes: ["B", "D", "F#"] }
];

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
