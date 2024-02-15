import React from "react";
import { aboutData } from "@/components/data";
import SectionTopBanner from "@/components/SectionTopBanner";

const AboutUsPage = () => {
	return (
		<div className="md:w-5/6 mx-auto px-5 md:px-10">
			<SectionTopBanner
				href="/about-us"
				heading="About Us"
				subHeading="About Us"
			/>
			<div className="">
				{aboutData.map(({ id, desc }) => (
					<p key={id} className="text-base text-descColor mb-5 text-justify">
						{desc}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutUsPage;
