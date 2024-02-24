"use client";

import Image from "next/image";
import FormattedPrice from "../FormattedPrice";
import { HandleProductStatusUpdateType, IProduct } from "../types";
import { formatDate } from "./Vendor/VendorProductCard";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

interface Props {
  product: IProduct;
  handleProductStatusUpdate: HandleProductStatusUpdateType;
  onClose: () => void;
}

const PendingProductModal = ({
  product,
  handleProductStatusUpdate,
  onClose,
}: Props) => {
  console.log(product);
  if (!product) {
    return null;
  }

  return (
    <div className="flex justify-center items-center absolute top-0 w-full bg-black bg-opacity-20">
      <div
        className={`px-5 py-14 md:p-12 rounded-2xl box-shadow border border-[#F1F1F4] max-w-4xl w-full my-5 md:my-10 bg-white relative`}
      >
        <div
          className="absolute top-5 right-5 cursor-pointer border-2 rounded-full border-black hover:rotate-180 duration-500"
          onClick={onClose}
        >
          <IoClose size={25} />
        </div>
        <div className="rounded-2xl">
          <div className="flex flex-col gap-10">
            <div className="xl:p-2 rounded-2xl mb-6 xl:mb-0 w-full">
              <Image
                src={product?.thumbnail}
                width={655}
                height={437}
                alt={product?.productName}
                className="rounded-2xl w-full bg-cover xl:h-full"
              />
            </div>
            <div>
              <h4 className="text-lg mb-2">
                File:{" "}
                <Link
                  href={product?.file}
                  target="_blank"
                  className="underline text-neutral-600 hover:text-blue-600 font-medium"
                >
                  View
                </Link>
              </h4>
              <h2 className="text-2xl font-bold md:leading-[52px] ">
                {product?.productName}
              </h2>
              <p>
                by{" "}
                <span className="font-medium cursor-pointer">
                  {product?.vendor?.user?.firstName +
                    " " +
                    product?.vendor?.user?.lastName}
                </span>{" "}
                in{" "}
                <span className="font-medium cursor-pointer">
                  {product?.category}
                </span>{" "}
                on{" "}
                <span className="font-medium cursor-pointer">
                  {formatDate(product?.createdAt)}
                </span>
              </p>
              <div className="flex gap-2 items-center my-3">
                <span>Price:</span>{" "}
                <FormattedPrice
                  amount={product?.price}
                  className="text-xl font-bold"
                />
              </div>

              <p className="my-6">{product?.description}</p>

              <div className="flex justify-end items-center gap-3">
                <button
                  className="text-white capitalize bg-green-500 duration-300 transition-all ease-in-out py-3 min-w-[40px] max-w-[150px] w-full rounded-lg text-base font-semibold"
                  onClick={() => {
                    handleProductStatusUpdate(product?._id, "Approved");
                    onClose;
                  }}
                >
                  Approve
                </button>
                <button
                  className="text-black  capitalize bg-amber-400  duration-300 transition-all ease-in-out py-3 min-w-[40px] max-w-[150px] w-full rounded-lg text-base font-semibold"
                  onClick={() => {
                    handleProductStatusUpdate(product?._id, "Cancel");
                    onClose;
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner end */}
    </div>
  );
};

export default PendingProductModal;