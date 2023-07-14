import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Erro connecting to database: ", error);
  }
};
