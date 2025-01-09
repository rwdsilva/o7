import React from "react";
import { StyledDescription } from "./styled";

const Description = ({ text, ...rest }) => (
  <StyledDescription {...rest}>{text}</StyledDescription>
);

export default Description;
