import React from "react";
import { Provider } from "react-redux";
import { createUseStyles } from "react-jss";
import { px } from "../lib/units";
import AppDecorator from "../lib/components/app";
import Login from "./login";
import Header from "../lib/components/header";
import configStore from "./store/configStore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const store = configStore();
const GaleriaPageApp = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <AppDecorator>
          <Header />
          <div className={classes.content}>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </div>
        </AppDecorator>
      </Router>
    </Provider>
  );
};

const Home = () => <h1>Ok!</h1>;
const useStyles = createUseStyles({
  content: {
    marginTop: px(48)
  }
});

export default GaleriaPageApp;
