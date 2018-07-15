import React from "react";
import styled from "styled-components";

export const Visor = props => {
  return (
    <VisorStyled>
      <Notes>
        {props.notesOn.map((note, i) => {
          return <span>{note}</span>;
        })}
      </Notes>
    </VisorStyled>
  );
};

const VisorStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const Notes = styled.div`
  width: 300px;
  height: 75px;
  background-color: #ffffff55;
`;
