import React, { Component } from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Content } from "react-mdl";
import Wrapper from "./components/styled/Wrapper";
import Router from "./components/router";
import logo from "./assets/images/hvw-logo.png";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Layout fixedDrawer>
          <Drawer style={{ paddingTop: "50px", backgroundColor: "#efefef" }} title="">
            <img
              src={logo}
              width="200"
              height="175"
              alt="logo"
              style={{ margin: "0 auto" }}
            />
            <Navigation>
              
              <Link to="/about">ABOUT ME / RESUME</Link>
              <Link to="/portfolio">PORTFOLIO</Link>
              <Link to="/contact" id="hello">
                CONTACT ME
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <Router />
          </Content>
        </Layout>
      </Wrapper>
    );
  }
}

export default App;
