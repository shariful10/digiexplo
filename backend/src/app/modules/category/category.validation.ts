import { z } from "zod";

const CreateCategoryValidation = z.object({
  body: z.object({
    title: z.string(),
  }),
});

export const CategoryValidation = { CreateCategoryValidation };
