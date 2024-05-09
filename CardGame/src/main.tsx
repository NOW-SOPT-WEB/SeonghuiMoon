import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/style/index.css";
import GlobalStyles from "@/style/globalStyles.tsx";
import { ThemeProvider } from "styled-components";
import theme from "@/style/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
