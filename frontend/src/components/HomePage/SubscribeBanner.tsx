import React from "react";
import { GoArrowRight } from "react-icons/go";

const SubscribeBanner = () => {
	return (
		<div className="bg-gradient-to-r from-[#2B32AB] to-primary px-5 md:px-[60px] py-[50px] rounded-2xl">
			<div className="text-center">
				<h1 className="text-3xl md:text-[48px] md:leading-[65px] font-semibold text-white">
					Subscribe and Be Updated
				</h1>
				<p className="text-base md:text-lg text-white my-5">
					We Don’t send spam email. No need to worried about that.
				</p>
				<div className="w-full md:w-2/3 lg:w-[35%] relative rounded-[12px] text-textColor px-5 py-[14px] border-2 border-[#c2c7cc] focus:outline-none focus:border-primary placeholder:text-textColor bg-white flex items-center mx-auto">
					<input
						name="email"
						type="email"
						className="w-full bg-transparent focus:outline-none"
						placeholder="Enter Email Address"
					/>
					<button className="bg-primary px-5 py-2.5 rounded-lg absolute right-5">
						<GoArrowRight className="text-[17px] text-white" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SubscribeBanner;
