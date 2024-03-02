"use client";

import React, { useState } from "react";
import DashboardHeader from "../DashboardHeader";
import { useQuery } from "react-query";
import { Axios } from "@/lib/axios";
import axios from "axios";
import { BASE_URL } from "@/components/helper";
import AddCategoryForm from "./AddCategoryForm";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { FaEdit, FaPenAlt, FaTrash } from "react-icons/fa";
import Loader from "@/components/Loader/Loader";
import UpdateCategoryForm from "./UpdateCategoryForm";

const Categories = () => {
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const [openUpdateCategory, setOpenUpdateCategory] = useState(false);
  const [categoryId, setCategoryId] = useState("");

  const {
    data: categories = [],
    refetch,
    isLoading,
  } = useQuery(["categories"], async () => {
    try {
      const res = await Axios.get(`users/get-categories`);
      return res?.data?.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch category data");
    }
  });

  const handleCategoryFormSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const titleSmall = title.toLowerCase();
    try {
      const res = await Axios.post(`admin/add-category`, { title: titleSmall });
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
    e.target.reset();
  };
  // console.log(categories);

  const handleCategoryDelete = async (categoryId: string) => {
    try {
      const res = await Axios.post(`admin/delete-category/${categoryId}`);
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

  const handleCategoryUpdate = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const titleSmall = title.toLowerCase();
    try {
      const res = await Axios.put(`admin/update-category/${categoryId}`, {
        title: titleSmall,
      });
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
    e.target.reset();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString(); // Adjust the format based on your requirements
    return formattedDate;
  };

  return (
    <div className="relative">
      <DashboardHeader
        currentPage="categories"
        title="Categories"
        url="dashboard"
      />
      <div className="max-w-5xl px-7 md:px-10">
        <div className="mb-8 ">
          <button
            onClick={() => setOpenAddCategory(true)}
            className="bg-primary text-[13px] px-3 py-2 text-white rounded-md flex items-center gap-2"
          >
            <FaPlus /> Add Category
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] mt-5  bg-white w-full">
            <div className="overflow-x-scroll lg:overflow-hidden w-full">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="">
                  <tr>
                    <th className="pb-3 px-3 md:px-0 whitespace-nowrap">
                      Name
                    </th>
                    <th className="pb-3 px-3 md:px-0 whitespace-nowrap">
                      Create Date
                    </th>
                    <th className="pb-3 px-3 md:px-0 whitespace-nowrap">
                      Update Date
                    </th>

                    <th className="pb-3 px-3 md:px-0 whitespace-nowrap text-center">
                      Edit
                    </th>
                    <th className="pb-3 px-3 md:px-0 whitespace-nowrap text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(
                    (
                      category: {
                        title: string;
                        createdAt: string;
                        updatedAt: string;
                        _id: string;
                      },
                      index: number
                    ) => (
                      <tr
                        key={index}
                        className="bg-white border-b last:border-none hover:bg-gray-50 text-sm"
                      >
                        <td className="py-3">
                          <p className="whitespace-nowrap px-3 md:px-0 capitalize">
                            {category?.title}
                          </p>
                        </td>
                        <td className="py-3">
                          <p className="whitespace-nowrap px-3 md:px-0">
                            {formatDate(category?.createdAt)}
                          </p>
                        </td>
                        <td className="py-3">
                          <p className="whitespace-nowrap px-3 md:px-0">
                            {formatDate(category?.updatedAt)}
                          </p>
                        </td>
                        <td className="py-3">
                          <p
                            className="hover:text-primary hover:scale-125 cursor-pointer duration-300 flex justify-center"
                            onClick={() => {
                              setCategoryId(category?._id),
                                setOpenUpdateCategory(true);
                            }}
                          >
                            <FaEdit size={18} />
                          </p>
                        </td>
                        <td className="py-3">
                          <p
                            className="hover:text-red-500 hover:scale-125 cursor-pointer duration-300 flex justify-center"
                            onClick={() => handleCategoryDelete(category._id)}
                          >
                            <FaTrash size={18} />
                          </p>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {openAddCategory && (
        <AddCategoryForm
          onClose={() => setOpenAddCategory(false)}
          openAddCategory={openAddCategory}
          handleCategoryFormSubmit={handleCategoryFormSubmit}
        />
      )}
      {openUpdateCategory && (
        <UpdateCategoryForm
          onClose={() => setOpenUpdateCategory(false)}
          handleCategoryUpdate={handleCategoryUpdate}
        />
      )}
    </div>
  );
};

export default Categories;
