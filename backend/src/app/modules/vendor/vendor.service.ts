import { Types } from "mongoose";
import { IVendor } from "./vendor.interface";
import { VendorModel } from "./vendor.model";
import { handleDuplicateError } from "../../errors/handleDuplicateError";

const becomeVendor = async (
  userId: Types.ObjectId,
  payload: Omit<IVendor, "user" | "status">
) => {
  type TOptional = "status" | "products"
  const result = await new VendorModel<Omit<IVendor,TOptional>>({
    address: payload.address,
    companyName: payload.companyName,
    ownerName: payload.ownerName,
    user: userId,
    website: payload.website,
    verificationId: payload.verificationId,
  }).save()

  return result;
};


const getVendor = async( vendorId:string) => {
  const vendor = await VendorModel.findById(vendorId)
  return vendor
}


export const VendorServices = { becomeVendor ,getVendor};
