import React from "react";
import classNames from "classnames";

import useStyles from "../index.styles";
import Title from "../../../lib/components/typography/title";
import Button from "../../../lib/components/inputs/button";
import Link from "../../../lib/components/typography/link";
import TextField from "../../../lib/components/inputs/text";

const Login = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  errorMessage
}) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <div className={classNames(classes.formTitle)}>
        <Title className={classNames(classes.title)} form>
          Faça seu login
        </Title>
      </div>
      <div className={classNames(classes.form)}></div>
      <div className={classNames(classes.fields)}>
        <div className={classNames(classes.field)}>
          <TextField
            id="username"
            name="username"
            label="E-mail"
            value={values.username}
            error={touched.username && errors.username}
            onChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className={classNames(classes.field)}>
          <TextField
            id="password"
            name="password"
            password
            label="Sua senha aqui na pagé"
            value={values.password}
            onChange={handleChange}
            error={touched.password && errors.password}
            handleBlur={handleBlur}
          />
        </div>
        <div className={classNames(classes.field, classes.forgotPassword)}>
          <Link to="#">Esqueci minha senha</Link>
        </div>
        <div className={classNames(classes.field, classes.button)}>
          <Button title="Continuar" />
        </div>
        <div className={classNames(classes.errorMessage)}>{errorMessage}</div>
      </div>
      <div className={classes.register}>
        <Link to="">Não tem cadastro? Cadastre-se</Link>
      </div>
    </form>
  );
};

export default Login;
