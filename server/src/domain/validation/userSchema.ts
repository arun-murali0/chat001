import { z } from 'zod';

// This schema is used to validate user data
// It defines the structure and constraints for user properties
// The schema is used in the UserModel to ensure that the data being saved to the database is valid
export const userSchema = z.object({
  fullname: z.string().min(1, { message: "minimum 3 character" }).max(50),
  email: z.string().email({ message: "Invalid email address" }).min(5).max(100),
  password: z.string().min(8).max(100),
  role: z.enum(["admin", "user"]).default("user"),
  isDeleted: z.boolean().default(false),
  deletedAt: z.date().nullable().default(null),
  lastLogin: z.date().nullable().default(null),
  phoneNumber: z.string().nullable().default(null),
  createdAt: z.date(),
  updatedAt: z.date(),
});
