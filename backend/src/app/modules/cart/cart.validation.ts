import { z } from "zod";

export const CreateCartZodSchema = z.object({
  body: z.object({
    productId: z.string(),
    quantity: z.number(),
  }),
});
export const CartValidation = {
  CreateCartZodSchema,
};
