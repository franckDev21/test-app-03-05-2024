import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).max(50),
  password: z.string({ required_error: "Password is required" })
    .min(8,{ message: "The password must be at least 8 characters long." }).max(50)
})
