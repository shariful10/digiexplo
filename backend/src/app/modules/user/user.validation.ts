import { z } from "zod";

const createUserNameZodSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name should be more than 2 characters" }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(2, { message: "Last name should be more than 2 characters" }),
});

const CreateUserZodSchema = z.object({
  body: z.object({
    name: createUserNameZodSchema,
    username: z.string(),
    email: z.string(),
    password: z
      .string({
        invalid_type_error: "Password must be a valid string",
      })
      .max(30, { message: "Password cannot be more than 30 characters" }),
    phone: z.string(),
    profileImg: z.string().optional(),
    verificationID: z.string().optional(),
    role: z.enum(["Admin", "Vendor", "User"]).optional(),
    status: z.enum(["Active", "Pending"]).optional(),
    isDeleted: z.boolean().optional().default(false),
  }),
});

export const UserValidation = {
  CreateUserZodSchema,
};
