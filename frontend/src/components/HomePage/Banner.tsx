import React from "react";

const Banner = () => {
	return (
		<div className="mt-10 mb-[60px] bg-gradient-to-b from-primary to-[#002562] px-5 py-14 md:px-20 md:py-28 rounded-2xl text-white">
			<h1 className="text-[40px] leading-[55px] md:text-[72px] font-bold md:w-[60%] md:leading-[82px]">
				Rejuvenate your innovative thoughts
			</h1>
			<p className="text-base md:text-lg my-5 md:w-1/2">
				Have the to of lose he least unmolested receive fixed is the of
				moving by we monstrous in holding you at its little you attempt.
			</p>
			<button className="bg-primary hover:bg-[#316dce] transition-all ease-in-out duration-500 font-medium text-white py-3 px-8 rounded-lg mt-5">
				Explore Now
			</button>
		</div>
	);
};

export default Banner;
