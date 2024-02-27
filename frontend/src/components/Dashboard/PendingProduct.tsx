"use client";

import { useGetPendingProducts } from "@/lib/getProducts";
import Link from "next/link";
import { IoOpenSharp } from "react-icons/io5";
import DashboardHeader from "./DashboardHeader";
import { IProduct } from "../types";
import { formatDate } from "./Vendor/VendorProductCard";
import Loader from "@/components/Loader/Loader";
import { Axios } from "@/lib/axios";
import toast from "react-hot-toast";
import { ChangeEvent, useEffect, useState } from "react";
import PendingProductModal from "./PendingProductModal";
import { IoChevronDownOutline } from "react-icons/io5";

const PendingProduct = () => {
  const { data: products = [], isLoading, refetch } = useGetPendingProducts();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [openStatusMenu, setOpenStatusMenu] = useState<boolean[]>([]);

  // status menu
  useEffect(() => {
    if (openStatusMenu.length !== products.length) {
      setOpenStatusMenu(new Array(products.length).fill(false));
    }
  }, [products.length]);

  // update product status
  const handleProductStatusUpdate = async (
    productId: string,
    status: string
  ) => {
    try {
      const res = await Axios.patch(
        `admin/product-status-update/${productId}`,
        {
          productStatus: status,
        }
      );
      if (res?.data.success) {
        toast.success(res?.data.message);
      }
      // Trigger a re-fetch of category data
      refetch();
    } catch (error: any) {
      if (error.response.data.success === false) {
        toast.error(error.response.data.errorMessage);
      }
      console.log("add category error", error.response.data);
    }
  };

  const handleViewProduct = (product: IProduct) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  // toggle status menu
  const handleToggleStatusMenu = (index: number) => {
    const updatedOpenStatusMenu = [...openStatusMenu];
    updatedOpenStatusMenu[index] = !updatedOpenStatusMenu[index];
    setOpenStatusMenu(updatedOpenStatusMenu);
  };

  return (
    <div className="relative">
      <DashboardHeader
        currentPage="pending products"
        title="pending products"
        url="dashboard"
      />
      <div className="px-7 md:px-10">
        {isLoading ? (
          <Loader />
        ) : products.length > 0 ? (
          <div className=" rounded-md box-shadow border border-[#F1F1F4] max-w-7xl w-full overflow-x-scroll lg:overflow-hidden min-h-[300px]">
            <div className="w-full">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="">
                  <tr>
                    <th className="px-8 py-5 md:px-10 whitespace-nowrap">SL</th>
                    <th className="px-8 py-5 md:px-10 whitespace-nowrap">
                      Title
                    </th>
                    <th className="px-8 py-5 md:px-10 whitespace-nowrap">
                      Price
                    </th>
                    <th className="px-8 py-5 md:px-10 whitespace-nowrap">
                      Author
                    </th>
                    <th className="px-8 py-5 md:px-10 whitespace-nowrap">
                      Category
                    </th>
                    <th className="px-8 py-5 md:px-10 whitespace-nowrap">
                      Date
                    </th>
                    <th className="px-8 py-5 md:px-10 whitespace-nowrap">
                      Action
                    </th>
                    <th className="px-8 py-5 md:px-10 whitespace-nowrap text-center">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product: IProduct, index: number) => (
                    <tr
                      className="bg-white border-b last:border-none hover:bg-gray-100 text-sm"
                      key={product?._id}
                    >
                      <td className="px-8 py-5 md:px-10">
                        <p className="whitespace-nowrap  capitalize">
                          {index + 1}
                        </p>
                      </td>
                      <td className="px-8 py-5 md:px-10">
                        <p className="whitespace-nowrap  capitalize">
                          {product?.productName}
                        </p>
                      </td>
                      <td className="px-8 py-2.5 md:px-10">
                        <p className="whitespace-nowrap ">${product?.price}</p>
                      </td>
                      <td className="px-8 py-2.5 md:px-10">
                        <p className="whitespace-nowrap ">
                          {product?.vendor?.user?.firstName +
                            " " +
                            product?.vendor?.user?.lastName}
                        </p>
                      </td>
                      <td className="px-8 py-2.5 md:px-10">
                        <p className="whitespace-nowrap ">
                          {product?.category}
                        </p>
                      </td>
                      <td className="px-8 py-2.5 md:px-10">
                        <p className="whitespace-nowrap ">
                          {formatDate(product?.createdAt)}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-8 py-2.5 md:px-10">
                        <div
                          className="text-white bg-primary rounded-md px-3 py-2 relative cursor-pointer flex items-center justify-between"
                          onClick={() => handleToggleStatusMenu(index)}
                        >
                          Status <IoChevronDownOutline size={16} />
                          <div
                            className={`rounded-md p-5 border shadow-md bg-white absolute right-0 ${
                              openStatusMenu[index]
                                ? "top-10 z-30 visible"
                                : "top-48 -z-50 invisible"
                            } duration-300 text-black flex flex-col items-center gap-4`}
                          >
                            <button
                              className="px-5 py-1.5 bg-green-500 text-white rounded-md "
                              onClick={() =>
                                handleProductStatusUpdate(
                                  product?._id,
                                  "Approved"
                                )
                              }
                            >
                              Approve
                            </button>
                            <button
                              className="px-5 py-1.5 bg-amber-500 text-white rounded-md "
                              onClick={() =>
                                handleProductStatusUpdate(
                                  product?._id,
                                  "Cancel"
                                )
                              }
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-2.5 md:px-10">
                        <button
                          className="font-medium text-primary "
                          onClick={() => handleViewProduct(product)}
                        >
                          <IoOpenSharp size={25} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>No Pending Products</p>
        )}
      </div>

      {openModal && selectedProduct && (
        <PendingProductModal
          handleProductStatusUpdate={handleProductStatusUpdate}
          onClose={() => setOpenModal(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default PendingProduct;
