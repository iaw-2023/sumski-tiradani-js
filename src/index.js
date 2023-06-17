import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_LOGIN_URL;
const clientId = process.env.REACT_APP_LOGIN_KEY;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <BrowserRouter>
        <div className="h-screen">
          <App />
        </div>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
