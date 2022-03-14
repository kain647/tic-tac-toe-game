import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Header = styled.div`
  display: flex;
  width: 460px;
  margin: 0 auto;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
  display: flex;
  img {
    width: 72px;
    height: 32px;
  }
`;
export const GameHeader = styled.div`
  display: flex;
  height: 52px;
  width: 140px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #1f3641;
  box-shadow: inset 0 -4px 0 #10212a;
  padding: 0 10px 6px;
  transform: translateX(-11px);
`;
export const Icon = styled.div`
  display: flex;

  img {
    width: var(--size);
    height: var(--size);
    --size: 20px;
    margin-right: 10px;
  }
`;
export const BtnBack = styled.div`
  display: flex;
  height: 52px;
  padding: 0 16px;
  border-radius: 10px;
  width: auto;
  justify-content: center;
  align-items: center;
  background: #a8bfc9;
  box-shadow: inset 0 -4px 0 #6b8997;
  cursor: pointer;
  svg {
    z-index: 5;
    color: black;
    transform: scaleX(-1);
  }
  :hover {
    background-color: #dbe8ed;
  }
`;
export const GameBoard = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-gap: 20px;
  gap: 20px;
  height: 460px;
  margin: 20px 0 19px;
`;
export const CellContainer = styled.div`
  display: flex;
  background: #1f3641;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 -8px 0 #10212a;
  height: 140px;
  width: 140px;
  cursor: pointer;
`;
export const GameScores = styled.div`
  display: flex;
  width: 460px;
  justify-content: space-between;
`;
export const FirstPlayer = styled.div`
  display: flex;
  background-color: #f2b137;
  border-radius: 15px;
  height: 72px;
  width: 140px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  label {
    font-size: 14px;
    line-height: 17.64px;
    letter-spacing: 0.88px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #1f3641;
    text-transform: uppercase;
  }
`;
export const SecondPlayer = styled.div`
  display: flex;
  background-color: #a8bfc9;
  border-radius: 15px;
  height: 72px;
  width: 140px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  label {
    font-size: 14px;
    line-height: 17.64px;
    letter-spacing: 0.88px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #1f3641;
    text-transform: uppercase;
  }
`;
export const Draw = styled.div`
  display: flex;
  background-color: #31c3bd;
  border-radius: 15px;
  height: 72px;
  width: 140px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  label {
    font-size: 14px;
    line-height: 17.64px;
    letter-spacing: 0.88px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #1f3641;
    text-transform: uppercase;
  }
`;
export const Score = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  letter-spacing: 1.5px;
  font-weight: 700;
  color: #1f3641;
`;
