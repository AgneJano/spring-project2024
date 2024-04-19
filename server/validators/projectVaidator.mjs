import { checkSchema, param } from 'express-validator';


export const projectValidationSchema = checkSchema({
    name: {
      isLength: {
        options: { min: 6, max: 32 },
        errorMessage: 'Name must be between 6 and 32 characters',
      },
      notEmpty: {
        errorMessage: 'Name cannot be empty',
      },
      isString: {
        errorMessage: 'Name must be a string',
      },
    },
    description: {
      isLength: {
        options: { min: 10, max: 255 },
        errorMessage: 'Description must be between 10 and 255 characters',
      },
      notEmpty: {
        errorMessage: 'Description cannot be empty',
      },
      isString: {
        errorMessage: 'Description must be a string',
      },
    },
    status: {
      isLength: {
        options: { min: 4, max: 20 },
        errorMessage: 'Status must be between 4 and 20 characters',
      },
      notEmpty: {
        errorMessage: 'Status cannot be empty',
      },
      isString: {
        errorMessage: 'Status must be a string',
      },
    },
  });