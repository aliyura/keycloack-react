import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import "./styles.css";

export default function App() {
  const [keycloak, initialized] = useKeycloak();
  console.log(keycloak, keycloak.token, initialized);
  return (
    <div className="App">
      {
        initialized &&  keycloak.authenticated ?
          <div>
            <h1>Welcome to Decagon</h1>
            <p>The decagon authentication server provided  an access grant with below token</p>
            <p>Access grant: {keycloak.token}</p>
          </div>
          : <div>
            <h1>Login to Decagon</h1>
            <p>Use decagon authentication server to login</p>
          </div>}
      <hr />
      <div>{`User is ${!initialized || !keycloak.authenticated ? "NOT " : ""
        } Authenticated`}</div>

      {!keycloak.authenticated ? (
        <button
          type="button"
          onClick={() =>
            keycloak.login({
              redirectUri: "http://localhost:3000"
            })
          }
        >
          Login
        </button>
      ) : (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}
    </div>
  );
}
