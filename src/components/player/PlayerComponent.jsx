import React from "react";
import styled from "styled-components";
import PlayerButtons from "../button/PlayerButtons";

export default function PlayerComponent() {
  return (
    <PlayerContainer>
      <h1 className="title">pick player 1's mark</h1>
      <PlayerButtons />
      <p className="remember">remember : x goes first</p>
    </PlayerContainer>
  );
}

const PlayerContainer = styled.div`
  width: 327px;
  background-color: var(--bg);
  padding: 24px 24px 30px 24px;
  box-shadow: inset 0px -8px 0px #10212a;
  border-radius: 15px;
  margin-top: 32px;
  text-align: center;
  margin-bottom: 20px;
`;
