import React from "react";
import styled from "styled-components";

export const Key = props => {
  return props.type === "white" ? (
    <WhiteKey pressed={props.pressed} />
  ) : (
    <BlackKey pressed={props.pressed} />
  );
};

const WhiteKey = styled.div`
  height: 100%;
  width: 28px;
  background-color: ${props => (props.pressed ? "red" : "#eee")};
  margin: 1px;
`;

const BlackKey = styled.div`
  height: 66%;
  width: 20px;
  margin-left: -10px;
  margin-right: -10px;
  z-index: 10;
  background-color: ${props => (props.pressed ? "red" : "#222")};
`;
