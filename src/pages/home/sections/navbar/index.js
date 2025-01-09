import React from "react";
import { Container, Option, BoxImage, BoxMenu } from "./styled";
import Button from "../../../../components/button";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const history = useHistory();
  const options = ["Início", "Vantagens", "Quem somos"];
  const location = useLocation();
  return location.pathname === "/dashboard" ? null : (
    <Container>
      <BoxImage onClick={() => history.push("/")}>
        <img src={require("../../../../static/logo.svg")} />
      </BoxImage>
      {window.screen.width > 768 && (
        <>
          <div>
            {options.map((i) => (
              <Link
                key={i}
                activeClass="active"
                to={i}
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Option onClick={() => history.push("/")}>{i}</Option>
              </Link>
            ))}
          </div>
          <Link
            activeClass="active"
            to="Início"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Button text="Solicitar Empréstimo" solicitation />
          </Link>
        </>
      )}
      {window.screen.width < 768 && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link
            activeClass="active"
            to="Início"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Button text="Solicitar" solicitation mobile />
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
