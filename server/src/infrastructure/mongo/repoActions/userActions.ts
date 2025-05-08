import { UserProps } from "../../../types";
import { UserModel } from "../../mongo/model/userModel";


// This file contains the actions for the User model
// These actions are used to interact with the User model in the database
// The actions are used to create, read, update, and delete users in the database
// The actions are used in the userService to perform the business logic
export const userActions = {
  createUser: async (user: UserProps): Promise<UserProps | null> => {
    const newUser = await UserModel.create(user);
    return newUser;

  },

  findAllUsers: async (): Promise<UserProps[]> => {
    return await UserModel.find({ isDeleted: false }).exec();
  },

  findUserByEmail: async (email: string): Promise<UserProps | null> => {
    return await UserModel.findOne({ email });
  },

  findUserById: async (id: string): Promise<UserProps | null> => {
    return await UserModel.findById(id);
  },

  updateUser: async (id: string, userData: Partial<UserProps>): Promise<UserProps | null> => {
    return await UserModel.findByIdAndUpdate(id, userData, { new: true });
  },

  deleteUser: async (id: string): Promise<UserProps | null> => {
    return await UserModel.findByIdAndDelete(id);
  },
}