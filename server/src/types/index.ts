export type UserProps = {
  fullname: string,
  email: string,
  password: string,
  role: string,
  createdAt: Date,
  updatedAt: Date,
  isDeleted: boolean,
  deletedAt: Date | null,
  lastLogin: Date | null,
  phoneNumber: string | null,
}