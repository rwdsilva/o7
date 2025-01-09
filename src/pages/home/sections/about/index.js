import React from "react";
import { Container, Box, BoxImage } from "./styled";
import Title from "../../../../components/title";
import Description from "../../../../components/description";
import SubTitle from "../../../../components/subtitle";

const About = () => {
  const list = [
    {
      title: "Tecnologia",
      text:
        "A Easy Empréstimos é a primeira empresa a oferecer o serviço de crédito pessoal online no Brasil. Através de tecnologia própria e um avançado sistema de análise de dados, todo processo do cadastro até a avaliação de crédito pode ser feita em poucos minutos. Os melhores créditos pessoais estão no aqui!",
      uri: require("../../../../static/notebook-56d82747468f273497b6b130e75e7fb8d62c510f04a8a5d90c8c0e1ce5ce2393.svg"),
    },
    {
      title: "Legislação",
      text:
        "Nossa empresa trabalha dentro das normas rigorosas da legislação brasileira, com todas as autorizações e registros necessários para prestar os seus serviços de financimento pessoal online com transparência e total segurança para você. Somos correspondente bancário que viabiliza os pedidos de empréstimos pessoais de forma mais prática e rápida para o cliente.",
      uri: require("../../../../static/file-7f2efd5e189259b04509e77d7743edb5cc76d045e33c5a71a414a8a273ce20d2.svg"),
    },
    {
      title: "Inovação",
      text:
        "Se já é bom fechar negócio e pagar pela internet, imagine contratar, pagar e receber em sua conta em poucas horas o seu empréstimo pessoal online. A Easy Empréstimos é a primeira empresa a tornar isso possível no Brasil. Agora, em poucos passos, de forma simples e rápida você pode contratar o seu crédito online sem sair de casa, pelo computador ou celular. Easy Empréstimos, pioneira em inovação!",
      uri: require("../../../../static/bulb-a9a34bda0cab04cf8085426dcb862d4ac9868f60aa9857c9847095aba3916716.svg"),
    },
    {
      title: "Segurança",
      text:
        "Todas as informações cadastrais fornecidas são protegidas pelos termos da legislação brasileira e das melhores práticas internacionais de proteção de dados. Com o Easy Empréstimos, seu empréstimo pessoal é, além de simples e rápido, muito seguro. Com tecnologia de última geração, garantimos proteção aos dados de nossos clientes.",
      uri: require("../../../../static/lock-21a4b8f15e2753e9219931e0a0ae6cc152b0806dfcd23adf7af4aff65ad4d1d0.svg"),
    },
  ];
  return (
    <Container>
      <Title text="Quem somos" />
      <Description
        bold
        subtitle
        text="Nós nascemos em 2014 com o ideal de oferecer uma opção de crédito pessoal online para quem normalmente não teria acesso através das instituições financeiras tradicionais. De forma flexível e inovadora, nós simplificamos para você todo o processo de empréstimo pessoal. Basta selecionar o valor do crédito pessoal, informar seus dados, aguardar a avaliação e receber o depósito direto na sua conta bancária em poucas horas. Foque no que é mais vantagem para você. Easy Emprestimos!"
      />
      <Title text="Nossos diferenciais" />
      {list.map((i) => (
        <Box>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "40%",
            }}
          >
            <BoxImage>
              <img src={i.uri} />
            </BoxImage>
            <SubTitle style={{ margin: 0 }} text={i.title} />
          </div>
          <Description small text={i.text} />
        </Box>
      ))}
    </Container>
  );
};

export default About;
