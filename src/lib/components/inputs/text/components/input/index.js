import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../../../units";
import colors from "../../../../../colors/index";

const useStyles = createUseStyles({
  root: {
    color: colors.black,
    fontSize: px(14),
    width: "100%",
    height: px(40),
    "&:focus": {
      outline: "none"
    },
    borderRadius: px(12),
    border: `1px solid ${colors.green}`,
    paddingLeft: px(8)
  },
  valid: {
    borderRadius: px(4),
    border: "1px solid #1bae1b"
  }
});

const Input = ({ value, onChange, password }) => {
  const classes = useStyles();
  const type = password ? "password" : "text";
  return (
    <input
      className={classNames(classes.root)}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  password: PropTypes.bool
};

Input.defaultProps = {
  password: false
};

export default Input;
