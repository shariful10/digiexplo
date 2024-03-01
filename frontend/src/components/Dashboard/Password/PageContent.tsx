"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Axios } from "@/lib/axios";
import InputField from "./InputField";
import { BASE_URL } from "@/components/helper";
import { TbFidgetSpinner } from "react-icons/tb";

const PageContent = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleChangePassword = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		const formData = new FormData();

		const form = e.target;
		const oldPassword = form.oldPassword.value;
		const newPassword = form.newPassword.value;
		const confirmNewPassword = form.confirmNewPassword.value;

		formData.append("oldPassword", oldPassword);
		formData.append("newPassword", newPassword);
		formData.append("confirmNewPassword", confirmNewPassword);

		try {
			const response = await Axios.put(
				`${BASE_URL}/auth/change-password`,
				formData
			);

			const data = await response.data;

			if (data && data.success) {
				toast.success(data.message);
				setIsLoading(false);
				form.reset();
			} else {
				toast.error(data.errorMessage, { duration: 5000 });
			}
		} catch (error: any) {
			console.error("Error registering user:", error.response.data);
			if (error.response.data.message === "Mongoose Validation failure") {
				toast.error(error.response.data.errorDetails.message, {
					duration: 5000,
				});
				setIsLoading(false);
			} else {
				toast.error(error.response.data.message, { duration: 5000 });
				setIsLoading(false);
			}
		}
	};

	return (
		<div className="p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-lg w-full">
			<h3 className="text-textColor text-[17px] font-semibold mb-5">
				Change your password
			</h3>
			<form onSubmit={handleChangePassword}>
				<InputField title={"Old Password"} name={"oldPassword"} />
				<InputField title={"New Password"} name={"newPassword"} />
				<InputField title={"Confirm Password"} name={"confirmNewPassword"} />
				<div className="text-right">
					<button
						type="submit"
						className="text-white bg-primary px-10 py-2.5 rounded-md cursor-pointer uppercase"
					>
						{isLoading ? (
							<TbFidgetSpinner className="animate-spin mx-auto" size={28} />
						) : (
							"UPDATE"
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default PageContent;
