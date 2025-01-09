import React, { useState, useEffect } from "react";
import { Container, Form, Input, Group, Resume } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import Title from "../../components/title";
import Button from "../../components/button";
import { useHistory } from "react-router-dom";
import { requestContact } from "../../redux/user";
import Lottie from "react-lottie";
import animationData from "../../static/7774-loading.json";
import SubTitle from "../../components/subtitle";

const Register = () => {
  const {
    user: { form, createSuccess },
  } = useSelector((value) => value);

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    !form.value && history.push("/");
  }, [form]);

  const [credentials, setCredentials] = useState({});
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const ios = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    const storage = localStorage.getItem("invite");
    setCredentials({ ...credentials, invite: storage, type: 'admin' });
  }, []);

  return (
    <Container>
      <Form>
        {createSuccess ? (
          <div style={{ padding: "5em 0" }}>
            <Title
              center
              text="Parabéns, seu cadastro foi realizado com sucesso"
            />
            <SubTitle
              finish
              text="Em breve um de nossos atendentes entrara em contato com você"
            />
            <Button
              onClick={() => history.push("/")}
              center
              outline
              text="Voltar para o inicio"
            />
          </div>
        ) : (
          <>
            <Resume>
              <Group between>
                <h4>
                  Valor solicitado: <span>R$ {form.value}</span>
                </h4>
                <h4>
                  Nº parcelas: <span>{form.plots}X</span>
                </h4>
              </Group>
              <Group between>
                <h4>
                  Valor por parcela: <span>R$ {form.plot}</span>
                </h4>
                <h4>
                  Valor total a pagar: <span>R$ {form.total}</span>
                </h4>
              </Group>
              {!!credentials.invite && (
                <h4>Código de indicação: {credentials.invite}</h4>
              )}
            </Resume>
            <Title center text="Cadastro" />
            <Group>
              <Input
                value={credentials.name}
                onChange={(e) =>
                  setCredentials({ ...credentials, name: e.target.value })
                }
                placeholder="Nome completo"
              />
              <Input
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                placeholder="E-mail"
                type="email"
              />
            </Group>
            <Group>
              <Input
                value={credentials.birth}
                onChange={(e) =>
                  setCredentials({ ...credentials, birth: e.target.value })
                }
                placeholder="Data de Nascimento "
                style={{ background: "#fff" }}
                type={ios ? "text" : "date"}
              />
              <Input
                value={credentials.cpf}
                onChange={(e) =>
                  setCredentials({ ...credentials, cpf: e.target.value })
                }
                placeholder="CPF"
              />
            </Group>
            <Group>
              <Input
                value={credentials.whats}
                onChange={(e) =>
                  setCredentials({ ...credentials, whats: e.target.value })
                }
                placeholder="WhatsApp"
                type="phone"
              />
              <Input
                value={credentials.phone}
                onChange={(e) =>
                  setCredentials({ ...credentials, phone: e.target.value })
                }
                placeholder="Telefone"
                type="phone"
              />
            </Group>
            <Group>
              <Input
                type="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                placeholder="Senha"
              />
              <Input
                type="password"
                value={credentials.confirmPassword}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="Confirmar senha"
              />
            </Group>

            {loading ? (
              <Lottie options={defaultOptions} height={100} width={100} />
            ) : (
              <Button
                center
                style={{ width: "20vw", margin: "2em 0" }}
                text="Avançar"
                onClick={() => {
                  setLoading(true);
                  dispatch(requestContact({...credentials, ...form}));
                }}
                solicitation
              />
            )}
          </>
        )}
      </Form>
    </Container>
  );
};

export default Register;
