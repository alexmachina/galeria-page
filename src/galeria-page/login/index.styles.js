import { createUseStyles } from "react-jss";
import { px } from "../../lib/units";
import colors from "../../lib/colors";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    maxWidth: px(440)
  },
  title: {
    color: colors.red
  },
  formTitle: {
    width: "100%",
    color: colors.red,
    borderBottom: `3px solid ${colors.red}`,
    paddingBottom: px(4),
    marginBottom: px(24)
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  fields: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  field: {
    display: "flex",
    width: "100%",
    marginBottom: px(16)
  },
  forgotPassword: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  button: {
    display: "flex",
    justifyContent: "center"
  },
  register: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: px(16)
  }
});

export default useStyles;
