"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { Axios } from "@/lib/axios";
import FormattedPrice from "./FormattedPrice";
import { MdOutlineShoppingCart } from "react-icons/md";

export interface ProductInterface {
	_id?: string;
	thumbnail: string;
	title: string;
	author: {
		authorName: string;
		avatar: string;
		address: string;
	};
	category: string;
	date: string;
	price: number;
	description: string;
	tags: string[];
	status?: string;
}

export type ProductTypes = {
	product: ProductInterface;
	className: string;
};

const ImageCard = ({ product, className }: ProductTypes) => {

	if (!product) {
		return null;
	}

  const handleAddToCart = async (productId: string) => {
    try {
      const res = await Axios.post(`product/add-cart/${productId}`);

      if (res?.data.success) {
        toast.success(res?.data.message);
      }

    } catch (error: any) {
      if (error.response.data.success === false) {
        toast.error(error.response.data.errorMessage);
      }
      console.log("add category error", error.response.data);
    }
  };

	const { _id, thumbnail, title, author, category, price } = product;

	return (
		<div className="cursor-pointer group">
			<div className="relative rounded-xl overflow-hidden">
				<Image
					src={thumbnail}
					width={100}
					height={500}
					className="rounded-xl w-full"
					alt="image"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center items-center gap-4">
					<button className="bg-primary text-white px-4 py-2.5 rounded-xl transform translate-y-2 group-hover:translate-y-0 duration-300 flex gap-2 items-center">
						<MdOutlineShoppingCart size={16} /> <span>Add to cart</span>
					</button>
					<Link href={`/product/${_id}`}>
						<button className="bg-white px-4 py-2.5 rounded-xl transform translate-y-2 group-hover:translate-y-0 duration-1000">
							View Details
						</button>
					</Link>
				</div>
			</div>
			<div className="mt-5 text-textColor px-1.5">
				<div className="flex justify-between">
					<p className="font-bold">{title}</p>
					<span className="text-primary font-bold">
						<FormattedPrice amount={price} />
					</span>
				</div>
				<p className="text-neutral-400">
					by{" "}
					<span className="font-medium text-neutral-600">
						{author?.authorName}
					</span>{" "}
					in{" "}
					<span className="font-medium text-neutral-600">{category}</span>
				</p>
			</div>
		</div>
	);
};

export default ImageCard;
