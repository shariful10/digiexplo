import { IVendor } from "./vendor.interface";
import { VendorModel } from "./vendor.model";

const becomeVendor = async (userId: string, payload: IVendor) => {
  const result = await VendorModel.create(payload);

  return result;
};

export const VendorServices = { becomeVendor };
