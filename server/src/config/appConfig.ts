import { GetEnv } from "../utils/shared/GetEnv"
import dotenv from "dotenv"
dotenv.config()


const AppConfig = ({
  PORT: GetEnv("PORT", "3000"),
  MONGO_STRING: GetEnv("MONGO_STRING")
})



export const config = AppConfig


