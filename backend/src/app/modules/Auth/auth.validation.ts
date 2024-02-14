import { z } from "zod";

const LoginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "An Email is required" }),
    password: z.string({ required_error: "The password is required" }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: "The old password is required" }),
    newPassword: z.string({ required_error: "The New password is required" }),
  }),
});

export const AuthZodValidation = {
  LoginValidationSchema,
  changePasswordValidationSchema,
};
