import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center"
  }
});

const GaleriaPage = ({ children }) => {
  const classes = useStyles();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Galeria Pagé</title>
      </Helmet>
      <div className={classes.container}>{children}</div>
    </HelmetProvider>
  );
};

export default GaleriaPage;
