import React from "react";
import { StyledSubTitle } from "./styled";

const SubTitle = ({ text, ...rest }) => (
  <StyledSubTitle {...rest}>{text}</StyledSubTitle>
);

export default SubTitle;
