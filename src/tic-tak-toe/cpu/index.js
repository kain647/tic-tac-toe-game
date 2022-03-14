import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import {
  Container,
  Header,
  Logo,
  GameHeader,
  Icon,
  BtnBack,
  GameBoard,
  CellContainer,
  GameScores,
  Player,
  Draw,
  CpuScore,
  Score,
} from "./styled";

const dataCpu = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

const Cpu = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={`images/logo.svg`} />
        </Logo>
        <GameHeader>
          <Icon>
            <img src={`images/icon-o-grey.svg`} />
          </Icon>
          <label>turn</label>
        </GameHeader>
        <BtnBack>
          <RiArrowGoBackFill />
        </BtnBack>
      </Header>
      <GameBoard>
        {dataCpu.map((cell) => {
          return <Cell {...cell} />;
        })}
      </GameBoard>
      <GameScores>
        <Player>
          <label>O (YOU)</label>
          <Score>0</Score>
        </Player>
        <Draw>
          <label>0 Draw</label>
          <Score>0</Score>
        </Draw>
        <CpuScore>
          <label>X (Cpu)</label>
          <Score>0</Score>
        </CpuScore>
      </GameScores>
    </Container>
  );
};

const Cell = () => {
  return <CellContainer></CellContainer>;
};

export default Cpu;
