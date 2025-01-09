import React, { useState, useEffect } from "react";
import { Container, Box, Group } from "./styled";
import { Input } from "../register/styled";
import Title from "../../components/title";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const [state, setState] = useState([]);
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const {
    user: { user },
  } = useSelector((value) => value);
  const history = useHistory();

  useEffect(() => {
    fetch("https://api-o7.vercel.app/contact/list")
      .then((res) => res.json())
      .then((res) => {
        const reverse = res.list.reverse();
        setState(reverse);
        setList(reverse);
      });
  }, []);

  useEffect(() => {
    const array = [];
    list.map(
      (i) => !!i.name && (i.name.includes(value) ? array.push(i) : null)
    );
    !!value ? setState(array) : setState(list);
  }, [value]);

  useEffect(() => {
    const storage = localStorage.getItem("user");
    const teste = JSON.parse(storage);
    if (!!teste) {
      teste.type != "admin" && history.push("/login");
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <Container>
      <Input
        placeholder="Pesquisar por nome"
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "80%" }}
      />
      <Title text={`${state.length} pessoas encontradas`} />
      {state.map(
        (i) =>
          i.whats && (
            <Box>
              <Group>
                <p> Nome: {i.name} </p>
                <p> E-mail {i.email} </p>
              </Group>
              <Group>
                <p> CPF: {i.cpf} </p>
                {i.whats && <p>WhatsApp: {i.whats}</p>}
              </Group>
              <Group>
                <p> Valor: {i.value} </p>
                <p> Nº Parcelas {i.plots} </p>
                <p> Valor Parcelas {i.plot} </p>
              </Group>
              <Group>
                {!!i.birth && (
                  <p>Idade: {2020 - parseInt(i.birth.slice(0, 4))}</p>
                )}
                <p>Indicador por: {i.invite || "Anuncio"} </p>
              </Group>
            </Box>
          )
      )}
    </Container>
  );
};

export default Admin;
