"use client";

import ImageCard from "@/components/ImageCard";
import SectionDesc from "@/components/SectionDesc";
import SectionTitle from "@/components/SectionTitle";
import { useGetApprovedProducts } from "@/lib/getProducts";

const ProductPageComponent = () => {
  const { data: products = [], isLoading, refetch } = useGetApprovedProducts();
  return (
    <div className="my-16">
      <SectionTitle title="All" subtitle="Items" />
      <SectionDesc description="Browse all our Extraordinary products" />
      <div
        className={`mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
      >
        {products.map((product) => (
          <ImageCard key={product._id} product={product} className="" />
        ))}
      </div>
    </div>
  );
};

export default ProductPageComponent;
