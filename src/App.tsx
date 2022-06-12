import React from "react";
import "./App.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppRouter } from "./routing/app-router";
import { OAuthOptions } from "./app/configuration";

function App() {
  return (
    <Auth0Provider
      domain={OAuthOptions.domain}
      clientId={OAuthOptions.appID}
      redirectUri={window.location.origin}
      audience={OAuthOptions.audience}
      scope={OAuthOptions.scope}
    >
      <AppRouter />
    </Auth0Provider>
  );
}

export default App;
