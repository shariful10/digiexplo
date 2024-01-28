import React from "react";
import Image from "next/image";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";
import ImageCard from "../ImageCard";

const FeaturedItems = () => {
	return (
		<div className="mt-10 mb-11">
			<SectionTitle title="Featured" subtitle="Items" />
			<SectionDesc description="These Items are Extraordinary" />
         <ImageCard />
		</div>
	);
};

export default FeaturedItems;
