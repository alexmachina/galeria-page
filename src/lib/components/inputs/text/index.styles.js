import { createUseStyles } from "react-jss";
import { px } from "../../../units";
import colors from "../../../colors";

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
  inputContainer: {
    width: "100%"
  },
  input: {
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
  },
  errorInput: {
    border: `1px solid ${colors.red}`
  },
  errorMessage: {
    color: colors.red,
    fontWeight: 400,
    marginTop: px(8),
    fontSize: px(12)
  }
});

export default useStyles;
