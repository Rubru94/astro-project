import mongoose from "mongoose";

const MONGO_DB_URI = "mongodb://localhost:27017/";

const dbConnection = async (): Promise<void> => {
  await mongoose.connect(MONGO_DB_URI);
  console.log(`mongoose connected to ${MONGO_DB_URI}`);
};

export { dbConnection };
