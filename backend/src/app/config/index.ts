import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_URL: process.env.DATABASE_URL,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_access_expires: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_expires: process.env.JWT_REFRESH_EXPIRES_IN,
  cookie_secret : process.env.COOKIE_SECRET,
  cookie_expire : process.env.COOKIE_EXPIER,
  stripe_secret_key : process.env.STRIPE_SECRET_KEY
};
