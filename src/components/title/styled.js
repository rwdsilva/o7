import styled, { css } from "styled-components";

export const StyledTitle = styled.h2`
  color: #7d5fff;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    text-align: center;
  }
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
  ${({ secundary }) =>
    secundary &&
    css`
      color: #ff9f1a;
    `}
`;
