import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { KeycloakProvider } from "@react-keycloak/web";

import keycloak from "./keycloak";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <KeycloakProvider
      keycloak={keycloak}
      initConfig={{
        flow: "hybrid"
      }}
    >
      <App />
    </KeycloakProvider>
  </React.StrictMode>,
  rootElement
);
