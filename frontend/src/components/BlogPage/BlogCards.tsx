import React from "react";
import { FaAngleRight } from "react-icons/fa";

const blogs = [
	{
		id: 1,
		title: "Back sleep that back for our girl I but rather",
		desc: "Contrast, should little and the hard the Mr. Diesel so warned and who to earnestly be any...",
		bg_img:
			"https://mayosis.themepreview.xyz/mayovendor/wp-content/uploads/sites/16/2020/06/pexels-brayden-law-1738986.jpg",
		author: "Ella Gross",
		category: "Classic Music, Pop Music",
	},
	{
		id: 2,
		title: "Know point startup reached concise.",
		desc: "Contrast, should little and the hard the Mr. Diesel so warned and who to earnestly be any...",
		bg_img:
			"https://mayosis.themepreview.xyz/mayovendor/wp-content/uploads/sites/16/2020/06/pexels-brayden-law-1738986.jpg",
		author: "Ella Gross",
		category: "Classic Music",
	},
	{
		id: 3,
		title: "The were their small the has the samples",
		desc: "Contrast, should little and the hard the Mr. Diesel so warned and who to earnestly be any...",
		bg_img:
			"https://mayosis.themepreview.xyz/mayovendor/wp-content/uploads/sites/16/2020/06/pexels-brayden-law-1738986.jpg",
		author: "Ella Gross",
		category: "Pop Music",
	},
	{
		id: 4,
		title: "His it’s the din the opinion epic.",
		desc: "Contrast, should little and the hard the Mr. Diesel so warned and who to earnestly be any...",
		bg_img:
			"https://mayosis.themepreview.xyz/mayovendor/wp-content/uploads/sites/16/2020/06/pexels-brayden-law-1738986.jpg",
		author: "Ella Gross",
		category: "Music",
	},
];

const BlogCards = () => {
	return (
		<>
			{blogs.map(({ id, title, desc, author, category, bg_img }) => (
				<div
					key={id}
					className="p-5 md:p-10 rounded-2xl bg-gray-100 flex flex-col justify-between items-start"
				>
					<div className="mb-5 flex flex-col justify-between">
						<h2 className="text-2xl text-black">{title}</h2>
						<p className="mt-3 mb-5 text-descColor">
							by <span className="font-medium">{author}</span> in{" "}
							<span className="font-medium">{category}</span>
						</p>
						<p className="text-black">{desc}</p>
					</div>
					<button className="hover:text-primary duration-500 transition-all ease-in-out flex items-center gap-[2px] hover:gap-2">
						Read More <FaAngleRight />
					</button>
				</div>
			))}
		</>
	);
};

export default BlogCards;
