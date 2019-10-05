import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../../../units";
import colors from "../../../../../colors/index";

const useStyles = createUseStyles({
  root: {
    color: colors.darkGray,
    fontSize: px(12)
  }
});

const Label = ({ children }) => {
  const classes = useStyles();
  return <span className={classNames(classes.root)}>{children}</span>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired
};

export default Label;
