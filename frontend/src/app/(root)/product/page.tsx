import React from "react";
import { useGetApprovedProducts } from "@/lib/getProducts";
import ProductPageComponent from "@/components/Product/ProductPageComponent";

const Product = () => {
  const { data: products = [], isLoading, refetch } = useGetApprovedProducts();

  return (
    <div>
      <ProductPageComponent />
    </div>
  );
};

export default Product;
