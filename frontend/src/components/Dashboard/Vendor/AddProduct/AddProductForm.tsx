"use client";
import React, { useState } from "react";
import CountrySelector from "./CountrySelector";
import { categoriesItems } from "@/components/data";
import { BASE_URL } from "@/components/helper";
import axios from "axios";
import toast from "react-hot-toast";

interface Country {
  value: string;
  label: string;
}

const AddProductForm = () => {
  const [inputVal, setInputVal] = useState<{
    name: string;
    description: string;
    price: string;
    category: string;
    country: string;
    thumbnail: any;
    file: any;
  }>({
    name: "",
    description: "",
    price: "",
    category: "",
    country: "",
    thumbnail: null,
    file: null,
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target?.files[0];
    setInputVal({
      ...inputVal,
      file,
    });
  };

  const handleThumbnailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target?.files[0];
    setInputVal({
      ...inputVal,
      thumbnail: file,
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };
  const { name, description, price, category, country, file, thumbnail } =
    inputVal;

  const handleProductSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("productName", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("vendorCountryLocation", country);
    formData.append("price", price);
    formData.append("thumbnail", thumbnail);
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${BASE_URL}/product/create-product`,
        formData,
        {
          withCredentials: true,
        }
      );

      const data = await response.data;

      if (data && data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.errorMessage);
      }
    } catch (error: any) {
      console.error("Error creating product:", error.response.data);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleProductSubmit} className="w-full mt-5 md:mt-10">
        <div className="flex flex-col gap-2 my-5">
          <label htmlFor="name" className="text-sm">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            onChange={handleInputChange}
            name="name"
            type="text"
            placeholder="Product name"
            className="py-3.5 pl-3 rounded-md border focus:outline-gray-400 placeholder:text-base w-full"
          />
        </div>
        <div className="flex flex-col gap-2 my-5">
          <label htmlFor="description" className="text-sm">
            Description <span className="text-red-600">*</span>
          </label>
          <textarea
            onChange={handleInputChange}
            name="description"
            rows={5}
            placeholder="Product description"
            className="py-3.5 pl-3 rounded-md border focus:outline-gray-400 w-full"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 my-5 ">
          <label htmlFor="price" className="text-sm">
            Price <span className="text-red-600">*</span>
          </label>
          <input
            onChange={handleInputChange}
            name="price"
            type="number"
            placeholder="Price"
            className="py-3.5 pl-3 rounded-md border focus:outline-gray-400 w-full placeholder:text-base"
          />
        </div>
        <div className="flex flex-col gap-2 my-5">
          <label htmlFor="category" className="text-sm">
            Category <span className="text-red-600">*</span>
          </label>
          <select
            onChange={handleSelectChange}
            name="category"
            className="py-3.5 pl-3 rounded-md border focus:outline-gray-400 w-full cursor-pointer"
          >
            <option defaultChecked>Category</option>
            {categoriesItems.map(({ id, category }) => (
              <option key={id} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 my-5">
          <label htmlFor="country" className="text-sm">
            Country <span className="text-red-600">*</span>
          </label>
          <CountrySelector
            country={country}
            handleSelectChange={handleSelectChange}
          />
        </div>
        <div className="flex flex-col gap-2 my-5">
          <p className="text-sm">
            Product Thumbnail <span className="text-red-600">*</span>
          </p>
          <div className="flex items-center border border-gray-300 rounded-md p-2 w-full">
            <input
              onChange={handleThumbnailChange}
              type="file"
              name="thumbnail"
              id="custom-input-thumbnail"
              hidden
            />
            <label
              htmlFor="custom-input-thumbnail"
              className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 cursor-pointer"
            >
              Choose file
            </label>
            <label className="text-sm text-slate-500">Upload Thumbnail</label>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <p className="text-sm">
            Product File <span className="text-red-600">*</span>
          </p>
          <div className="flex items-center border border-gray-300 rounded-md p-2 w-full">
            <input
              onChange={handleFileChange}
              type="file"
              name="profileImg"
              id="custom-input-file"
              hidden
            />
            <label
              htmlFor="custom-input-file"
              className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 cursor-pointer"
            >
              Choose file
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Upload Product"
          className="bg-blue-600 py-3 px-5 rounded-md text-white mt-5 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddProductForm;
