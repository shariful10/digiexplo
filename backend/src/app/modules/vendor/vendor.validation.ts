import { z } from "zod";

const BecomeVendorZodValidation = z.object({
  body: z.object({
    companyName: z.string().optional(),
    ownerName: z.string(),
    website: z.string().optional(),
    verificationId: z.string(),
    address: z.string(),
  }),
});

export const VendorValidation = {
  BecomeVendorZodValidation,
};
