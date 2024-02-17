import { Types } from "mongoose";
import { IVendor } from "./vendor.interface";
import { VendorModel } from "./vendor.model";
import { uploadFile } from "../uploadFile/awsUpload";


const becomeVendor = async (
  userId: Types.ObjectId,
  payload: Omit<IVendor, "user" | "status">,
  verificationImg: Express.Multer.File
) => {
  // type TOptional = "status" | "products"
  const uploadVerificationImg = await uploadFile(verificationImg,'vendor')
  const result = await new VendorModel({
    address: payload.address,
    companyName: payload.companyName,
    ownerName: payload.ownerName,
    user: userId,
    website: payload.website,
    verificationId:  uploadVerificationImg.Location,
  }).save()

  return result;
};


const getVendor = async( vendorId:string) => {
  const vendor = await VendorModel.findById(vendorId).populate('products')
  return vendor
}


export const VendorServices = { becomeVendor ,getVendor};
