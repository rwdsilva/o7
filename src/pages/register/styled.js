import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Resume = styled.div`
  padding: 1em;
  box-sizing: border-box;
  border: 1px solid #ff9f1a;
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 0.5em;
  }
  h4 {
    margin: 0;
    color: #7d5fff;
    letter-spacing: 1px;
    font-weight: 500;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 0.5em;
    }
    span {
      color: #ff9f1a;
      font-size: 1.2em;
      margin-left: 5px;
    }
  }
`;

export const Form = styled.div`
  width: 60%;
  background: #f3f3f3;
  margin-top: 10%;
  margin-bottom: 5%;
  padding: 1em;
  border-radius: 12px;
  @media (max-width: 768px) {
    margin-top: 25%;
    width: 80%;
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em 0;
  ${({ between }) =>
    between &&
    css`
      justify-content: space-between;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
    `}
  @media(max-width: 768px) {
    flex-wrap: wrap;
    margin: 0;
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 1em;
  border: 1px solid #7d5fff;
  border-radius: 10px;
  width: 43%;
  color: #7d5fff;
  ::placeholder {
    color: #7d5fff;
  }
  @media (max-width: 768px) {
    margin: 0.5em 0;
    width: 100%;
  }
`;
