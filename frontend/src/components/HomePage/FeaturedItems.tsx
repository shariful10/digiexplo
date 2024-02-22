"use client"
import React from "react";
import Image from "next/image";
import { products } from "../data";
import { Axios } from "@/lib/axios";
import ImageCard from "../ImageCard";
import { useQuery } from "react-query";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";

interface ProductInterface {
	_id: string;
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
	status: string;
}

const FeaturedItems = () => {
  const { data: products = [], refetch } = useQuery(
    ["products"],
    async () => {
      try {
        const res = await Axios.get(`product/get-products-by-category/audio`);
        return res?.data?.data;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch category data");
      }
    }
  );

  return (
    <div className="my-16">
      <SectionTitle title="Featured" subtitle="Items" />
      <SectionDesc description="These Items are Extraordinary" />
      <div
        className={`mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
      >
        {products
          .map((product: ProductInterface) => (
            <ImageCard key={product._id} product={product} className="" />
          ))
          .slice(0, 8)}
      </div>
    </div>
  );
};

export default FeaturedItems;
