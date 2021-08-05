import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

export default {
  JWT_ACCESS_KEY: process.env.JWT_ACCESS_KEY ?? "",
};
