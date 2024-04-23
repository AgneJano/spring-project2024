import { checkSchema } from "express-validator";

export const projectValidationSchema = checkSchema({
  name: {
    isLength: {
      options: { min: 3, max: 50 },
      errorMessage: "Name must be between 3 and 50 characters",
    },
    notEmpty: {
      errorMessage: "Name cannot be empty",
    },
    isString: {
      errorMessage: "Name must be a string",
    },
  },
  description: {
    isLength: {
      options: { min: 3, max: 10000 },
      errorMessage: "Description must be between 3 and 10000 characters",
    },
    notEmpty: {
      errorMessage: "Description cannot be empty",
    },
    isString: {
      errorMessage: "Description must be a string",
    },
  },
});
