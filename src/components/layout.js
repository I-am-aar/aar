/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import Styled, { createGlobalStyle } from 'styled-components';
import "@fontsource/oswald/600.css";
import "@fontsource/roboto";

import Header from "./header";
import Footer from "./footer";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    position: relative;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-family: 'Oswald', sans-serif;
    color: #000;
  }

  p, button {
    font-family: 'Roboto', sans-serif;
    color: #000;
    font-size: 18px;
  }

  a {
    font-family: 'Roboto', sans-serif;
    color: #000;
    font-size: 18px;

    &:hover {
      color: #CCC;
    }
  }
`;

const Main = Styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* background: linear-gradient(225deg, #414345 0%, #232526 100%); */
  background: linear-gradient(225deg, #FFFFFF 0%, #ECE9E6 100%);
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      <Header />
      <div>{children}</div>
      <Footer />
    </Main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
