import { Types } from "mongoose";
import { IVendor } from "./vendor.interface";
import { VendorModel } from "./vendor.model";
import { uploadFile } from "../uploadFile/awsUpload";
import { VENDOR_STATUS } from "./vendor.constant";
import { Express } from "express";

const becomeVendor = async (
  userId: Types.ObjectId,
  payload: Omit<IVendor, "user" | "status">,
  verificationImg: Express.Multer.File
) => {
  const vendorExist = await VendorModel.findOne({ user: userId });

  // if(vendorExist) {
  //   return {
  //     vendor_exist: true
  //   }
  // }
  if (vendorExist?.status === VENDOR_STATUS.PENDING) {
    return {
      vendor_pending: true,
    };
  }
  // type TOptional = "status" | "products"
  const uploadVerificationImg = await uploadFile(verificationImg, "vendor");
  const result = await new VendorModel({
    address: payload.address,
    companyName: payload.companyName,
    ownerName: payload.ownerName,
    user: userId,
    website: payload.website,
    verificationId: uploadVerificationImg.Location,
  }).save();

  return { create: result };
};

const getVendor = async (vendorId: string) => {
  const vendor = await VendorModel.findOne({ user: vendorId })
    .populate("products")
    .populate("soldProducts")
    .populate("user");
  return vendor;
};

export const VendorServices = { becomeVendor, getVendor };
