"use client";
import Link from "next/link";
import Image from "next/image";
import { IOrder, IProduct, IUser } from "./types";
import toast from "react-hot-toast";
import { Axios } from "@/lib/axios";
import FormattedPrice from "./FormattedPrice";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useQuery } from "react-query";
import { FaDownload } from "react-icons/fa6";

const ImageCard = ({ product }: { product: IProduct }) => {
  if (!product) {
    return null;
  }

  const handleAddToCart = async (productId: string) => {
    try {
      const res = await Axios.post(`product/add-cart/${productId}`);
      console.log(res);

      if (res?.data.success) {
        toast.success(res?.data.message);
      } else if (!res?.data.success) {
        toast.error(res?.data.message);
      }
    } catch (error: any) {
      if (error.response.data.success === false) {
        toast.error(error.response.data.errorMessage);
      }
      console.log("add category error", error.response.data);
    }
  };

  const { _id, thumbnail, productName, vendor, category, price } = product;

  const { data: user = [], refetch } = useQuery(["user"], async () => {
    const res = await Axios.get(`/users/get-user`);
    return res?.data?.data;
  });

  // console.log("user", user.buyedProducts);
  const isProductPurchased = user?.buyedProducts?.some(
    (order: IOrder) => order.product === _id
  );

  const handleBuyProduct = async (productId: string) => {
    try {
      const res = await Axios.post(`/product/buy-product-intend/${productId}`);

      if (res.status === 200) {
        window.location.href = res?.data?.url;
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cursor-pointer group">
      <div className="relative rounded-xl overflow-hidden">
        <Image
          src={thumbnail}
          width={100}
          height={500}
          className="rounded-xl w-full h-[245px] object-cover"
          alt="image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center items-center gap-4">
          {isProductPurchased ? (
            <a
              href={product.file}
              download
              className="bg-primary text-white px-4 py-2.5 rounded-xl transform translate-y-2 group-hover:translate-y-0 duration-300 flex gap-2 items-center"
            >
              <FaDownload size={16} /> <span>Download</span>
            </a>
          ) : (
            // <button
            //   onClick={() => handleAddToCart(_id)}
            //   className="bg-primary text-white px-4 py-2.5 rounded-xl transform translate-y-2 group-hover:translate-y-0 duration-300 flex gap-2 items-center"
            // >
            //   <MdOutlineShoppingCart size={16} /> <span>Add to cart</span>
            // </button>
            <button
              onClick={() => handleBuyProduct(_id)}
              className="bg-primary text-white px-4 py-2.5 rounded-xl transform translate-y-2 group-hover:translate-y-0 duration-300 flex gap-2 items-center"
            >
              <MdOutlineShoppingCart size={16} /> <span>Buy Now</span>
            </button>
          )}
          <Link href={`/product/${_id}`}>
            <button className="bg-white px-4 py-2.5 rounded-xl transform translate-y-2 group-hover:translate-y-0 duration-1000">
              View Details
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-5 text-textColor px-1.5">
        <div className="flex justify-between">
          <p className="font-bold">{productName}</p>
          <div className="text-primary font-bold">
            <FormattedPrice amount={price} />
          </div>
        </div>
        <p className="text-neutral-400">
          by{" "}
          <span className="font-medium text-neutral-600">
            {vendor?.user?.firstName + " " + vendor?.user?.lastName}
          </span>{" "}
          in{" "}
          <span className="font-medium text-neutral-600 capitalize">
            {category}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
