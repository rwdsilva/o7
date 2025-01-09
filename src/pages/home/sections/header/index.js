import React from "react";
import { Container, Box, StyledHeader } from "./styled";
import Simulator from "../../simulator";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Box>
          <h1>
            Empréstimo pessoal, rápido, seguro e com a menor taxa do mercado.
            Faça agora mesmo sua simulação e contrate já seu crédito.
          </h1>
        </Box>
        <Simulator />
      </Container>
    </StyledHeader>
  );
};

export default Header;
