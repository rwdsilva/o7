import React, { useEffect } from "react";
import { Container, Form, InfoUser, Group } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  requestAccessSuccess,
  requestLogoutUser,
  requestUser,
  requestCount,
} from "../../redux/user";
import Button from "../../components/button";
import { useHistory } from "react-router-dom";
import Title from "../../components/title";

const Dashboard = () => {
  const {
    user: { user, count },
  } = useSelector((value) => value);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const storage = localStorage.getItem("user");
    dispatch(requestAccessSuccess({ user: JSON.parse(storage) }));
    dispatch(requestUser(JSON.parse(storage)));
    dispatch(requestCount(JSON.parse(storage)));
  }, []);

  useEffect(() => {
    !user._id && history.push("/login");
  }, [user]);

  return (
    <Container>
      <Form>
        <Group style={{ borderBottom: "1px solid #ff9f1a" }}>
          <Title text="Resumo" secundary />
          <Button
            mobile
            text="Sair"
            solicitation
            style={{ width: "10em" }}
            onClick={() => {
              localStorage.setItem("user", null);
              localStorage.setItem("token", null);
              dispatch(requestLogoutUser());
            }}
          />
        </Group>
        <InfoUser>
          <Group>
            <h4>
              Nome: <span> {user.name} </span>
            </h4>
            <h4>
              CPF: <span> {user.cpf} </span>
            </h4>
          </Group>
          <Group>
            <h4>
              WhatsApp: <span> {user.whats} </span>
            </h4>
            <h4>
              E-mail: <span> {user.email} </span>
            </h4>
          </Group>

          <Group>
            <h4>
              Cadastro com seu convite: <span> {count} </span>
            </h4>
            <h4>
              Bonificação atual: <span> R$ {count * 5},00 </span>
            </h4>
          </Group>
          <Group>
            {!!user.cpf && (
              <h4>
                Link de convite:
                <a
                  target="_blank"
                  href={
                    "http://easyemprestimos.com/invite/" +
                    `${user.name.slice(0, 3)}${user.cpf.slice(
                      0,
                      3
                    )}`.toLocaleUpperCase()
                  }
                >
                  <span className="small">
                    easyemprestimos.com/invite/
                    {`${user.name.slice(0, 3)}${user.cpf.slice(
                      0,
                      3
                    )}`.toLocaleUpperCase()}
                  </span>
                </a>
              </h4>
            )}
            <h4>
              Valor total a receber: <span> R$ {800 + count * 5},00 </span>
            </h4>
          </Group>
        </InfoUser>
      </Form>
    </Container>
  );
};

export default Dashboard;
