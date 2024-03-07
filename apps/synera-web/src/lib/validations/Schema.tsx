import { z } from "zod"

export const ContactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Write a larger name" })
    .max(20, { message: "Write a smaller name" }),
  email: z.string().email(),
  phone: z.string().refine((value) => value.length === 10, {
    message: "Phone number must be 10 digits",
  }),
  message: z
    .string()
    .min(0, { message: "Complete the field" })
    .max(200, { message: "Write a smaller message" }),
})
