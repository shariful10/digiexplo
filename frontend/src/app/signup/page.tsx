"use client";

import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import AWS from 'aws-sdk';
import { FaUser } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";

const SignUp = () => {
	const [uploadButtonText, setUploadButtonText] = useState("");
	const { registerUser } = useAuth();
   // const s3 = new AWS.S3();

	const handleImageChange = (image: {
		name: React.SetStateAction<string>;
	}) => {
		setUploadButtonText(image.name);
	};

   // const uploadProfileImageToS3 = async (file: File) => {
   //    const params = {
   //      Bucket: 'digiexplo',
   //      Key: `profiles/${file.name}`,
   //      Body: file,
   //      ACL: 'public-read',
   //    };
    
   //    try {
   //      const data = await s3.upload(params).promise();
   //      console.log('File uploaded successfully:', data.Location);
   //      return data.Location; // Return the URL of the uploaded file
   //    } catch (error) {
   //      console.error('Error uploading file:', error);
   //      throw error;
   //    }
   //  };

	const handleSignUp = async (e: any) => {
		e.preventDefault();

		const form = e.target;

		const firstName = form.firstName.value;
		const lastName = form.lastName.value;
		const name = { firstName, lastName };
		const phone = form.phone.value;
		const username = form.username.value;
		const email = form.email.value;
		const password = form.password.value;
		const profileImg = form.profileImg.files[0].name;

		// setUploadButtonText("Uploading...");

      // try {
      //    const profileImg = await uploadProfileImageToS3(file);
      //    const userData = {
      //       name,
      //       username,
      //       email,
      //       password,
      //       phone,
      //       profileImg,
      //    };
      //    registerUser(userData);
      //  } catch (error) {
      //    console.error('Error uploading profile image:', error);
      //    // Handle error
      //  }
     
		const userData = {
			name,
			username,
			email,
			password,
			phone,
			profileImg,
		};

		registerUser(userData);
	};

	return (
		<div className="md:h-screen bg-gradient-to-tr from-cyan-400 to-fuchsia-500">
			<div className="py-6 md:py-12 xl:py-20 px-5 md:px-10 lg:px-0 flex justify-center items-center">
				<div className="bg-white px-7 md:px-10 lg:px-16 py-14 rounded-xl w-full max-w-xl">
					<h2 className="text-2xl xl:text-4xl font-semibold text-center">
						Sign Up
					</h2>

					<form onSubmit={handleSignUp} className="mt-10 ">
						<div className="md:flex gap-8">
							<div className="mb-5 md:mb-8">
								<label
									htmlFor="First Name"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									First Name
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400">
										<FaUser size={15} />
									</div>
									<input
										type="text"
										name="firstName"
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full ps-10 p-2.5  "
										placeholder="John"
										required
									/>
								</div>
							</div>
							<div className="mb-5 md:mb-8">
								<label
									htmlFor="Last Name"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									Last Name
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400">
										<FaUser size={15} />
									</div>
									<input
										type="text"
										name="lastName"
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full ps-10 p-2.5  "
										placeholder="Doe"
										required
									/>
								</div>
							</div>
						</div>
						<div className="md:flex gap-5">
							<div className="mb-5 md:mb-8">
								<label
									htmlFor="Username"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									Username
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400">
										<FaUser size={15} />
									</div>
									<input
										type="text"
										name="username"
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full ps-10 p-2.5  "
										placeholder="johndoe"
										required
									/>
								</div>
							</div>
							<div className="mb-5 md:mb-8">
								<label
									htmlFor="email"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									Email
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400">
										<IoMail size={15} />
									</div>
									<input
										type="email"
										name="email"
										id="email-address-icon"
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full ps-10 p-2.5  "
										placeholder="example@email.com"
										required
									/>
								</div>
							</div>
						</div>
						<div className="md:flex gap-5">
							<div className="w-full mb-5">
								<label
									htmlFor="password"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									Password
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400">
										<IoIosLock size={15} />
									</div>
									<input
										type="password"
										name="password"
										id="password-icon"
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full ps-10 p-2.5  "
										placeholder="Type your password"
										required
									/>
								</div>
							</div>

							<div className="w-full mb-5">
								<label
									htmlFor="password"
									className="block font-medium text-gray-400 text-xs md:mb-2"
								>
									Phone
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400">
										<FaPhone size={15} />
									</div>
									<input
										type="phone"
										name="phone"
										id="phone-icon"
										className="bg-white border-b-2 border-gray-300 text-gray-600 focus:outline-none focus:border-b-gray-400 w-full ps-10 p-2.5  "
										placeholder="Type your phone"
									/>
								</div>
							</div>
						</div>

						{/* File input */}
						<div className="w-full">
							<div className="flex items-center border-b-2 border-gray-300 py-4">
								<input
									onChange={(e) => {
										const files = e.target.files;
										if (files && files.length > 0) {
											handleImageChange(files[0]);
										}
									}}
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

						{/* File input End */}

						<div className="text-right mt-1.5">
							<Link
								href="/"
								className="text-gray-400 text-sm hover:underline hover:text-blue-600 hover:font-medium duration-300"
							>
								Forgot Password?
							</Link>
						</div>
						<div className="mt-7">
							<button
								type="submit"
								className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400 rounded-full py-2 px-8 w-full text-lg font-semibold text-white transition-colors duration-500"
							>
								Sign Up
							</button>
						</div>

						<div className="text-center mt-10 space-y-3">
							<p>Already have an account?</p>
							<div className="outline outline-4 outline-gray-300 hover:outline-0 -outline-offset-4 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400 group p-1 flex justify-center items-center w-fit mx-auto rounded-full">
								<div className="w-full h-full bg-white rounded-full">
									<Link
										href="/login"
										className="rounded-full py-1 px-8 text-sm font-semibold transition-colors duration-500 "
									>
										Log in
									</Link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
