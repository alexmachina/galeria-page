import React from "react";
import Helmet from "react-helmet";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "*": {
      outline: "none",
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
      fontWeight: 400,
      boxSizing: "border-box"
    }
  }
});

const GaleriaPage = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Helmet>
        <title>Hello Page</title>
      </Helmet>
      {children}
    </div>
  );
};

export default GaleriaPage;
