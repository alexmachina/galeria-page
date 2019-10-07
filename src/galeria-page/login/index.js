import { connect } from "react-redux";
import { loginStartAction } from "./store/actionCreators";
import formikEnhancer from "./formikEnhancer";
import LoginComponent from "./component";
import { withRouter } from "react-router-dom";
const mapStateToProps = state => ({
  errorMessage: state.login.errorMessage
});

const mapDispatchToProps = dispatch => ({
  login: userPayload => dispatch(loginStartAction(userPayload))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(formikEnhancer(LoginComponent))
);
