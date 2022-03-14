import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  GameStartContainer,
  StartBoxHeader,
  BoxGameSwitch,
  Switch,
  GameStartFooter,
  GameStartButton,
  ButtonCpu,
  ButtonPlayer,
  IconContainer,
} from "./styled";

const Cross = ({ active }) => {
  return (
    <IconContainer active={active}>
      <svg viewBox="0 0 64 64">
        <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"></path>
      </svg>
    </IconContainer>
  );
};

const Circle = ({ active }) => {
  return (
    <IconContainer active={active}>
      <svg viewBox="0 0 64 64">
        <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"></path>
      </svg>
    </IconContainer>
  );
};

const Game = () => {
  const [selected, setSelected] = useState(false);
  const clickSwitch = () => setSelected(!selected);
  return (
    <Container>
      <Header>
        <Logo>
          <img src={`images/logo.svg`} />
        </Logo>
      </Header>
      <GameStartContainer>
        <StartBoxHeader>Pick player 1's mark</StartBoxHeader>
        <BoxGameSwitch onClick={clickSwitch}>
          <Switch selected={selected} />
          <Cross active={selected} className={"BtnCross"} />
          <Circle active={!selected} />
        </BoxGameSwitch>
        <GameStartFooter>Remember: x goes first</GameStartFooter>
      </GameStartContainer>
      <GameStartButton>
        <Link to={"/cpu-game"}>
          <ButtonCpu>New game (vs cpu)</ButtonCpu>
        </Link>
        <Link to={"/player-game"}>
          <ButtonPlayer>New game (vs player)</ButtonPlayer>
        </Link>
      </GameStartButton>
    </Container>
  );
};

export default Game;
