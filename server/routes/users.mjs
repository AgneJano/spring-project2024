import express from 'express';
import dotenv from 'dotenv';

import userController from '../controller/usersController.mjs';

dotenv.config();

const router = express.Router();

router.post(
    '/register',
    //userValidationSchema,
    // (req, res, next) => {
    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    //   }
      // jeigu validacija praėjo, kviečiame kitą middleware
    //   next();
    // },
    userController.createUser,
  );

  export default router;