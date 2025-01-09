import React from "react";
import { StyledTitle } from "./styled";

const Title = ({ text, ...rest }) => (
  <StyledTitle {...rest}>{text}</StyledTitle>
);

export default Title;
