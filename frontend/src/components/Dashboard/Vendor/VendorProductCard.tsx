import { IProduct } from "@/components/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiEye } from "react-icons/pi";

const VendorProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="box-shadow p-8 rounded-lg border border-shadowBorder hover:shadow-lg hover:-translate-y-0.5 duration-500">
      <div className="flex justify-between ">
        <Image
          src={product?.thumbnail}
          alt="Vendor Profile Pic"
          width={50}
          height={50}
          className="rounded max-w-[50px] min-h-[50px] max-h-[50px] bg-cover bg-center"
        />
        <div>
          <p
            className={`${
              product?.status === "Approved"
                ? "bg-green-200 text-green-600"
                : product?.status === "Pending"
                ? "bg-amber-300 text-amber-700"
                : "bg-red-400 text-white"
            } py-1.5 px-3 rounded-md text-xs`}
          >
            {product?.status}
          </p>
        </div>
      </div>
      {/* Product details */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-neutral-600">
          {product?.productName.slice(0, 30)}
        </h4>
        <p className=" font-medium text-sm">{product?.category}</p>
      </div>
      <div className="my-4 flex items-center gap-5">
        <div className="border rounded-md p-3 max-w-[125px] w-full border-dashed">
          <p className="text-[12px] text-neutral-400">Date:</p>
          <h4 className="text-sm font-semibold">
            {formatDate(product?.createdAt)}
          </h4>
        </div>
        <div className="border rounded-md p-3 max-w-[125px] w-full border-dashed">
          <p className="text-[12px] text-neutral-400">Price</p>
          <h4 className="text-sm font-semibold">${product?.price}</h4>
        </div>
      </div>
      {product?.status !== "Pending" || "Reject" || "Cancel" ? (
        <div>
          <Link
            href={`/product/${product?._id}`}
            target="_blank"
            className="bg-primary text-sm px-3 py-2 text-white rounded-md mt-8 flex items-center gap-2 max-w-[100px] justify-center"
          >
            Preview <PiEye />
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default VendorProductCard;

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString();
  // Adjust the format based on your requirements
  const onlyDate = formattedDate.split(",");

  return onlyDate[0];
};
