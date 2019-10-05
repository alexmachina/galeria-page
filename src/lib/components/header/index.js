import React from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../units";
import colors from "../../colors";

import Logo from "../logo/";
import Title from "../typography/title/index";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    boxShadow: "0 3px 5px rgba(0,0,0,0.12)"
  },
  redBigBorder: {
    backgroundColor: colors.red,
    width: "100%",
    height: px(40)
  },
  brand: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    width: px(96)
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root)}>
      <div className={classNames(classes.redBigBorder)}></div>
      <div className={classNames(classes.brand)}>
        <Logo className={classNames(classes.logo)} />
        <Title>GaleriaPagé</Title>
      </div>
    </div>
  );
};

export default Header;
