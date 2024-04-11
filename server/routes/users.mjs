import express from 'express';
import dotenv from 'dotenv';

import userController from '../controller/usersController.mjs';
import { userValidationSchema } from '../validators/userValidator.mjs';
import { validationResult } from 'express-validator';

dotenv.config();

const router = express.Router();

router.post(
    '/register',
    userValidationSchema,
    (req, res, next) => {
      const errors = validationResult(req); 
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
    userController.createUser,
  );

  export default router;