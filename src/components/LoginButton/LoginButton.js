import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./LoginButton.module.css"

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className={style.loginButton+" mx-5"} onClick={() => loginWithRedirect()}>Accedi</button>;
};

export default LoginButton;