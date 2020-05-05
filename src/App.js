import React from "react";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";

import { Keyboard } from "./Keyboard/Keyboard";
import { Visor } from "./visor/Visor";
import useMidiKeyboard from "./useMidiKeyboard/useMidiKeyboard";

const App = () => {
  const {
    activeKeys,
    activeNotes,
    availableInputs,
    selectedInput,
  } = useMidiKeyboard();
  return (
    <AppContainer>
      <Keyboard activeKeys={activeKeys} />
      <Dropdown
        onChange={() => {}}
        options={availableInputs.map((input) => ({
          key: input.id,
          text: `${input.name} - ${input.manufacturer}`,
          value: input.id,
        }))}
        placeholder="Available inputs"
        selection
        value={selectedInput}
      />

      <div>Inputs: {JSON.stringify(availableInputs)}</div>
      <div>Selected: {selectedInput}</div>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: radial-gradient(#a8a7d3, #7d7cb0);
`;

export default App;
