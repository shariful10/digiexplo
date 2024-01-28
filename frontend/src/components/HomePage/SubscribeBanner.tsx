import React from "react";
import { GoArrowRight } from "react-icons/go";

const SubscribeBanner = () => {
	return (
		<div className="relative bg-gradient-to-r from-[#2B32AB] to-primary px-5 md:px-[60px] py-[50px] rounded-2xl">
			<div className=""></div>
         <div className="">
				<h1 className="text-3xl md:text-[48px] md:leading-[65px] font-semibold text-white md:w-[25%]">
					Subscribe and Be Updated
				</h1>
				<p className="text-base md:text-lg text-white my-5">
					We Don’t send spam email. No need to worried about that.
				</p>
				<div className="relative w-full md:w-[35%]">
					<input
						type="email"
						className="rounded-[12px] text-textColor px-5 py-[13px] border-2 border-[#c2c7cc] focus:outline-none focus:border-primary placeholder:text-textColor w-full"
						placeholder="Enter Email Address"
						name=""
						id=""
					/>
					<button className="bg-primary px-5 py-2 rounded-lg absolute top-[10px] left-[227px] md:left-[432px]">
						<GoArrowRight className="text-[17px] text-white" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SubscribeBanner;
