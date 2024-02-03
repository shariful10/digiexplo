import React from "react";
import Image from "next/image";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";
import ImageCard from "../ImageCard";
import { products } from "../data";

const FeaturedItems = () => {
	return (
		<div className="my-16">
			<SectionTitle title="Featured" subtitle="Items" />
			<SectionDesc description="These Items are Extraordinary" />
			<div
				className={`mt-10 grid md:grid-cols-2 gap-6`}
			>
				{products
					.map((product) => (
						<ImageCard key={product.id} product={product} className="" />
					))
					.slice(0, 8)}
			</div>
		</div>
	);
};

export default FeaturedItems;
