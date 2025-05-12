import mongoose from "mongoose";

export const ConnectToDatabase = async (uri: string) => {
  try {
    await mongoose.connect(uri)
    console.info("database connection established.....")
  } catch (error) {
    console.error("mongodb connection Error", error)
    process.exit(1)
  }
}