  
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


// function LoginButton () {
//   const { loginWithRedirect, isAuthenticated, } = useAuth0();

//   return !isAuthenticated && ( <button onClick={loginWithRedirect}>Log In</button>);
// };
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // TODO: add a conditional rendering statement to hide / not render this button when the user  is Authenticated
  return !isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;