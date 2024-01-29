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
				<div className=" w-full md:w-2/3 lg:w-[35%]">
					<input
						type="email"
						className="relative rounded-[12px] text-textColor px-5 py-[13px] border-2 border-[#c2c7cc] focus:outline-none focus:border-primary placeholder:text-textColor w-full"
						placeholder="Enter Email Address"
						name=""
						id=""
					/>
					<button className="bg-primary px-5 py-2 rounded-lg absolute bottom-[3.8rem] left-[250px] sm:left-[515px] md:left-[425px] lg:left-[310px] 2xl:left-[492px]">
						<GoArrowRight className="text-[17px] text-white" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SubscribeBanner;
