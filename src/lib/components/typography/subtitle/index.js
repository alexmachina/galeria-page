import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../units";
import colors from "../../../colors";

const useStyles = createUseStyles({
  root: {
    color: colors.darkGray,
    fontWeight: 400,
    fontSize: px(14)
  }
});

const Subtitle = ({ className, children }) => {
  const classes = useStyles();

  return (
    <span className={classNames(classes.root, className)}>{children}</span>
  );
};

Subtitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Subtitle.defaultProps = {
  className: ""
};

export default Subtitle;
