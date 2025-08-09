import { z } from "zod";

export const UserSchema = z.object({
    favorites: z.array(z.string()),
    surname: z.string(),
    name: z.string(),
    email: z.string(),
})

export type User = z.infer<typeof UserSchema>