import mongoose from "mongoose";

if (!import.meta.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const MONGODB_URI = import.meta.env.MONGODB_URI;

const dbConnection = async (): Promise<void> => {
  await mongoose.connect(MONGODB_URI);
  console.log(`Connected to database: ${MONGODB_URI}`);
};

export { dbConnection };
