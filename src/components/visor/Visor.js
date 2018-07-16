import React from "react";
import styled from "styled-components";

export const Visor = props => {
  return (
    <VisorStyled>
      <KeysDisplay>
        {props.keysOn.map((key, i) => {
          return <Note>{key}</Note>;
        })}
      </KeysDisplay>
      <NotesDisplay>
        {props.notesOn.map((note, i) => {
          return <Note>{note}</Note>;
        })}
      </NotesDisplay>
      <ChordDisplay>
        <span>{props.chordName}</span>
      </ChordDisplay>
    </VisorStyled>
  );
};

const VisorStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const KeysDisplay = styled.div`
  width: 510px;
  height: 75px;
  background-color: #ffffff30;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00000077;
  font-size: 20px;
  font-weight: bold;
`;

const ChordDisplay = styled.div`
  width: 510px;
  height: 75px;
  background-color: #ffffff30;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00000077;
  font-size: 20px;
  font-weight: bold;
`;

const NotesDisplay = styled.div`
  width: 510px;
  height: 75px;
  background-color: #ffffff30;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00000077;
  font-size: 20px;
  font-weight: bold;
`;


const Note = styled.div`
  margin: 0px 5px;
`;
