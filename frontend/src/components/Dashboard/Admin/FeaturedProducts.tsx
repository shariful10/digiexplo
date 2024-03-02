"use client";

import React, { useState } from "react";
import DashboardHeader from "../DashboardHeader";
import { Axios } from "@/lib/axios";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import FeaturedProductTable from "./FeaturedProductTable";
import Loader from "@/components/Loader/Loader";
import { IProduct } from "@/components/types";

const FeaturedProductsComponent = () => {
  const {
    data: featuredProducts = [],
    refetch,
    isLoading,
  } = useQuery(["featuredProducts"], async () => {
    try {
      const res = await Axios.get(`featured/get-featured-product`);
      return res?.data?.data;
    } catch (error: any) {
      if (error.response.data.success === false) {
        toast.error(error.response.data.errorMessage);
      }
      console.log("Fetch vendor error", error.response.data);
    }
  });

  const handleDeleteFeaturedProducts = async (productId: string) => {
    try {
      const res = await Axios.delete(
        `/featured/delete-featured-product/${productId}`
      );
      if (res?.data.success) {
        toast.success(res?.data.message);
        refetch();
      }
    } catch (error: any) {
      if (error.response.data.success === false) {
        toast.error(error.response.data.errorMessage);
      }
      console.log("Feature Delete error", error);
    }
  };

  return (
    <div>
      <DashboardHeader
        currentPage="featured-products"
        title="Featured Products"
        url="dashboard"
      />

      {isLoading ? (
        <Loader />
      ) : featuredProducts.length > 0 ? (
        <FeaturedProductTable
          refetch={refetch}
          featuredProducts={featuredProducts}
          isLoading={isLoading}
          handleDeleteFeaturedProducts={handleDeleteFeaturedProducts}
        />
      ) : (
        <p className="px-7 md:px-10">No Featured Products</p>
      )}
    </div>
  );
};

export default FeaturedProductsComponent;
