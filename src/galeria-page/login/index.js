import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
import useStyles from "./index.styles";
import Title from "../../lib/components/typography/title";
import Button from "../../lib/components/inputs/button";
import Link from "../../lib/components/typography/link";
import TextField from "../../lib/components/inputs/text";
import { login as loginAction } from "./store/actions";

const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.formTitle}>
        <Title className={classNames(classes.title)} form>
          Faça seu login
        </Title>
      </div>

      <div className={classes.form}></div>
      <div className={classes.fields}>
        <div className={classes.field}>
          <TextField label="E-mail" value={username} onChange={setUsername} />
        </div>
        <div className={classes.field}>
          <TextField
            password
            label="Sua senha aqui na pagé"
            value={password}
            onChange={setPassword}
          />
        </div>

        <div className={classNames(classes.field, classes.forgotPassword)}>
          <Link to="#">Esqueci minha senha</Link>
        </div>

        <div className={classNames(classes.field, classes.button)}>
          <Button onClick={login} title="Continuar" />
        </div>
      </div>
      <div className={classes.register}>
        <Link to="">Não tem cadastro? Cadastre-se</Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  login: loginAction(dispatch)
});

const mapStateToProps = state => ({
  errorMessage: state.login.errorMessage,
  authToken: state.login.authToken
});

Login.propTypes = {};

Login.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
