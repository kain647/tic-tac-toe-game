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
  FirstPlayer,
  SecondPlayer,
  Draw,
  Score,
} from "./styled";

const dataPlayer = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

const PlayerGame = () => {
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
        {dataPlayer.map((cell) => {
          return <Cell {...cell} />;
        })}
      </GameBoard>
      <GameScores>
        <FirstPlayer>
          <label>O (1 Player)</label>
          <Score>0</Score>
        </FirstPlayer>
        <Draw>
          <label>Draw</label>
          <Score>0</Score>
        </Draw>
        <SecondPlayer>
          <label>X (2 Player)</label>
          <Score>0</Score>
        </SecondPlayer>
      </GameScores>
    </Container>
  );
};

const Cell = () => {
  return <CellContainer></CellContainer>;
};

export default PlayerGame;
