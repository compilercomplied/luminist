import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../../components/button";

export const PublicPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Button text="Login" onClick={loginWithRedirect} />
    </div>
  );
};
