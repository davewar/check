import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email(),
  comment: z.string().min(5, "Please provide more information"),
  tel: z.string().min(5, "Telephone number not long enough"),
  token: z.string().optional(),
  // token: z.string(),
});
