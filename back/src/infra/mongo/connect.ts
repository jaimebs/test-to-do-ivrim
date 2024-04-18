import mongoose from "mongoose";

export const connectMongoDb = async (url: string) => {
  await mongoose.connect(url);
};
