import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IProduct } from "../types";
import FormattedPrice from "../FormattedPrice";
import { formatDate } from "../Dashboard/Vendor/VendorProductCard";

const ProductInformation = ({ productInfo }: { productInfo: IProduct }) => {
  return (
    <div className="bg-secondary rounded-xl p-8 mb-8  ">
      <h4 className="uppercase font-semibold flex items-center justify-center gap-2 mb-6">
        <IoMdInformationCircleOutline /> Product information
      </h4>
      <div className="space-y-5 text-sm md:text-base sm:text-lg">
        <p className="grid grid-cols-3  ">
          <span>Price</span>:{" "}
          <div>
            <FormattedPrice amount={productInfo?.price} />
          </div>
        </p>
        <p className="grid grid-cols-3  ">
          <span>Released</span>:{" "}
          <span>{formatDate(productInfo?.createdAt)}</span>
        </p>
        <p className="grid grid-cols-3  ">
          <span>Last Updated</span>:{" "}
          <span>{formatDate(productInfo?.updatedAt)}</span>
        </p>
        {/* <p className="grid grid-cols-3  ">
          <span>File Included</span>: <span>JGP, PSD, PNG</span>
        </p>
        <p className="grid grid-cols-3  ">
          <span>Compatible With</span>:{" "}
          <span>Photoshop, Illustrator, Figma</span>
        </p> */}
      </div>
    </div>
  );
};

export default ProductInformation;
