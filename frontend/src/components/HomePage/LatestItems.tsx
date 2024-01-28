import React from "react";
import SectionTitle from "../SectionTitle";
import SectionDesc from "../SectionDesc";
import ImageCard from "../ImageCard";

const items = [
	{
		id: "1",
		title: "all",
	},
	{
		id: "2",
		title: "graphics",
	},
	{
		id: "3",
		title: "photography",
	},
	{
		id: "4",
		title: "video",
	},
	{
		id: "5",
		title: "audio",
	},
];

const LatestItems = () => {
	return (
		<div className="mt-10 mb-12">
			<SectionTitle title="Latest" subtitle="Items" />
			<SectionDesc description="Browse All Latest Charms" />
			<div className="mt-5 flex justify-center gap-6">
				{items.map(({ id, title }) => (
					<button
						key={id}
						className="hover:text-white capitalize bg-gray-100 hover:bg-primary duration-300 transition-all ease-in-out py-3 px-4 rounded-lg"
					>
						{title}
					</button>
				))}
			</div>
         <ImageCard />
		</div>
	);
};

export default LatestItems;
