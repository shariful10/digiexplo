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

  const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("productName", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("vendorCountryLocation", country);
      formData.append("price", price);
      formData.append("thumbnail", thumbnail);
      formData.append("file", file);
      console.log(formData.get("productName"));

      const res = await axios.post(
        `${BASE_URL}/product/create-product`,
        formData,
        { withCredentials: true }
      );
      const data = res.data;
      console.log(data.response);
    } catch (err: any) {
      console.log(err.response.data);
      toast.error(err.response.data.errorMessage);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleProductSubmit}
        className="w-full mx-auto mt-5 md:mt-10"
      >
        <div className="mb-5">
          <input
            onChange={handleInputChange}
            value={name}
            name="name"
            type="text"
            placeholder="Product name"
            className="py-2 pl-3 rounded-md border focus:outline-gray-400 placeholder:text-base w-full md:w-1/2"
          />
        </div>
        <textarea
          onChange={handleInputChange}
          value={description}
          name="description"
          rows={5}
          placeholder="Product description"
          className="py-2 pl-3 rounded-md border focus:outline-gray-400 w-full md:w-1/2 my-5"
        ></textarea>
        <div className="mb-5">
          <input
            onChange={handleInputChange}
            value={price}
            name="price"
            type="number"
            placeholder="Price"
            className="py-2 pl-3 rounded-md border focus:outline-gray-400 w-full md:w-1/2 placeholder:text-base"
          />
        </div>
        <div className="mb-3">
          <select
            name="category"
            value={category}
            onChange={handleSelectChange}
            className={`py-2 pl-3 rounded-md border focus:outline-gray-400 w-full md:w-1/2 ${
              !category && "text-gray-400"
            } cursor-pointer`}
          >
            <option defaultChecked>Category</option>
            {categoriesItems.map(({ id, category }) => (
              <option key={id} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <CountrySelector
          country={country}
          handleSelectChange={handleSelectChange}
        />
        <div className="flex items-center border-2 border-gray-300 rounded-md p-2 w-full md:w-1/2 mb-5">
          <input
            max={1}
            onChange={handleFileChange}
            type="file"
            name="file"
            hidden
          />
          <label
            htmlFor="custom-input"
            className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 cursor-pointer"
          >
            Choose file
          </label>
          <label className="text-sm text-slate-500">Upload file</label>
        </div>
        <div className="flex items-center border-2 border-gray-300 rounded-md p-2 w-full md:w-1/2 mb-5">
          <input
            max={1}
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
