import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).max(50),
  password: z.string().min(8, {message: 'Password must be at least 8 characters'}),
  firstname: z.string({ required_error: "Firstname is required" }).min(3,{ message: "The firstname must be at least 3 characters long." }).max(50),
  lastname: z.string({ required_error: "Lastname is required" }).min(3,{ message: "The lastname must be at least 3 characters long." }).max(50),
  // skils: z.string({ required_error: "Skils is required" }).min(1,{ message: "The skils must be at least 3 characters long." }).max(50),
  phone_number: z.string({ required_error: "Phone number is required" }).min(5).max(50),
  confirm_password: z.string().min(8, {message: 'Password must be at least 8 characters'})
}).refine((data) => data.password === data.confirm_password, {
  path: ['confirm_password'],
  message: 'Passwords does not match'
})
