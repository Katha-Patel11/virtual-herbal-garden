import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.MONGO_DB_URL;
    const connectionInstance = await mongoose.connect(
      `${url}/${process.env.DB_NAME}`
    );
    console.log(`Connected to MongoDB ${connectionInstance.connection.host}`);
  } catch (e) {
    console.error(`Error connecting to MongoDB: ${e.message}`);
    process.exit(1);
  }
};

export default connectDB;
