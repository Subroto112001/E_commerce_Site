import React from "react";
import * as Yup from "yup";

let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<>]).{8,}$/;
  
export const loginschema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .matches(mailFormat, "Email is not valid"),
    password: Yup.string()
      .min(8, "password must be at least 8 characters")
      .max(14, "password length can not over 14 characters")
      .matches(passwordFormat, "Password must include at least 1 special character , 1 uppercase letter , 1 lowercase letter and 1 number")
      .required("Password is required")
  });



