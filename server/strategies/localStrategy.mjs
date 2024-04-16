import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import userModel from "../models/userModel.mjs";

const localStrategy = new LocalStrategy(
  {
    usernameField: "login", 
    passwordField: "password",
  },
  async (login, password, done) => {
    
    try {
      const user = await userModel.login({ email:login }); 

      if (!user) {
        // If user is not found
        return done(null, false, { message: "User not found" });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return done(null, false, { message: "Invalid credentials." });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

export default localStrategy;
