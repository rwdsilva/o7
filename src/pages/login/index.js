import React, { useState, useEffect } from "react";
import { Container, Form } from "./styled";
import { Input } from "../register/styled";
import Button from "../../components/button";
import Title from "../../components/title";
import { useSelector, useDispatch } from "react-redux";
import { requestAccess, requestRegisterUser } from "../../redux/user";
import { useHistory } from "react-router-dom";
import animationData from "../../static/7774-loading.json";
import Lottie from "react-lottie";

const Login = ({ match }) => {
  const [firstAccess, setFirstAccess] = useState(false);
  const [credentials, setCredentials] = useState({ code: match.params.code });
  const {
    user: { user },
  } = useSelector((value) => value);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.type === "admin") {
      history.push("/admin");
    } else {
      !!user._id && history.push("/dashboard");
    }
  }, [user]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Container first={firstAccess}>
      <Form>
        <div></div>
        <Title center text="Seja bem vindo" />
        <Input
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          placeholder="E-mail"
        />
        <Input
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          placeholder="Senha"
          type="password"
        />
        {!!firstAccess && (
          <>
            <Input
              value={credentials.name}
              onChange={(e) =>
                setCredentials({ ...credentials, name: e.target.value })
              }
              placeholder="Nome Completo"
            />
            <Input
              value={credentials.cpf}
              onChange={(e) =>
                setCredentials({ ...credentials, cpf: e.target.value })
              }
              placeholder="CPF"
            />
            <Input
              value={credentials.whats}
              onChange={(e) =>
                setCredentials({ ...credentials, whats: e.target.value })
              }
              placeholder="WhatsApp"
            />
            <Input
              value={credentials.code}
              disabled={!!match.params.code}
              onChange={(e) =>
                setCredentials({ ...credentials, code: e.target.value })
              }
              placeholder="Código de cadastro"
            />
          </>
        )}
        {!firstAccess ? (
          <p>
            Primeiro acesso?
            <span onClick={() => setFirstAccess(true)}> Clique aqui</span>
          </p>
        ) : (
          <p>
            <span onClick={() => setFirstAccess(false)}>Voltar</span>
          </p>
        )}
        {loading ? (
          <Lottie options={defaultOptions} height={100} width={100} />
        ) : (
          <Button
            secundary
            text={firstAccess ? "Cadastrar" : "Acessar"}
            onClick={() => {
              setLoading(true);
              firstAccess
                ? dispatch(requestRegisterUser(credentials))
                : dispatch(requestAccess(credentials));
            }}
          />
        )}
        <div></div>
      </Form>
    </Container>
  );
};

export default Login;
