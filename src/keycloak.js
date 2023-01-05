import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8081/",
  realm: "decagon",
  clientId: "repo"
});

export default keycloak;
