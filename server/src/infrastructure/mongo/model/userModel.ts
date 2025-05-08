import mongoose from "mongoose";
import { UserProps } from "../../../types";



// Define the schema for the User model
// The schema defines the structure of the documents in the collection
const userSchema = new mongoose.Schema<UserProps>({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date, default: null },
  lastLogin: { type: Date, default: null },
  phoneNumber: { type: String, default: null },
})


export const UserModel = mongoose.model<UserProps>("User", userSchema);