import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../units";
import colors from "../../../colors/";
import Title from "../../typography/title";
import Button from "../../inputs/button/";
import Link from "../../typography/link";
import TextField from "../../inputs/text/";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    maxWidth: px(440)
  },
  title: {
    color: colors.red
  },
  formTitle: {
    width: "100%",
    color: colors.red,
    borderBottom: `3px solid ${colors.red}`,
    paddingBottom: px(4),
    marginBottom: px(24)
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  fields: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  field: {
    display: "flex",
    width: "100%",
    marginBottom: px(16)
  },
  forgotPassword: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  button: {
    display: "flex",
    justifyContent: "center"
  },
  register: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: px(16)
  }
});

const noop = a => a;
const Login = ({ className }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root)}>
      <div className={classNames(classes.formTitle)}>
        <Title className={classNames(classes.title)}>Faça seu login</Title>
      </div>

      <div className={classNames(classes.form)}></div>
      <div className={classNames(classes.fields)}>
        <div className={classNames(classes.field)}>
          <TextField label="E-mail" value="" onChange={noop} />
        </div>
        <div className={classNames(classes.field)}>
          <TextField label="Sua senha aqui na pagé" value="" onChange={noop} />
        </div>

        <div className={classNames(classes.field, classes.forgotPassword)}>
          <Link to="#">Esqueci minha senha</Link>
        </div>

        <div className={classNames(classes.field, classes.button)}>
          <Button title="Continuar" />
        </div>
      </div>
      <div className={classNames(classes.register)}>
        <Link to="">Não tem cadastro? Cadastre-se</Link>
      </div>
    </div>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
