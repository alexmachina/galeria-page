import { withFormik } from "formik";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Por favor, coloque seu e-mail"),
  password: Yup.string().required("Por favor, coloque sua senha")
});

const mapPropsToValues = () => ({ username: "", password: "" });

const handleSubmit = (payload, formikBag) => {
  const {
    props: { login, history },
    setSubmitting
  } = formikBag;
  const { username, password } = payload;

  debugger;
  login({ username, password, history });

  setSubmitting(false);
};

const formikEnhancer = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "LoginForm"
});

export default formikEnhancer;
