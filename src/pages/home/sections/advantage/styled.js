import styled from "styled-components";

export const Container = styled.div`
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

export const List = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Box = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  margin: 2em 0;
  img {
    width: 5em;
    height: 5em;
  }
  p {
    margin-left: 1em;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
