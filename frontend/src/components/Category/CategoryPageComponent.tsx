"use client";

import { useGetApprovedProducts } from "@/lib/getProducts";
import { useParams } from "next/navigation";
import React from "react";
import SectionTitle from "../SectionTitle";
import SectionDesc from "../SectionDesc";
import ImageCard from "../ImageCard";
import Loader from "../Loader/Loader";

const CategoryPageComponent = () => {
	const { category } = useParams();
	const query = { category: Array.isArray(category) ? category[0] : category };

	const { data: products = [], isLoading } = useGetApprovedProducts(query);

	return (
		<div className="my-16">
			<SectionTitle title="" subtitle={query?.category} />
			<SectionDesc description={`All ${query?.category} Items`} />
			{isLoading ? (
				<Loader />
			) : (
				<div
					className={`mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
				>
					{products.map((product) => (
						<ImageCard key={product._id} product={product} />
					))}
				</div>
			)}
		</div>
	);
};

export default CategoryPageComponent;
