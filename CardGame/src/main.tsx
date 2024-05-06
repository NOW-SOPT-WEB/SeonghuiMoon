import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/style/index.css";
import GlobalStyles from "@/style/globalStyles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);