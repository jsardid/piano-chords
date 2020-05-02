export const chordsList = [
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

const isSameChord = (chord1, chord2) => {
  return chord1.length !== chord2.length
    ? false
    : chord1.filter(
        noteChord1 => !chord2.find(noteChord2 => notesList[noteChord2].value === notesList[noteChord1].value)
      ).length === 0;
}

export const getChordNameFromNotes = (notes) => {
  const chordsMatch = chordsList.filter(chord =>
    isSameChord(chord.notes, notes)
  );
  return chordsMatch.length === 0
    ? ""
    : `${chordsMatch[0].key} ${chordsMatch[0].type}`;
}
