import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../../units";
import colors from "../../../colors";

const useStyles = createUseStyles({
  root: {
    fontSize: px(28),
    margin: 0,
    color: colors.black
  },
  form: {
    color: colors.red
  }
});

const Title = ({ form, className, styles, children }) => {
  const classes = useStyles();
  return (
    <h1
      styles={styles}
      className={classNames({
        [classes.root]: true,
        [classes.form]: form
      })}
    >
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  form: PropTypes.bool,
  className: PropTypes.string,
  styles: PropTypes.object
};

Title.defaultProps = {
  form: false,
  className: "",
  styles: undefined
};

export default Title;
