
import { Types } from "mongoose"
export interface IProduct {
    productName: string,
    description: string,
    vendorCountryLocation: string,
    category: string,
    price: number,
    thumbnail: string
    vendor: Types.ObjectId,
    file : string,
    tags : string[],

    // for seo
    slug? : string,
    "meta-tigle"?: string,
}