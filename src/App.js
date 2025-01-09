import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/home/sections/navbar";
import Footer from "./pages/home/sections/footer";
import { Provider } from "react-redux";
import store from "./redux";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/admin";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        {/* {!!state.length && <CsvDownload data={state} />} */}
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/login/" exact component={Login} />
        <Route path="/login/:code" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/invite/:invite" exact component={Home} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
