import React, { useState, useEffect } from "react";
import WebMidi from "webmidi";

const useMidiKeyboard = () => {
  const [activeKeys, setActiveKeys] = useState([]);

  useEffect(() => {
    WebMidi.enable(() => {
      if (WebMidi.inputs.length > 0) {
        const input = WebMidi.inputs[0];

        input.addListener("noteon", "all", (e) => {
          setActiveKeys((prev) => {
            return [...prev, e.note];
          });
        });

        input.addListener("noteoff", "all", (e) => {
          setActiveKeys((prev) =>
            prev.filter((note) => note.number !== e.note.number)
          );
        });
      }
    });
  }, []);

  return {
    activeKeys: getSortedActiveKeys(activeKeys),
    activeNotes: getUniqueNotes(activeKeys),
  };
};

const getSortedActiveKeys = (keys) => {
  return keys
    .slice()
    .sort((key1, key2) => key1.number - key2.number)
    .map((key) => ({ note: key.name, octave: key.octave }));
};

const getUniqueNotes = (keys) => {
  return keys.reduce((result, key) => {
    return result.includes(key.name) ? result : [...result, key.name];
  }, []);
};

export default useMidiKeyboard;
