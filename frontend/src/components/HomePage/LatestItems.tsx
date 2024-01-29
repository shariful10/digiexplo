import React from "react";
import SectionTitle from "../SectionTitle";
import SectionDesc from "../SectionDesc";
import ImageCard from "../ImageCard";
import Tabs from "../Tabs";


const LatestItems = () => {
	return (
		<div className="mt-10 mb-12">
			<SectionTitle title="Latest" subtitle="Items" />
			<SectionDesc description="Browse All Latest Charms" />
			<Tabs />
         <ImageCard />
		</div>
	);
};

export default LatestItems;
