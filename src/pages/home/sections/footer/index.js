import React from "react";
import { Container, Group, BoxSelo, BoxSeguro } from "./styled";
import { BoxImage } from "../navbar/styled";
import { useHistory, useLocation } from "react-router-dom";
import Description from "../../../../components/description";

const Footer = () => {
  const history = useHistory();
  const location = useLocation();

  return location.pathname === "/dashboard" ? null : (
    <Container>
      <Group>
        <BoxImage onClick={() => history.push("/")}>
          <img src={require("../../../../static/logo.svg")} />
        </BoxImage>
        <BoxSelo>
          <img src={require("../../../../static/abc.svg")} />
        </BoxSelo>
      </Group>
      <Description
        center
        small
        white
        text="A Easy, incluindo suas marcas e domínios, é uma plataforma de contratação de empréstimos pessoais operacionalizada pelo BV FINANCEIRA S.A., Av. das Nações Unidas, 14171, Torre A, 8° andar, Conj. 82 - Vila Gertrudes CEP: 04794-000 - São Paulo/SP | CNPJ: 01.149.953/0001-89."
      />
      <Description
        style={{ marginTop: "1em" }}
        white
        small
        center
        text="A análise de crédito e cálculo das taxas de juros dependem de diversas informações disponibilizadas por você, tais como dados pessoais, valor solicitado e número de parcelas. Toda avaliação será realizada conforme a política de crédito da Instituição Financeira. Antes da contratação de qualquer serviço através da Easy Empréstimos, você receberá todas as condições e informações relativas ao empréstimo de forma completa e transparente, incluindo impostos incidentes (IOF) e o custo efetivo total (CET) da operação. O atraso ou não pagamento de prestações do contrato de empréstimo pessoal pode ter consequências legais, tais como a inclusão de nome nos cadastros dos órgãos de proteção ao crédito, o protesto de títulos e o ajuizamento de ações de cobrança."
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "2em",
        }}
      >
        <BoxSeguro>
          <img src={require("../../../../static/seguro.png")} />
        </BoxSeguro>
      </div>
    </Container>
  );
};

export default Footer;
