import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "react-ui-essentials/dist/index.css";
import { DarkModeProvider, SeoProvider } from "react-ui-essentials";
import ErrorBoundary from "./Error/ErrorBoundary.jsx";

ReactDOM.render(
  <ErrorBoundary>
    <SeoProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </SeoProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
