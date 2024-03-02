"use client";
import React from "react";
import SectionTitle from "../SectionTitle";
import SectionDesc from "../SectionDesc";
import ImageCard from "../ImageCard";
import Tabs from "../Tabs";
import { useGetApprovedProducts } from "@/lib/getProducts";
import Loader from "../Loader/Loader";

const LatestItems = () => {
  const { data: products = [], isLoading } = useGetApprovedProducts();

  console.log(products);

  return (
    <div className="my-16">
      <SectionTitle title="Latest" subtitle="Items" />
      <SectionDesc description="Browse All Latest Charms" />
      <Tabs />
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

export default LatestItems;
