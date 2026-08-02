import { z } from "zod";

export const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Enter a valid phone number" })
    .max(25, { message: "Phone number must be under 25 characters" })
    .regex(/^[+()\-\s\d]+$/, { message: "Phone number can only contain digits and + ( ) -" }),
  occupation: z
    .string()
    .trim()
    .max(100, { message: "Occupation must be under 100 characters" })
    .optional()
    .or(z.literal("")),
  gender: z.enum(["male", "female"], { message: "Please select your gender" }),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
