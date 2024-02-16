import { z } from "zod";

const createProductSchema = z.object({
  body: z.object({
    productName: z
      .string()
      .min(5, { message: "productName must be more than 2 characters" }),
    description: z
      .string()
      .min(50, { message: "description must be more than 50 chrectars" }),
    vendorCountryLocation: z.string(),
    category: z.string(),
    price: z.string(),
    // thumbnail: z.string(),
    // file: z.string(),
    // tags: z.array(z.string()).max(5,{message:'tag cannot be more than 5'}),
    tags: z.string(),
    slug: z.string().optional()
  }),
});

export const ProductValidation = {
    createProductSchema
}
