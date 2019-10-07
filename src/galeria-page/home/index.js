import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { verifyAuth } from "./api";

const Home = ({ authToken }) => {
  const history = useHistory();

  useEffect(() => {
    const verify = async () => {
      const { status } = await verifyAuth();
      console.log("Status", status);
      if (!status) {
        history.push("/");
      }
    };

    verify();
  }, [history]);

  if (!authToken && !localStorage.getItem("authToken")) {
    return <Redirect to={{ pathname: "/" }} />;
  }
  return <h1>Ok!</h1>;
};

const mapStateToProps = state => ({
  authToken: state.login.authToken
});

export default connect(mapStateToProps)(Home);
