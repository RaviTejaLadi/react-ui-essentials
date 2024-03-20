import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "react-ui-essentials/dist/index.css";
import { DarkModeProvider } from "react-ui-essentials";
import ErrorBoundary from "./Error/ErrorBoundary.jsx";

ReactDOM.render(
  <ErrorBoundary>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
