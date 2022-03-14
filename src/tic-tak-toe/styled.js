import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 480px;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
export const Logo = styled.div`
  display: flex;
`;
export const GameStartContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: #1f3641;
  padding: 10px;
  border-radius: 1.5rem;
  box-shadow: inset 0 -12px 0 #111c22;
  margin-bottom: 24px;
`;
export const StartBoxHeader = styled.div`
  display: flex;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 2rem;
`;
export const BoxGameSwitch = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  width: 360px;
  padding: 15px;
  background-color: #1a2a33;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
`;
export const Switch = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  width: 180px;
  height: 45px;
  border-radius: 15px;
  background-color: #a8bfc9;
  cursor: pointer;
  content: "";
  transition: 0.4s;
  left: ${({ selected }) => (selected ? "15px" : "195px")};
  right: ${({ selected }) => (selected ? "195px" : "15px")};
`;
export const GameStartFooter = styled.div`
  display: flex;
  box-sizing: border-box;
  text-transform: uppercase;
  opacity: 0.5;
  font-size: 14px;
`;
export const GameStartButton = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  a {
    text-decoration: none;
  }
`;
export const ButtonCpu = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  color: #1a2a33;
  text-transform: uppercase;
  line-height: 30px;
  justify-content: center;
  padding: 25px;
  border-radius: 24px;
  margin-bottom: 20px;
  transition: all 0.4s ease;
  background-color: #f2b137;
  box-shadow: inset 0 -12px 0 #b77c0c;
  cursor: pointer;
  :hover {
    background-color: #ffc860;
  }
  :active {
    box-shadow: none;
  }
`;
export const ButtonPlayer = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  color: #1a2a33;
  text-transform: uppercase;
  line-height: 30px;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 24px;
  transition: all 0.4s ease;
  background-color: #31c3bd;
  box-shadow: inset 0 -12px 0 #1d716e;
  cursor: pointer;
  :hover {
    background-color: #65e9e4;
  }
  :active {
    box-shadow: none;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  color: ${({ active }) => (active ? "#1f3641" : "#a8bfc9")};
  z-index: 1;
  margin-right: 75px;
  margin-left: 75px;
  transition: color 1.5ms ease-in-out;
  cursor: pointer;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 32px;
    fill: currentColor;
  }
`;
