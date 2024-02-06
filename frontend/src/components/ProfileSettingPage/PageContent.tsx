"use client";
import Image, { StaticImageData } from "next/image";
import React, { ChangeEvent, useState } from "react";
import image from "@/images/Shariful.jpg";

const PageContent = () => {
	const [uploadButtonText, setUploadButtonText] = useState("");
   const [profileImage, setProfileImage] = useState<StaticImageData | string | ArrayBuffer | null>(image);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileImage(reader.result);
        };
        reader.readAsDataURL(file);
        setUploadButtonText(file.name);
      }
    };

	return (
		<form>
			<div className="my-10 flex flex-col items-center">
            <Image
               src={profileImage as string}
               width={200}
               height={200}
               className="rounded-full h-[150px] w-[150px]"
               alt="profile image"
            />
			</div>
			<div className="grid md:grid-cols-2 gap-x-8 md:px-10">
				<div className="mb-5 md:mb-8">
					<label
						htmlFor="First Name"
						className="text-base block font-medium text-gray-900 md:mb-2"
					>
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						className="bg-white border-2 border-gray-300 text-gray-600 focus:outline-none focus:border-primary w-full ps-5 p-2.5 rounded-md"
						placeholder="John"
						required
					/>
				</div>
				<div className="mb-5 md:mb-8">
					<label
						htmlFor="Last Name"
						className="text-base block font-medium text-gray-900 md:mb-2"
					>
						Last Name
					</label>
					<input
						type="text"
						name="lastName"
						className="bg-white border-2 border-gray-300 text-gray-600 focus:outline-none focus:border-primary w-full ps-5 p-2.5 rounded-md"
						placeholder="Abraham"
						required
					/>
				</div>
				<div className="mb-5 md:mb-8">
					<label
						htmlFor="User Name"
						className="text-base block font-medium text-gray-900 md:mb-2"
					>
						User Name
					</label>
					<input
						type="username"
						name="username"
						className="bg-white border-2 border-gray-300 text-gray-600 focus:outline-none focus:border-primary w-full ps-5 p-2.5 rounded-md"
						placeholder="john16"
						required
					/>
				</div>
				<div className="mb-5 md:mb-8">
					<label
						htmlFor="Email"
						className="text-base block font-medium text-gray-900 md:mb-2"
					>
						Email
					</label>
					<input
						type="email"
						name="email"
						className="bg-white border-2 border-gray-300 text-gray-600 focus:outline-none focus:border-primary w-full ps-5 p-2.5 rounded-md"
						placeholder="Contact@gmail.com"
						required
					/>
				</div>
				<div className="mb-5 md:mb-8">
					<label
						htmlFor="Phone"
						className="text-base block font-medium text-gray-900 md:mb-2"
					>
						Phone Number
					</label>
					<input
						type="phone"
						name="phone"
						className="bg-white border-2 border-gray-300 text-gray-600 focus:outline-none focus:border-primary w-full ps-5 p-2.5 rounded-md"
						placeholder="+1********54"
						required
					/>
				</div>
				<div className="w-full mt-3">
               <div className="flex items-center border-b-2 border-gray-300 py-4">
                  <input
                     onChange={handleImageChange}
                     type="file"
                     name="profileImg"
                     id="custom-input"
                     hidden
                  />
                  <label
                     htmlFor="custom-input"
                     className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 cursor-pointer"
                  >
                     {uploadButtonText ? uploadButtonText : "Choose file"}
                  </label>
                  <label className="text-sm text-slate-500">
                     {uploadButtonText ? "" : "Profile Image"}
                  </label>
               </div>
            </div>
			</div>
         <input type="submit" className="bg-primary text-white font-semibold rounded-md py-2.5 px-4 md:mx-10 mt-5 md:mt-0" value="Update Profile" />
		</form>
	);
};

export default PageContent;
