"use client";
import React, { useState } from "react";
// import { categoriesItems } from "@/components/data";
import CountrySelector from "./CountrySelector";
import { categoriesItems } from "@/components/data";

interface Country {
	value: string;
	label: string;
}

const AddProductForm = () => {
	const [selectedOption, setSelectedOption] = useState<string>("");
	const [uploadButtonText, setUploadButtonText] = useState("");
	const [selectedCountry, setSelectedCountry] = useState<Country>({
		value: "",
		label: "",
	});

	const handleChange = (e: any) => {
		setSelectedOption(e.target.value);
	};

	const handleImageChange = (image: {
		name: React.SetStateAction<string>;
	}) => {
		setUploadButtonText(image.name);
      console.log(image.name)
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.target;
		const productName = form.productName.value;
		const productDesc = form.description.value;
		const price = form.price.value;
		const category = selectedOption;
		const country = selectedCountry.label;
		const file = form.file.files[0].name;
		const thumbnailFile = form.thumbnail.files[0];

		const productDetails = {
			productName,
			productDesc,
			price,
			category,
			country,
			file,
			thumbnail,
		};

		console.log(productDetails);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="w-full mx-auto mt-5 md:mt-10">
				<div className="mb-5">
					<input
						type="text"
						name="productName"
						placeholder="Product name"
						className="py-2 pl-3 rounded-md border focus:outline-gray-400 placeholder:text-base w-full md:w-1/2"
					/>
				</div>
				<textarea
					name="description"
					rows={5}
					placeholder="Product description"
					className="py-2 pl-3 rounded-md border focus:outline-gray-400 w-full md:w-1/2 my-5"
				></textarea>
				<div className="mb-5">
					<input
						type="number"
						name="price"
						placeholder="Price"
						className="py-2 pl-3 rounded-md border focus:outline-gray-400 w-full md:w-1/2 placeholder:text-base"
					/>
				</div>
				<div className="mb-3">
					<select
						value={selectedOption}
						onChange={handleChange}
						className={`py-2 pl-3 rounded-md border focus:outline-gray-400 w-full md:w-1/2 ${
							!selectedOption && "text-gray-400"
						} cursor-pointer`}
					>
						<option disabled value="">
							Select an option
						</option>
						{categoriesItems.map(({ id, category }) => (
							<option key={id} value={category}>
								{category}
							</option>
						))}
					</select>
				</div>
				<CountrySelector
					selectedCountry={selectedCountry}
					setSelectedCountry={setSelectedCountry}
				/>
				<div className="flex items-center border-2 border-gray-300 rounded-md p-2 w-full md:w-1/2 mb-5">
					<input
						onChange={(e) => {
							const files = e.target.files;
							if (files && files.length > 0) {
								handleImageChange(files[0]);
                        console.log(files);
							}
						}}
						type="file"
						name="file"
						id="custom-input"
						hidden
					/>
					<label
						htmlFor="custom-input"
						className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 cursor-pointer"
					>
						Choose file
					</label>
					<label className="text-sm text-slate-500">
						Upload file (.zip file)
					</label>
				</div>
				<div className="flex items-center border-2 border-gray-300 rounded-md p-2 w-full md:w-1/2">
					<input
						onChange={(e) => {
							const files = e.target.files;
							if (files && files.length > 0) {
								handleImageChange(files[0]);
							}
						}}
						type="file"
						name="thumbnail"
						id="custom-input"
						hidden
					/>
					<label
						htmlFor="custom-input"
						className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 cursor-pointer"
					>
						Choose file
					</label>
					<label className="text-sm text-slate-500">Thumbnail</label>
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
