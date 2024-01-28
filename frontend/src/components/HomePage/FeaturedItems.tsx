import React from "react";
import Image from "next/image";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";

const images = [
	{
		id: 1,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
	},
	{
		id: 2,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
	},
	{
		id: 3,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
	},
	{
		id: 4,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
	},
	{
		id: 5,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
	},
	{
		id: 6,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
	},
	{
		id: 7,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
	},
	{
		id: 8,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
	},
];

const FeaturedItems = () => {
	return (
		<div className="mt-10 mb-11">
			<SectionTitle title="Featured" subtitle="Items" />
			<SectionDesc description="These Items are Extraordinary" />
			<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{images.map(({ id, image }) => (
					<div key={id} className="cursor-pointer">
						<Image
							src={image}
							width={500}
							height={500}
							className="rounded-2xl"
							alt="image"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturedItems;
