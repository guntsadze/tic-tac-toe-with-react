import React from "react";
import styled from "styled-components";
import { img } from "../../assets";
import XO from "../../components/XO/XO";

export default function Header({ restart }) {
  return (
    <BoardHeader>
      <XO />
      <TurnBox>
        <img style={{ width: "16px" }} src={img.xGray} />
        <Turn>turn</Turn>
      </TurnBox>
      <button onClick={restart} className="restart">
        <img src={img.restart} />
      </button>
    </BoardHeader>
  );
}

const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 328px;
`;

const TurnBox = styled.div`
  width: 96px;
  height: 40px;
  box-shadow: inset 0px -4px 0px #10212a;
  border-radius: 5px;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;

const Turn = styled.h3`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 17px;
  letter-spacing: 0.88px;
  color: var(--light);
`;
