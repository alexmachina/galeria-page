import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../units";
import colors from "../../../colors";

const useStyles = createUseStyles({
  title: {
    fontSize: px(28),
    color: colors.black,
    margin: 0
  }
});

const Title = ({ className, children }) => {
  const classes = useStyles();
  return <h1 className={classNames(classes.title, className)}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Title.defaultProps = {
  className: ""
};

export default Title;
