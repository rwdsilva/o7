import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ center }) =>
    center &&
    css`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const StyledButton = styled.button`
  padding: 1em;
  border: none;
  outline: none;
  background: #18dcff;
  cursor: pointer;
  color: #fff;
  border-radius: 12px;
  font-weight: bold;
  :hover {
    box-shadow: 0 0 100px inset rgba(0, 0, 0, 0.1);
  }
  ${({ solicitation }) =>
    solicitation &&
    css`
      background: #ff9f1a;
    `}
    ${({ mobile }) =>
      mobile &&
      css`
        padding: 0.5em;
        border-radius: 6px;
      `}
  ${({ outline }) =>
    outline &&
    css`
      border: 1px solid #ff9f1a;
      background: transparent;
      color: #ff9f1a;
      :hover {
        background: #ff9f1a;
        color: #fff;
        box-shadow: none;
      }
    `}
    ${({ secundary }) =>
      secundary &&
      css`
        background: #7d5fff;
        border-color: #7d5fff;
        color: #fff;
        font-size: 1em;
        margin: 0.1em 0;
      `}
`;
