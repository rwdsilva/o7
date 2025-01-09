import React from "react";
import { StyledButton, Container } from "./styled";

const Button = ({ text, center, ...rest }) => (
  <Container center={center}>
    <StyledButton {...rest}>{text}</StyledButton>
  </Container>
);

export default Button;
