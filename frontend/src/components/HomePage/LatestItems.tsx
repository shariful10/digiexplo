import React from "react";
import SectionTitle from "../SectionTitle";
import SectionDesc from "../SectionDesc";
import ImageCard from "../ImageCard";
import Tabs from "../Tabs";
import { products } from "../data";

const LatestItems = () => {
	return (
		<div className="my-16">
			<SectionTitle title="Latest" subtitle="Items" />
			<SectionDesc description="Browse All Latest Charms" />
			<Tabs />
			<div className={`mt-10 grid md:grid-cols-2 gap-6`}>
				{products
					.map((product) => (
						<ImageCard key={product.id} product={product} />
					))
					.slice(8, 16)}
			</div>
		</div>
	);
};

export default LatestItems;
