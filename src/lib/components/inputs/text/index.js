import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../units";
import colors from "../../../colors";

import Label from "./components/label";
import Input from "./components/input";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap"
  },
  label: {
    width: "100%",
    marginBottom: px(4)
  },
  input: {
    width: "100%"
  }
});

const TextInput = ({ label, value, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root)}>
      <div className={classNames(classes.label)}>
        <Label>{label}</Label>
      </div>
      <div className={classNames(classes.input)}>
        <Input value={value} onChange={onChange} />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInput;
