import * as Yup from "yup";

let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<>]).{8,}$/;

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(mailFormat, "Email is not valid"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(14, "Password length cannot exceed 14 characters")
    .matches(
      passwordFormat,
      "Password must include at least 1 special character, 1 uppercase letter, 1 lowercase letter and 1 number",
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});
