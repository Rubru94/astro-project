import mongoose from "mongoose";
import "dotenv/config";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const dbConnection = async (): Promise<void> => {
  await mongoose.connect(MONGODB_URI);
  console.log(`Connected to database: ${MONGODB_URI}`);
};

export { dbConnection };
