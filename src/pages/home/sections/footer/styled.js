import styled from "styled-components";

export const Container = styled.div`
  padding: 3em 2em;
  box-sizing: border-box;
  background: #3b3b98;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0;
  @media (max-width: 768px) {
    div {
      width: 45%;
    }
  }
`;

export const BoxSelo = styled.div`
  width: 10%;
  @media (max-width: 768px) {
    div {
      width: 45%;
    }
  }
`;

export const BoxSeguro = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    width: inherit;
  }
`;
