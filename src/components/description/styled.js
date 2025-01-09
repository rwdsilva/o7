import styled, { css } from "styled-components";

export const StyledDescription = styled.p`
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
  ${({ small }) =>
    small &&
    css`
      font-size: 0.9em;
    `}
    ${({ white }) =>
      white &&
      css`
        color: #fff;
        opacity: 0.7;
      `}
    ${({ center }) =>
      center &&
      css`
        text-align: center;
      `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
    ${({ subtitle }) =>
      subtitle &&
      css`
        width: 70%;
        text-align: center;
        margin-bottom: 2em;
        @media (max-width: 768px) {
          width: 90%;
        }
      `}
`;
