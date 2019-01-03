import React, { Component } from "react";
import styled from "styled-components";
//import { getChordTypes } from "../utils/notes-service";
import { MultiSelectToggle } from "./../MultiSelectToggle";

class ChordsGame extends Component {
  state = {
    chordTypesAvailable: [
      "A Major",
      "C Major",
      "D Minor",
      "F Major",
      "G Minor"
    ],
    chordTypesSelected: ["A Major", "F Major", "G Minor"],
    chordsInGame: [],
    currentChord: {},
    gameStarted: false
  };

  handler = params => {
    console.log(params);
  };

  render() {
    return (
      <ChordsGameStyled>
        <MultiSelectToggle
          options={this.state.chordTypesAvailable}
          selected={this.state.chordTypesSelected}
          onChange={this.handler}
        />
      </ChordsGameStyled>
    );
  }
}

const ChordsGameStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export default ChordsGame;
