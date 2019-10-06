import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../units";
import colors from "../../../colors";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: px(40),
    maxWidth: px(360),
    width: "100%",

    color: colors.white,
    backgroundColor: colors.blue,
    borderRadius: px(100),
    border: "none",

    fontWeight: 500,
    fontSize: px(16),
    "&:hover": {
      backgroundColor: colors.hoverBlue
    },
    "&:focus": {
      outline: "0"
    },
    "&:active": {
      outline: "0"
    }
  }
});

const Button = ({ className, title, onClick }) => {
  const classes = useStyles();
  return (
    <button
      type="submit"
      onClick={onClick}
      className={classNames(classes.root)}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  className: ""
};

export default Button;
