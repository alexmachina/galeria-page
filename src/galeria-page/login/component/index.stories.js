import React from "react";
import Login from ".";
import formikEnhancer from "../formikEnhancer";
export default {
  component: Login,
  title: "Forms|Login"
};

const LoginForm = formikEnhancer(Login);
export const Default = () => <LoginForm login={a => a} />;
