import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { px } from "../../units";

import pngLogo from "./galeria_page_logo.jpg";

const useStyles = createUseStyles({
  logo: {
    maxWidth: px(160)
  }
});

const Logo = ({ className }) => {
  const classes = useStyles();
  return (
    <img
      alt="Logo Galeria Pagé"
      src={pngLogo}
      className={classNames(classes.logo, className)}
    />
  );
};

Logo.propTypes = {
  className: PropTypes.string
};

Logo.defaultProps = {
  className: ""
};

export default Logo;
