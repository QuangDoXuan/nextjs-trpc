import { z } from "zod";

export const registerUserValidatorSchema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(100),
})

export const userLoginValidatorSchema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(100),
})
