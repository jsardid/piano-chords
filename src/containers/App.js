import React, { Component } from "react";
import WebMidi from "webmidi";
import styled from "styled-components";
import { Keyboard } from "./../components/keyboard/Keyboard";
import { Visor } from "./../components/visor/Visor";

class App extends Component {
  state = { notesOn: [] };

  render() {
    return (
      <AppStyled>
        <VisorLayout>
          <Visor notesOn={this.state.notesOn} />
        </VisorLayout>
        <KeyboardLayout>
          <Keyboard notesOn={this.state.notesOn}/>
        </KeyboardLayout>
      </AppStyled>
    );
  }

  componentDidMount() {
    WebMidi.enable(() => {
      const input = WebMidi.inputs[0];

      input.addListener("noteon", "all", e => {
        this.setState(prevState => {
          prevState.notesOn.push(e.note.name + e.note.octave);
          return prevState;
        });
      });

      input.addListener("noteoff", "all", e => {
        this.setState(prevState => {
          prevState.notesOn = prevState.notesOn.filter(
            note => note !== e.note.name + e.note.octave
          );
          return prevState;
        });
      });
    });
  }
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #a8a7d3;
`;

const VisorLayout = styled.div`
  height: 500px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const KeyboardLayout = styled.div`
  height: 350px;
  width: 100%;
`;

export default App;
