import * as yup from 'yup';
export const LoginSchema = yup.object().shape({
  Email: yup
    .string()
    .required("*Email is required field, please enter email address")
    .email("*Invalid Email format, please enter a valid email address"),
  Password: yup
    .string()
    .required("*Password is required field, please enter password")
    .min(6, "*Password at least 6 characters in length!"),
});

export const RegisterSchema = yup.object().shape({
  Username: yup
    .string()
    .required("*Username is required field, please enter your name")
    .max(20, "*Username should be 5-20 characters in length!")
    .min(5, "*Username should be 5-20 characters in length!"),
  ImgUrl: yup
    .string(),
  Email: yup
    .string()
    .required("*Email is required field, please enter email address")
    .email("*Invalid Email format, please enter a valid email address"),
  Password: yup
    .string()
    .required("*Password is required field, please enter password")
    .min(6, "*Password at least 6 characters in length!"),
})