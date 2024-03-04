"use client";
import { Axios } from "@/lib/axios";
import toast from "react-hot-toast";
import { IProduct } from "../types";
import { useEffect, useState } from "react";
import { IoOpenSharp } from "react-icons/io5";
import DashboardHeader from "./DashboardHeader";
import Loader from "@/components/Loader/Loader";
import PendingProductModal from "./PendingProductModal";
import { formatDate } from "./Vendor/VendorProductCard";
import { useGetPendingProducts } from "@/lib/getProducts";

const PendingProduct = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openStatusMenu, setOpenStatusMenu] = useState<boolean[]>([]);
  const { data: products = [], isLoading, refetch } = useGetPendingProducts();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

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
          <div className=" rounded-md box-shadow border border-[#F1F1F4] max-w-7xl w-full overflow-x-scroll lg:overflow-hidden">
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
                      Status
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
                        <p className="whitespace-nowrap capitalize">
                          {index + 1}
                        </p>
                      </td>
                      <td className="px-8 py-5 md:px-10">
                        <p className="whitespace-nowrap capitalize">
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
                        <p className="bg-amber-500 py-1 px-3.5 text-white rounded-full text-xs">
                          {product?.status}
                        </p>
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
          <div className="min-h-[200px] flex flex-col justify-center max-w-4xl rounded-2xl box-shadow border border-gray-100 my-16">
						<p className="text-2xl font-semibold text-center">
							No pending products! 😊
						</p>
					</div>
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
