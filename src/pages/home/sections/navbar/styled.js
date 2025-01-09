import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  box-shadow: 0 2px 3px #ddd;
  background: #fff;
  box-sizing: border-box;
  position: fixed;
`;

export const Option = styled.a`
  color: #7d5fff;
  font-weight: bold;
  margin: 0 3em;
  transition: 0.1s;
  padding: 0.5em;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid transparent;
  :hover {
    color: #18dcff;
    border: 1px solid #18dcff;
  }
`;

export const BoxImage = styled.div`
  width: 10%;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const BoxMenu = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  background: #fff;
  width: 50%;
`;
