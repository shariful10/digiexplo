import { USER_ROLE } from "../user/user.constant"
import { User } from "../user/user.model"
import { VENDOR_STATUS } from "../vendor/vendor.constant"
import { VendorModel } from "../vendor/vendor.model"


const getPendingVendorRequest = async (page:number,limit:number) => {
    const skip = !page ? 0 : limit * page
    const vendors = await VendorModel.find({status:VENDOR_STATUS.PENDING}).populate('user').skip(skip).limit(limit)
   return vendors
}

const acceptVendorRequest = async (vendorId:string) => {
    const accept = await VendorModel.findOneAndUpdate({_id:vendorId},{status:VENDOR_STATUS.APPROVED}).populate('user')
    const savedVendorId = accept?.id
    const savedVendorUserId = accept?.user.id
    const userUpdate = await User.findOneAndUpdate({_id:savedVendorUserId}, { vendor: savedVendorId, role: USER_ROLE.VENDOR})
    
    return accept
}


export const AdminServices = {
    getPendingVendorRequest,
    acceptVendorRequest
}