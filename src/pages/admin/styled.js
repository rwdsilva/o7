import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10% 0;
  @media (max-width: 768px) {
    padding: 25% 0;
  }
`;

export const Box = styled.div`
  width: 50%;
  padding: 1em;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid #ddd;
  margin: 1em 0;
  @media (max-width: 768px) {
    text-align: center;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
  }
`;
