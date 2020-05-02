import React from "react";
import styled from "styled-components";
import { Keyboard } from "./Keyboard/Keyboard";
import { Visor } from "./visor/Visor";
import useMidiKeyboard from "./useMidiKeyboard/useMidiKeyboard";

const App = () => {
  const { activeKeys, activeNotes } = useMidiKeyboard();
  return (
    <AppContainer>
      <Keyboard activeKeys={activeKeys} />
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
