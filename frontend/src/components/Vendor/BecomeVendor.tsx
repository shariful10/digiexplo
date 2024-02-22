"use client";
import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../helper";
import { useUser } from "../Context/UserContext";

const BecomeVendor = () => {
  const { data: user } = useUser();

	const [inputVal, setInputVal] = useState<{
		companyName: string;
		ownerName: string;
		website: string;
		address: string;
		verificationId: any;
	}>({
		companyName: "",
		ownerName: "",
		website: "",
		address: "",
		verificationId: null,
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const verificationId = event.target.files && event.target?.files[0];
		setInputVal({
			...inputVal,
			verificationId,
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

  const { companyName, ownerName, website, address, verificationId } = inputVal;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      // const form = e.target as HTMLFormElement;
      // const companyName = form.companyName.value;
      // const ownerName = form.ownerName.value;
      // const website = form.website.value;
      // const address = form.address.value;
      // const verificationId = form.verificationId.files[0].name;

      // const vendorData = {
      //   companyName,
      //   ownerName,
      //   website,
      //   address,
      //   verificationId,
      // };

      formData.append("companyName", companyName);
      formData.append("ownerName", ownerName);
      formData.append("website", website);
      formData.append("address", address);
      formData.append("verificationId", verificationId);

      // console.log(formData);

      const res = await axios.post(
        `${BASE_URL}/vendor/become-vendor/${user && user?.userData?._id}`,
        formData,
        { withCredentials: true }
      );
      const data = res.data;
      console.log(data);
    } catch (err: any) {
      console.log(err.response.data);
    }
  };

	return (
		<div className="bg-gray-200 w-full h-screen flex justify-center items-center">
			<div className="py-6 md:py-12 px-5 md:px-10 lg:px-0 flex justify-center items-center">
				<div className="bg-white px-7 md:px-10 lg:px-16 py-14 rounded-xl w-full max-w-xl">
					<h2 className="text-2xl xl:text-4xl font-semibold text-center">
						Vendor Info
					</h2>

					<form onSubmit={handleFormSubmit} className="mt-10 ">
						<div className="md:flex gap-8">
							<div className="mb-5 md:mb-8">
								<label
									htmlFor="Company Name"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									Company Name
								</label>
								<div className="relative">
									<input
										type="text"
										name="companyName"
										// value={companyName}
										onChange={handleInputChange}
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full p-2.5 px-3  "
										placeholder="Z Company"
										required
									/>
								</div>
							</div>
							<div className="mb-5 md:mb-8">
								<label
									htmlFor="Owner Name"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									Owner Name
								</label>
								<div className="relative">
									<input
										type="text"
										name="ownerName"
										// value={ownerName}
										onChange={handleInputChange}
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full p-2.5 px-3  "
										placeholder="Doe"
										required
									/>
								</div>
							</div>
						</div>
						<div className="md:flex gap-5">
							<div className="mb-5 md:mb-8">
								<label
									htmlFor="Website"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									Website
								</label>
								<div className="relative">
									<input
										type="text"
										name="website"
										// value={website}
										onChange={handleInputChange}
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full p-2.5 px-3  "
										placeholder="www.xyz.com"
										required
									/>
								</div>
							</div>
							<div className="mb-5 md:mb-8">
								<label
									htmlFor="Address"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									Address
								</label>
								<div className="relative">
									<input
										type="text"
										name="address"
										// value={address}
										onChange={handleInputChange}
										id="address"
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full p-2.5 px-3  "
										placeholder="201 Main St, New York"
										required
									/>
								</div>
							</div>
						</div>

						{/* File input */}
						<div className="">
							<div className="w-full">
								<div className="flex items-center border-b-2 border-gray-300 py-4">
									<input
										type="file"
										name="verificationId"
										id="verificationId"
										onChange={handleFileChange}
										hidden
									/>
									<label
										htmlFor="verificationId"
										className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 cursor-pointer"
									>
										Choose file
									</label>
									<label className="text-sm text-slate-500">
										ID/Driving licence or Passport
									</label>
								</div>
							</div>
						</div>

						{/* File input End */}

						<div className="mt-7">
							<button
								type="submit"
								className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400 rounded-full py-2 px-8 w-full text-lg font-semibold text-white transition-colors duration-500"
							>
								Complete
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BecomeVendor;
