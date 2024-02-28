"use client";
import React from "react";
import Image from "next/image";
import { products } from "../data";
import { Axios } from "@/lib/axios";
import ImageCard from "../ImageCard";
import { useQuery } from "react-query";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";
import { IProduct } from "../types";
import { useGetApprovedProducts } from "@/lib/getProducts";
import Loader from "../Loader/Loader";

const FeaturedItems = () => {
	const { data: products = [], isLoading, refetch } = useGetApprovedProducts();

	return (
		<div className="my-16">
			<SectionTitle title="Featured" subtitle="Items" />
			<SectionDesc description="These Items are Extraordinary" />
			{isLoading ? (
				<Loader />
			) : (
				<div
					className={`mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
				>
					{products
						.map((product: IProduct) => (
							<ImageCard key={product._id} product={product} />
						))
						.slice(0, 8)}
				</div>
			)}
		</div>
	);
};

export default FeaturedItems;
