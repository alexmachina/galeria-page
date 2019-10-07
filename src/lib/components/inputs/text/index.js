import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import useStyles from "./index.styles";
import Label from "../label";

const TextInput = ({
  label,
  value,
  onChange,
  handleBlur,
  password,
  error,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root)}>
      <div className={classNames(classes.label)}>
        <Label>{label}</Label>
      </div>
      <div className={classNames(classes.inputContainer)}>
        <input
          className={classNames(classes.input, { [classes.errorInput]: error })}
          type={password ? "password" : "text"}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          {...props}
        />
      </div>
      <div className={classNames(classes.errorMessage)}>{error}</div>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default TextInput;
