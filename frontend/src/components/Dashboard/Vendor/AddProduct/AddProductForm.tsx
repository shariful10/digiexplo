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
	const [thumbnail, setItemThumbnail] = useState();

	const handleThumbnailUpload = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setItemThumbnail(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleThumbnailReset = () => {
		setItemThumbnail(null);
	};

	const handleProductSubmit = async (e: any) => {
		e.preventDefault();

		const form = e.target;

		const name = form.name.value;
		const description = form.description.value;
		const category = form.category.value;
		const vendorCountryLocation = form.country.value;
		const price = form.price.value;
		const thumbnail = form.thumbnail.files && form.thumbnail.files[0];
		const file = form.productFile.files;

		console.log("file", file);
	};

	return (
		<div>
			<form
				onSubmit={handleProductSubmit}
				className="w-full mt-5 md:mt-10 max-w-4xl"
			>
				<div className="flex flex-col gap-2 my-5">
					<label htmlFor="name" className="text-sm">
						Name <span className="text-red-600">*</span>
					</label>
					<input
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
						{thumbnail ? (
							<div className="rounded-lg border-2 max-w-[122px] lg:max-w-[155px] max-h-[122px] lg:min-h-[155px] relative">
								<img
									src={thumbnail}
									alt="thumbnail"
									className="absolute inset-0 w-full h-full object-cover rounded-lg p-1.5"
									onClick={handleThumbnailReset}
								/>
							</div>
						) : (
							<label
								htmlFor="thumbnail"
								className="flex flex-col items-center justify-center w-[100px] lg:w-[160px] h-[100px] lg:h-[160px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
							>
								<div className="flex flex-col items-center justify-center">
									<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
										<span className="">Add</span>
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										Add from file
									</p>
								</div>
								<input
									id="thumbnail"
									type="file"
									className="hidden"
									onChange={handleThumbnailUpload}
									multiple
								/>
							</label>
						)}
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
