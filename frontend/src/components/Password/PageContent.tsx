"use client";
import InputField from "./InputField";

const PageContent = () => {
	return (
		<div className="p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-7xl w-full mx-auto">
			<h3 className="text-textColor text-[17px] font-semibold mb-5">
				Change your password
			</h3>
			<form>
				<InputField title={"Old Password"} name={"old-password"} />
				<InputField title={"New Password"} name={"new-password"} />
				<InputField title={"Confirm Password"} name={"confirm-password"} />
				<input
					type="submit"
					className="text-white bg-primary px-4 py-2.5 rounded-md cursor-pointer"
					value="Change Password"
				/>
			</form>
		</div>
	);
};

export default PageContent;
