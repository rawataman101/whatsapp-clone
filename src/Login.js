import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { auth, provider } from "./firebase";
import { useDataLayerValue } from "./DataLayer";
import { actionTypes } from "./reducer";

function Login() {
  // google auth
  const [user, dispatch] = useDataLayerValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">Sign in to WhatsApp</div>
        <Button type="submit" onClick={signIn} variant="text">
          Sign in With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
