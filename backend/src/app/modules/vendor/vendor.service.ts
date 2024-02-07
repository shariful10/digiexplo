import { Types } from "mongoose";
import { IVendor } from "./vendor.interface";
import { VendorModel } from "./vendor.model";
import { handleDuplicateError } from "../../errors/handleDuplicateError";

const becomeVendor = async (
  userId: Types.ObjectId,
  payload: Omit<IVendor, "user" | "status">
) => {
  const result = await new VendorModel<Omit<IVendor, "status">>({
    address: payload.address,
    companyName: payload.companyName,
    ownerName: payload.ownerName,
    user: userId,
    website: payload.website,
    verificationId: payload.verificationId,
  }).save()

  return result;
};

export const VendorServices = { becomeVendor };
