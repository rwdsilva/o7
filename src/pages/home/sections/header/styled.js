import styled from "styled-components";
import background from "../../../../static/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    height: inherit;
    background: inherit;
  }
`;

export const StyledHeader = styled.div`
  background: #000;
  @media (max-width: 768px) {
    background: #fff;
    padding-top: 10vh;
  }
`;

export const Box = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    background-image: url(${background});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      width: 100%;
    }
  }
  h1 {
    width: 97%;
    font-size: 2.5em;
    text-align: center;
    letter-spacing: 4px;
    font-weight: 400;
    color: #fff;
    @media (max-width: 768px) {
      font-weight: bold;
      font-size: 1.2em;
      color: #000;
      width: 80%;
    }
  }
`;
