import * as yup from "yup";

const validation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is a required field."),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters.")
    .required("Password is a required field."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match.")
    .required("Password confirmation is a required field."),
});

export default validation;
