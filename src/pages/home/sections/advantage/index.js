import React from "react";
import { Container, Box, List } from "./styled";
import Title from "../../../../components/title";
import Description from "../../../../components/description";

const Advantage = () => {
  const list = [
    {
      uri: require("../../../../static/financeira-RTB.svg"),
      text:
        "Regulamentado: somos regulamentados pelo Banco Central Brasileiro (Bacen) como correspondente bancário.",
    },
    {
      uri: require("../../../../static/minutos-rtb.svg"),
      text:
        "Confiável: mais de 6 milhões de pessoas já solicitaram empréstimo online na Easy Empréstimos. Só falta você!",
    },
    {
      uri: require("../../../../static/6milhoes-rtb.svg"),
      text:
        "Acessível: taxas de juros a partir de 0,84% ao mês, sem pegadinha!",
    },
    {
      uri: require("../../../../static/taxas-rtb.svg"),
      text:
        "Segura: utilizamos tecnologia avançada para proteger seus dados. Só nossos parceiros têm acesso a eles.",
    },
    {
      uri: require("../../../../static/48horas-rtb.svg"),
      text:
        "Completa: temos mais de 30 parceiros reconhecidos no mercado para você solicitar o seu empréstimo.",
    },
    {
      uri: require("../../../../static/banco-central-rtb.svg"),
      text: "Rápida: ofertas de empréstimo pessoal em 5 minutos.",
    },
  ];
  return (
    <Container>
      <Title text="Por que contratar um empréstimo online com nossa empresa?" />
      <Description
        bold
        subtitle
        text="Te ajudamos a fazer a melhor escolha financeira com taxas de juros e parcelas que cabem no seu bolso. Aqui você pode tudo: quitar uma dívida, reformar a sua casa, abrir o seu negócio, resolver uma emergência e muito mais!"
      />
      <List>
        {list.map((i) => (
          <Box>
            <img src={i.uri} />
            <Description small text={i.text} />
          </Box>
        ))}
      </List>
    </Container>
  );
};

export default Advantage;
