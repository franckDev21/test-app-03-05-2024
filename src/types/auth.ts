import { LoginSchema } from "@/validations/login";
import { RegisterSchema } from "@/validations/register";
import { z } from "zod";

export type Credential = z.infer<typeof LoginSchema>

export type CreateAccountForm = z.infer<typeof RegisterSchema>

export type SuccessLoginResponse = { 
  access_token: string
  token_type: string 
}

export type ErrorLoginResponse = {
  message: string
}

export type ResponseStatus = { success: boolean, message: string }
