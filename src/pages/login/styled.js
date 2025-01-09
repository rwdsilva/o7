import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7d5fff;
  ${({ first }) =>
    first &&
    css`
      @media (max-width: 768px) {
        padding: 30% 0 15%;
      }
    `}
`;

export const Form = styled.div`
  width: 40%;
  background: rgb(243, 243, 243);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
  margin-top: 5%;
  button {
    margin-bottom: 1em;
  }
  p {
    color: rgba(0, 0, 0, 0.7);
    margin: 1em 0;
    span {
      color: #7d5fff;
      cursor: pointer;
    }
  }

  input {
    width: 80%;
    margin: 1em 0;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 10% 0 5%;
  }
`;
