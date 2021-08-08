import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const Domain = process.env.REACT_APP_DOMAIN;
const clintID = process.env.REACT_APP_CLINT_ID; 

ReactDOM.render(
  <Auth0Provider
    domain={Domain}
    clientId={clintID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
