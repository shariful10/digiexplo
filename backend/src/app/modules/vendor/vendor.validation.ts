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

const UpdateVendorProfile = z.object({
  body: z.object({
    wallet: z.number().optional(),
    commissionPercentage : z.number().optional()
  })
})

export const VendorValidation = {
  BecomeVendorZodValidation,
  UpdateVendorProfile
};
