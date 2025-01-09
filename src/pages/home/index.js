import React, { useState, useEffect } from "react";
import Navbar from "./sections/navbar";
import Header from "./sections/header";
import Advantage from "./sections/advantage";
import About from "./sections/about";
import { Element } from "react-scroll";

const Home = ({ match }) => {
  useEffect(() => {
    !!match.params.invite &&
      localStorage.setItem("invite", match.params.invite);
  }, []);
  return (
    <div>
      <Element name="Início">
        <Header />
      </Element>
      <Element name="Vantagens">
        <Advantage />
      </Element>
      <Element name="Quem somos">
        <About />
      </Element>
    </div>
  );
};

export default Home;
