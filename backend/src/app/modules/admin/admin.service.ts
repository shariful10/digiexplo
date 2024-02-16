import { PRODUCT_STATUS } from "../product/product.constant";
import { ProductModel } from "../product/product.model";
import { USER_ROLE } from "../user/user.constant";
import { User } from "../user/user.model";
import { VENDOR_STATUS } from "../vendor/vendor.constant";
import { VendorModel } from "../vendor/vendor.model";

const getPendingVendorRequest = async (page: number, limit: number) => {
  const skip = !page ? 0 : limit * page;
  const vendors = await VendorModel.find({ status: VENDOR_STATUS.PENDING })
    .populate("user")
    .skip(skip)
    .limit(limit);
  return vendors;
};

const acceptVendorRequest = async (vendorId: string) => {
  const accept = await VendorModel.findOneAndUpdate(
    { _id: vendorId },
    { status: VENDOR_STATUS.APPROVED }
  ).populate("user");
  const savedVendorId = accept?.id;
  const savedVendorUserId = accept?.user.id;
  const userUpdate = await User.findOneAndUpdate(
    { _id: savedVendorUserId },
    { vendor: savedVendorId, role: USER_ROLE.VENDOR }
  );

  return accept;
};

const updateVendorProfile = async (vendorId:string,body: {commissionPercentage: string}) => {
  const update = await VendorModel.findByIdAndUpdate(vendorId, {
    commissionPercentage: body.commissionPercentage
  })
  return update
}


// product related function

const getPendingProducts = async (page: number, limit: number) => {
  const skip = !page ? 0 : limit * page;
  const products = await ProductModel.find({ status: PRODUCT_STATUS.PENDING })
    .populate("vendor")
    .skip(skip)
    .limit(limit);
  return products;
};

const updateProductStatus = async (
  productId: string,
  productStatus: (typeof PRODUCT_STATUS)[keyof typeof PRODUCT_STATUS]
) => {
  // console.log(productId,productStatus)
  const updateProduct = await ProductModel.findByIdAndUpdate(productId, {
    status: productStatus,
  });
  if (updateProduct) {
    const vendorId = updateProduct?.vendor;
    await VendorModel.findByIdAndUpdate(vendorId, {
      products: [updateProduct.id],
    });
  }
  return updateProduct;
};

export const AdminServices = {
  getPendingVendorRequest,
  acceptVendorRequest,
updateVendorProfile,
  // product related function
  getPendingProducts,
  updateProductStatus,
};
