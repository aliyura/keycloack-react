import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://auth-server.decagonhq.dev",
  realm: "decagon",
  clientId: "repo"
});

export default keycloak;
