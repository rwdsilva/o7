import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 40%;
  background: #fff;
  box-shadow: 0 0 3px #ddd;
  padding: 1em;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 80%;
    margin-top: -5%;
    margin-bottom: 2em;
  }
`;

export const Title = styled.h3`
  margin: 1em 0;
  color: #7d5fff;
  letter-spacing: 1px;
  font-weight: 500;

  ${({ resume }) =>
    resume &&
    css`
      span {
        color: #ff9f1a;
        font-size: 1.2em;
        margin-left: 5px;
      }

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputValue = styled.input`
  border: none;
  outline: none;
  width: 5em;
`;

export const BoxRange = styled.div`
  padding: 1.5em 1em 1em 1em;
  border-radius: 0.25em;
  background: #f3f3f3;
  padding: 1em;
  border-radius: 0.25em;
  background: #f3f3f3;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
  }
  h5 {
    color: rgba(0, 0, 0, 0.8);
    margin: 0em 0 1.2em;
    span {
      font-size: 1.2em;
      margin-left: 5px;
      color: #ff9f1a;
    }
  }
  ${({ plots }) =>
    plots &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    `}
`;

export const Range = styled.input``;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.7em;
  }
`;

export const Plot = styled.div`
  width: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: bold;
  font-size: 2em;
  padding: 0.5em;
  box-sizing: border-box;
  color: #7d5fff;
  border: 1px solid #7d5fff;
  cursor: pointer;
  :hover {
    background: #7d5fff;
    color: #fff;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }

  ${({ selected }) =>
    selected &&
    css`
      background: #7d5fff;
      color: #fff;
    `}
`;
