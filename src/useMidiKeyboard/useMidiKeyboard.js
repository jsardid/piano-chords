import { useEffect, useReducer } from "react";
import WebMidi from "webmidi";

const getMidiInputs = (midiAccess) => {
  const inputs = [];
  midiAccess.inputs.forEach((port, key) => {
    inputs.push({
      id: port.id,
      manufacturer: port.manufacturer,
      name: port.name,
    });
  });
  return inputs;
};

const initialState = {
  midiAccessState: "idle",
  selectedInput: null,
  activeKeys: [],
  availableInputs: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "MIDI_ACCESS_APPROVED": {
      const inputs = getMidiInputs(action.midiAccess);
      return {
        ...state,
        midiAccessState: "approved",
        availableInputs: inputs,
        selectedInput: inputs[0] ? inputs[0].id : null,
      };
    }
    case "MIDI_ACCESS_CHANGED": {
      const inputs = getMidiInputs(action.midiAccess);
      const newState = {
        ...state,
        availableInputs: inputs,
      };
      if (!inputs.find((input) => (input.id === state.selectedInput))) {
        newState.selectedInput = inputs[0] ? inputs[0].id : null;
      }
      return newState;
    }
    case "MIDI_ACCESS_REJECTED": {
      return {
        ...state,
        midiAccessState: "rejected",
      };
    }
    default:
      throw new Error();
  }
}

const useMidiKeyboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { midiAccessState, selectedInput, activeKeys, availableInputs } = state;

  useEffect(() => {
    const initialize = async () => {
      try {
        const midiAccess = await navigator.requestMIDIAccess();
        dispatch({
          type: "MIDI_ACCESS_APPROVED",
          midiAccess,
        });
        midiAccess.onstatechange = (event) => {
          dispatch({
            type: "MIDI_ACCESS_CHANGED",
            midiAccess: event.target,
          });
        };
      } catch (error) {
        dispatch({
          type: "MIDI_ACCESS_REJECTED",
        });
      }
    };
    initialize();
  }, []);

  /*useEffect(() => {
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
  }, []);*/

  return {
    availableInputs,
    selectedInput,
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
