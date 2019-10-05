import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../units";
import colors from "../../../colors";

const useStyles = createUseStyles({
  link: {
    color: colors.gray,
    textDecoration: "underscore",
    fontWeight: 400,
    fontSize: px(14)
  }
});

const Link = ({ className, children, to }) => {
  const classes = useStyles();

  return (
    <a className={classNames(classes.link, className)} href={to}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Link.defaultProps = {
  className: ""
};

export default Link;
