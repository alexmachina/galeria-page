import { withFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Por favor, coloque seu e-mail")
    .email("Por favor, coloque um e-mail valido"),
  password: Yup.string().required("Por favor, coloque sua senha")
});

const mapPropsToValues = () => ({ username: "", password: "" });

const handleSubmit = (payload, formikBag) => {
  const {
    props: { login },
    setSubmitting
  } = formikBag;
  const { username, password } = payload;

  login({ username, password });
  setSubmitting(false);
};

const formikEnhancer = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: "LoginForm"
});

export default formikEnhancer;
