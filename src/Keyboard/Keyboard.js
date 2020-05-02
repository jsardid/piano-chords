import React from "react";
import styled from "styled-components";
import { Key } from "./Key";

const includesKey = (keys, key) => {
  return Boolean(
    keys.find((keysItem) => `${keysItem.note}${keysItem.octave}` === key)
  );
};

export const Keyboard = ({ activeKeys = [] }) => {
  return (
    <KeyboardContainer>
      <Visor></Visor>
      <Ornament></Ornament>
      <KeysContainer>
        <Key pressed={includesKey(activeKeys, "A0")} type="white" />
        <Key pressed={includesKey(activeKeys, "A#0")} type="black" />
        <Key pressed={includesKey(activeKeys, "B0")} type="white" />
        <Key pressed={includesKey(activeKeys, "C1")} type="white" />
        <Key pressed={includesKey(activeKeys, "C#1")} type="black" />
        <Key pressed={includesKey(activeKeys, "D1")} type="white" />
        <Key pressed={includesKey(activeKeys, "D#1")} type="black" />
        <Key pressed={includesKey(activeKeys, "E1")} type="white" />
        <Key pressed={includesKey(activeKeys, "F1")} type="white" />
        <Key pressed={includesKey(activeKeys, "F#1")} type="black" />
        <Key pressed={includesKey(activeKeys, "G1")} type="white" />
        <Key pressed={includesKey(activeKeys, "G#1")} type="black" />
        <Key pressed={includesKey(activeKeys, "A1")} type="white" />
        <Key pressed={includesKey(activeKeys, "A#1")} type="black" />
        <Key pressed={includesKey(activeKeys, "B1")} type="white" />
        <Key pressed={includesKey(activeKeys, "C2")} type="white" />
        <Key pressed={includesKey(activeKeys, "C#2")} type="black" />
        <Key pressed={includesKey(activeKeys, "D2")} type="white" />
        <Key pressed={includesKey(activeKeys, "D#2")} type="black" />
        <Key pressed={includesKey(activeKeys, "E2")} type="white" />
        <Key pressed={includesKey(activeKeys, "F2")} type="white" />
        <Key pressed={includesKey(activeKeys, "F#2")} type="black" />
        <Key pressed={includesKey(activeKeys, "G2")} type="white" />
        <Key pressed={includesKey(activeKeys, "G#2")} type="black" />
        <Key pressed={includesKey(activeKeys, "A2")} type="white" />
        <Key pressed={includesKey(activeKeys, "A#2")} type="black" />
        <Key pressed={includesKey(activeKeys, "B2")} type="white" />
        <Key pressed={includesKey(activeKeys, "C3")} type="white" />
        <Key pressed={includesKey(activeKeys, "C#3")} type="black" />
        <Key pressed={includesKey(activeKeys, "D3")} type="white" />
        <Key pressed={includesKey(activeKeys, "D#3")} type="black" />
        <Key pressed={includesKey(activeKeys, "E3")} type="white" />
        <Key pressed={includesKey(activeKeys, "F3")} type="white" />
        <Key pressed={includesKey(activeKeys, "F#3")} type="black" />
        <Key pressed={includesKey(activeKeys, "G3")} type="white" />
        <Key pressed={includesKey(activeKeys, "G#3")} type="black" />
        <Key pressed={includesKey(activeKeys, "A3")} type="white" />
        <Key pressed={includesKey(activeKeys, "A#3")} type="black" />
        <Key pressed={includesKey(activeKeys, "B3")} type="white" />
        <Key pressed={includesKey(activeKeys, "C4")} type="white" />
        <Key pressed={includesKey(activeKeys, "C#4")} type="black" />
        <Key pressed={includesKey(activeKeys, "D4")} type="white" />
        <Key pressed={includesKey(activeKeys, "D#4")} type="black" />
        <Key pressed={includesKey(activeKeys, "E4")} type="white" />
        <Key pressed={includesKey(activeKeys, "F4")} type="white" />
        <Key pressed={includesKey(activeKeys, "F#4")} type="black" />
        <Key pressed={includesKey(activeKeys, "G4")} type="white" />
        <Key pressed={includesKey(activeKeys, "G#4")} type="black" />
        <Key pressed={includesKey(activeKeys, "A4")} type="white" />
        <Key pressed={includesKey(activeKeys, "A#4")} type="black" />
        <Key pressed={includesKey(activeKeys, "B4")} type="white" />
        <Key pressed={includesKey(activeKeys, "C5")} type="white" />
        <Key pressed={includesKey(activeKeys, "C#5")} type="black" />
        <Key pressed={includesKey(activeKeys, "D5")} type="white" />
        <Key pressed={includesKey(activeKeys, "D#5")} type="black" />
        <Key pressed={includesKey(activeKeys, "E5")} type="white" />
        <Key pressed={includesKey(activeKeys, "F5")} type="white" />
        <Key pressed={includesKey(activeKeys, "F#5")} type="black" />
        <Key pressed={includesKey(activeKeys, "G5")} type="white" />
        <Key pressed={includesKey(activeKeys, "G#5")} type="black" />
        <Key pressed={includesKey(activeKeys, "A5")} type="white" />
        <Key pressed={includesKey(activeKeys, "A#5")} type="black" />
        <Key pressed={includesKey(activeKeys, "B5")} type="white" />
        <Key pressed={includesKey(activeKeys, "C6")} type="white" />
        <Key pressed={includesKey(activeKeys, "C#6")} type="black" />
        <Key pressed={includesKey(activeKeys, "D6")} type="white" />
        <Key pressed={includesKey(activeKeys, "D#6")} type="black" />
        <Key pressed={includesKey(activeKeys, "E6")} type="white" />
        <Key pressed={includesKey(activeKeys, "F6")} type="white" />
        <Key pressed={includesKey(activeKeys, "F#6")} type="black" />
        <Key pressed={includesKey(activeKeys, "G6")} type="white" />
        <Key pressed={includesKey(activeKeys, "G#6")} type="black" />
        <Key pressed={includesKey(activeKeys, "A6")} type="white" />
        <Key pressed={includesKey(activeKeys, "A#6")} type="black" />
        <Key pressed={includesKey(activeKeys, "B6")} type="white" />
        <Key pressed={includesKey(activeKeys, "C7")} type="white" />
        <Key pressed={includesKey(activeKeys, "C#7")} type="black" />
        <Key pressed={includesKey(activeKeys, "D7")} type="white" />
        <Key pressed={includesKey(activeKeys, "D#7")} type="black" />
        <Key pressed={includesKey(activeKeys, "E7")} type="white" />
        <Key pressed={includesKey(activeKeys, "F7")} type="white" />
        <Key pressed={includesKey(activeKeys, "F#7")} type="black" />
        <Key pressed={includesKey(activeKeys, "G7")} type="white" />
        <Key pressed={includesKey(activeKeys, "G#7")} type="black" />
        <Key pressed={includesKey(activeKeys, "A7")} type="white" />
        <Key pressed={includesKey(activeKeys, "A#7")} type="black" />
        <Key pressed={includesKey(activeKeys, "B7")} type="white" />
        <Key pressed={includesKey(activeKeys, "C8")} type="white" />
      </KeysContainer>
    </KeyboardContainer>
  );
};

const KeyboardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Visor = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Ornament = styled.div`
  height: 4px;
  width: 100%;
  background-color: #d40000;
`;

const KeysContainer = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
`;
