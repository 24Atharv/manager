import { email, z } from 'zod'
export const userSchema = {
    name: z.string().min(8).max(16),
    email: z.string()
    .min(1, {message: "Need to be filled"})
    .email({message: "Not valid email"}),
    password: z.string()
    .min(8, {message: "Password musrt be at least 8 characters"})
    .max(16, {message: "Not more than 16 characters"})
}




