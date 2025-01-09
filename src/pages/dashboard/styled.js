import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: inherit;
  }
`;

export const Form = styled.div`
  width: 80%;
  background: rgb(243, 243, 243);
  margin: 5% 0;
  padding: 1em;
  border-radius: 12px;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin: 0;
  }
`;

export const InfoUser = styled.div`
  border-bottom: 1px solid #ff9f1a;
  padding-bottom: 1em;
  a {
    text-decoration: none;
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
      width: 100%;
      margin: 1em 0;
      .small {
        font-size: 0.8em;
      }
    }
    span {
      color: #ff9f1a;
      font-size: 1.2em;
      margin-left: 5px;
    }
  }
`;
