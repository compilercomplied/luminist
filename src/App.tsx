import React from "react";
import "./App.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppRouter } from "./routing/app-router";

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_OAUTH_DOMAIN ?? ""}
      clientId={process.env.REACT_APP_OAUTH_APP_ID ?? ""}
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_OAUTH_AUDIENCE ?? ""}
      scope={process.env.REACT_APP_OAUTH_SCOPE ?? ""}
    >
      <AppRouter />
    </Auth0Provider>
  );
}

export default App;
