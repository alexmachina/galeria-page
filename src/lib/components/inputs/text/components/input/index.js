import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../../../units";
import colors from "../../../../../colors/index";

const useStyles = createUseStyles({
  root: {
    color: colors.darkGray,
    fontSize: px(12),
    width: "100%",
    height: px(40),
    "&:focus": {
      outline: "none"
    },
    borderRadius: px(12),
    border: `1px solid ${colors.green}`,
    padding: px(4)
  },
  valid: {
    borderRadius: px(4),
    border: "1px solid #1bae1b"
  }
});

const Input = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <input
      className={classNames(classes.root)}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
