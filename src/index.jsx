import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

const theme = createTheme();
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);
