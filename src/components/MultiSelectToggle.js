import React from "react";
import styled from "styled-components";

export const MultiSelectToggle = props => {
  return (
    <MultiSelectStyled>
      {props.options.map((option, i) => {
        return <Toggle onClick={props.onChange}>{option}</Toggle>;
      })}
    </MultiSelectStyled>
  );
};

const MultiSelectStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const Toggle = styled.div`
  width: 150px;
  height: 50px;
  background-color: red;
  margin: 0px 5px;
  font-weight: bold;
`;

