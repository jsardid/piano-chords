import React from "react";
import styled from "styled-components";
import { Key } from "./../key/Key";

export const Keyboard = props => {
  return (
    <KeyboardStyled>
      <Key pressed={props.notesOn.find(note=>note==="A0")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="A#0")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="B0")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C1")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C#1")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="D1")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="D#1")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="E1")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F1")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F#1")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="G1")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="G#1")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="A1")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="A#1")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="B1")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C2")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C#2")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="D2")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="D#2")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="E2")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F2")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F#2")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="G2")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="G#2")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="A2")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="A#2")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="B2")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C3")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C#3")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="D3")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="D#3")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="E3")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F3")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F#3")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="G3")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="G#3")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="A3")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="A#3")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="B3")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C4")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C#4")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="D4")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="D#4")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="E4")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F4")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F#4")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="G4")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="G#4")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="A4")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="A#4")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="B4")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C5")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C#5")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="D5")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="D#5")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="E5")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F5")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F#5")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="G5")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="G#5")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="A5")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="A#5")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="B5")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C6")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C#6")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="D6")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="D#6")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="E6")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F6")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F#6")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="G6")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="G#6")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="A6")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="A#6")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="B6")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C7")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C#7")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="D7")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="D#7")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="E7")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F7")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="F#7")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="G7")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="G#7")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="A7")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="A#7")} type="black"/>
      <Key pressed={props.notesOn.find(note=>note==="B7")} type="white"/>
      <Key pressed={props.notesOn.find(note=>note==="C8")} type="white"/>
    </KeyboardStyled>
  );
};

const KeyboardStyled = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;
