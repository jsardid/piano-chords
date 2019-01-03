import React, { Component } from "react";
import WebMidi from "webmidi";
import styled from "styled-components";
import { Keyboard } from "./../components/Keyboard/Keyboard";
import { Visor } from "./../components/Visor/Visor";
import ChordsGame from "./../components/ChordsGame/ChordsGame";
import {
  getChordNameFromNotes,
  sortKeys,
  getNotesFromKeys
} from "../utils/notes-service";

class App extends Component {
  state = { keysOn: [], notesOn: [], chordName: "" };

  render() {
    return (
      <AppStyled>
        <GameLayout>
          <ChordsGame />
        </GameLayout>
        <VisorLayout>
          <Visor
            keysOn={this.state.keysOn.map(key => `${key.name}${key.octave}`)}
            notesOn={this.state.notesOn}
            chordName={this.state.chordName}
          />
        </VisorLayout>
        <KeyboardLayout>
          <Keyboard
            notesOn={this.state.keysOn.map(key => `${key.name}${key.octave}`)}
          />
        </KeyboardLayout>
      </AppStyled>
    );
  }

  componentDidMount() {
    WebMidi.enable(() => {
      if (WebMidi.inputs.length > 0) {
        const input = WebMidi.inputs[0];

        input.addListener("noteon", "all", e => {
          this.setState(prevState => {
            prevState.keysOn.push(e.note);
            prevState.keysOn = sortKeys(prevState.keysOn);
            prevState.notesOn = getNotesFromKeys(prevState.keysOn);
            prevState.chordName = getChordNameFromNotes(prevState.notesOn);
            return prevState;
          });
        });

        input.addListener("noteoff", "all", e => {
          this.setState(prevState => {
            prevState.keysOn = prevState.keysOn.filter(
              note => note.number !== e.note.number
            );
            prevState.notesOn = getNotesFromKeys(prevState.keysOn);
            prevState.chordName = getChordNameFromNotes(prevState.notesOn);
            return prevState;
          });
        });
      }
    });
  }
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: radial-gradient(#a8a7d3, #7d7cb0);
`;

const GameLayout = styled.div`
  height: 500px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VisorLayout = styled.div`
  height: 75px;
  width: 100%;
  margin-bottom: 15px;
`;

const KeyboardLayout = styled.div`
  height: 350px;
  width: 100%;
`;

export default App;
