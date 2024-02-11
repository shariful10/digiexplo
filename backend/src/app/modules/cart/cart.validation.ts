import { z } from "zod";


// this time cartValidation is not required

export const CreateCartZodSchema = z.object({
  body: z.object({
    productId: z.string(),
  }),
});
export const CartValidation = {
  CreateCartZodSchema,
};
