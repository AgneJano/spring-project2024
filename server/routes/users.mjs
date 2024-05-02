import express from "express";
import dotenv from "dotenv";
import userController from "../controller/usersController.mjs";
import passport from "../strategies/auth.mjs";
import { isUser } from "../middleware/roleCheck.mjs";
import jwt from "jsonwebtoken";
import { loginValidationSchema } from "../validators/userValidator.mjs";
import { validate } from "../middleware/schemaValidator.mjs";
import { userValidationSchema } from "../validators/userValidator.mjs";
import { validationResult } from "express-validator";
import logger from "../logger/logger.mjs";

dotenv.config();

const router = express.Router();

router.post(
  "/register",
  userValidationSchema,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userController.createUser
);

router.post('/login', validate(loginValidationSchema), passport.authenticate('local', {session: false}), isUser, (req, res, next) => {

  passport.authenticate('local', (error, user, info) => {
    if (error) {
      // Log authentication error
      logger.error('Error during authentication', { error: error });
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      // Log authentication failure
      logger.error('Authentication failed', { errorMessage: info.message });
      return res.status(401).json({ message: info.message });
    }
    // Generate JWT token
    const token = jwt.sign({ id: user.id, name: user.name, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Log successful login
    logger.info('User logged in', { userId: req.user.id, name: req.user.name, role: req.user.role});

    // Send token in response
    res.status(200).json({ message: 'Logged', token });
  })(req, res, next); // Invoke the authentication middleware
});

export default router;
