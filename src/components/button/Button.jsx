import React from "react";
import styled from "styled-components";

function Button(props) {
  return <Btn className={props.className}>{props.title}</Btn>;
}

const Btn = styled.button`
  height: 56px;
  border-radius: 15px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 16px;
  border: none;
`;

export default Button;
