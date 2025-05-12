export const GetEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key];
  if (value === undefined) {
    if (value !== undefined) {
      return defaultValue
    }
    throw new Error(`The value ${key} is needed`)
  }
  return value
}