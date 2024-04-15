import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import userModel from "../models/userModel.mjs";

dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const createJwtStrategy = async () => {
  const jwtStrategy = new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await userModel.getUserById(jwt_payload.id);
      console.log(jwt_payload);
      if (user) {
        return done(null, user);
      }

      return done(null, user);
    } catch (error) {
      return done(null, false);
    }
  });

  return jwtStrategy;
};

export default createJwtStrategy;