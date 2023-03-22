import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import PlayerComponent from "../player/PlayerComponent";
import XO from "../XO/XO";

export default function Welcome() {
  return (
    <WelcomeContainer>
      <XO />
      <PlayerComponent />
      <Button className="cpu" title="new game (vs cpu)" />
      <Button className="player" title="new game (vs player)" />
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
