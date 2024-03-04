"use client";
import React from "react";
import ImageCard from "../ImageCard";
import Loader from "../Loader/Loader";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";
import { useParams } from "next/navigation";
import { useGetApprovedProducts } from "@/lib/getProducts";

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
      ) : products.length > 0 ? (
        <div
          className={`mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
        >
          {products.map((product) => (
            <ImageCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="min-h-[200px] flex flex-col justify-center max-w-4xl mx-auto rounded-2xl box-shadow border border-gray-100">
          <p className="text-2xl font-semibold text-center">No Product Yet!</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPageComponent;
