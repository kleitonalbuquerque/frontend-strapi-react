import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";
import Home from "./templates/App";

import styled, { css, ThemeProvider } from "styled-components";

const changeBackground = (theme, bg) => css`
  background: ${bg};
  color: #000;
`;

const Heading = styled.h1`
  color: #800080;
`;

export const Container = styled.div`
  /* background: #ff0000; */
  background: ${({ theme }) => theme.colors.mediumGray};

  ${({ theme, bg }) => css`
    color: ${theme.colors.white};
    ${changeBackground(theme, bg)}
  `}

  /* article.h1  */
  ${Heading} {
    color: #008000;
  }

  /* article.h1  */
  ${Heading}:hover {
    color: #a6ff00;
  }

  /* article:hover  */
  &:hover {
    background-color: #8a2be2;
  }

  /* article::after  */
  &::after {
    content: "-----";
  }
`;

export const Container2 = styled(Container).attrs({ as: "article" })`
  background: #800080;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Heading>Container 1</Heading>
      </Container>
      <Container2>
        <h1>Container 2</h1>
      </Container2>
      <Heading>Oi</Heading>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
