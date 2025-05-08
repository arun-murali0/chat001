import { GetEnv } from "../utils/shared/getEnv"

const appConfig = () => ({
  APP_ORIGIN: GetEnv("APP_ORIGIN", "localhost"),
  PORT: GetEnv("PORT", "3000"),
  BASE_PATH: GetEnv("BASE_PATH", "/api/v1"),
  MONGO_STRING: GetEnv("MONGO_STRING"),
  jwt: {
    SECRET: GetEnv("JWT_SECRET"),
    EXPIRY_IN: GetEnv("JWT_EXPIRES_IN", "15m"),
    REFRESH_TOKEN: GetEnv("JWT_REFRESH_SECRET"),
    REFRESH_EXPIRY_IN: GetEnv("JWT_REFRESH_EXPIRES_IN", "30d")
  }
})

export const config = appConfig()