import { checkSchema, validationResult } from "express-validator";

export const loginValidationSchema = [
  checkSchema({
    login: {
      notEmpty: {
        errorMessage: "email cannot be empty",
      },
      custom: {
        options: (value, { req }) => {
          // Check if the value is an email
          if (!value.includes("@")) {
            throw new Error("Login must be a valid email");
          }
          return true; // Return true if validation passes
        },
      },
    },
    password: {
      notEmpty: {
        errorMessage: "Password cannot be empty",
      },
    },
  }),
];


