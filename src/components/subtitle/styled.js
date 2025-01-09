import styled, { css } from "styled-components";

export const StyledSubTitle = styled.h3`
  ${({ finish }) =>
    finish &&
    css`
      color: #ff9f1a;
      text-align: center;
    `}
  ${({ dash }) =>
    dash &&
    css`
      color: #7d5fff;
    `}
`;
