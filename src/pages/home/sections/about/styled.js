import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 59%;
  justify-content: space-between;
  margin: 2em 0;
  height: 7em;
  justify-content: center;
  p {
    width: 75%;
  }
  h3 {
    color: #18dcff;
  }
  @media (max-width: 768px) {
    height: inherit;
    flex-direction: column;
    text-align: center;
    width: 90%;
    p {
      width: 100%;
      margin-top: 0.5em;
    }
  }
`;

export const BoxImage = styled.div`
  width: 10%;
  margin-bottom: 0.5em;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
