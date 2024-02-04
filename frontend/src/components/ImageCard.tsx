import Image from "next/image";
import React from "react";
import FormattedPrice from "./FormattedPrice";
import Link from "next/link";

export interface ProductInterface {
	id: number;
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
}

export type ProductTypes = {
	product: ProductInterface;
	className: string;
};

const ImageCard = ({ product, className }: ProductTypes) => {
	if (!product) {
		return null; // or handle this case in a way that makes sense for your application
	}

	const { id, thumbnail, title, author, category, price } = product;
	return (
		<Link href={`/product/${id}`}>
			<div key={id} className="cursor-pointer">
				<Image
					src={thumbnail}
					width={100}
					height={500}
					className="rounded-xl w-full"
					alt="image"
				/>
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
							{author.authorName}
						</span>{" "}
						in{" "}
						<span className="font-medium text-neutral-600">
							{category}
						</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ImageCard;
