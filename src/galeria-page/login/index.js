import { connect } from "react-redux";
import formikEnhancer from "./formikEnhancer";
import { login as loginAction } from "./store/actions";
import LoginComponent from "./component";

const mapDispatchToProps = dispatch => ({
  login: loginAction(dispatch)
});

const mapStateToProps = state => ({
  errorMessage: state.login.errorMessage
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(formikEnhancer(LoginComponent));
