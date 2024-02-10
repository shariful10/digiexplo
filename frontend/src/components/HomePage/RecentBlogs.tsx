import React from "react";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const blogs = [
	{
		id: 1,
		title: "Back sleep that back for our girl I but rather",
		desc: "In for display, free for she my century employed are her be of problem. Does been the of one. Own live their location greater, parents’. Carpeting me a look was. Picture be their the project it and made go you’d much of being spot. Everyone the above to report that.",
		bg_img:
			"https://mayosis.themepreview.xyz/mayovendor/wp-content/uploads/sites/16/2020/06/pexels-brayden-law-1738986.jpg",
		author: "Ella Gross",
		category: "Classic Music, Pop Music",
	},
	{
		id: 2,
		title: "Know point startup reached concise.",
		desc: "In for display, free for she my century employed are her be of problem. Does been the of one. Own live their location greater, parents’. Carpeting me a look was. Picture be their the project it and made go you’d much of being spot. Everyone the above to report that.",
		bg_img:
			"https://mayosis.themepreview.xyz/mayovendor/wp-content/uploads/sites/16/2020/06/pexels-brayden-law-1738986.jpg",
		author: "Ella Gross",
		category: "Classic Music",
	},
	{
		id: 3,
		title: "The were their small the has the samples",
		desc: "In for display, free for she my century employed are her be of problem. Does been the of one. Own live their location greater, parents’. Carpeting me a look was. Picture be their the project it and made go you’d much of being spot. Everyone the above to report that.",
		bg_img:
			"https://mayosis.themepreview.xyz/mayovendor/wp-content/uploads/sites/16/2020/06/pexels-brayden-law-1738986.jpg",
		author: "Ella Gross",
		category: "Pop Music",
	},
	{
		id: 4,
		title: "His it’s the din the opinion epic.",
		desc: "In for display, free for she my century employed are her be of problem. Does been the of one. Own live their location greater, parents’. Carpeting me a look was. Picture be their the project it and made go you’d much of being spot. Everyone the above to report that.",
		bg_img:
			"https://mayosis.themepreview.xyz/mayovendor/wp-content/uploads/sites/16/2020/06/pexels-brayden-law-1738986.jpg",
		author: "Ella Gross",
		category: "Music",
	},
];

const RecentBlogs = () => {
	return (
		<div className="mt-10 mb-12">
			<SectionTitle title="Recent" subtitle="Blogs" />
			<SectionDesc description="Be Connected with Us By Read these article" />
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
				{blogs.map(({ id, title, desc, author, category, bg_img }) => (
					<div
						key={id}
						className="rounded-2xl bg-gray-100 flex flex-col justify-between items-start relative "
					>
						<Image
							src={bg_img}
							alt={title}
							width={500}
							height={500}
							className="w-full h-full bg-cover absolute top-0 rounded-[18px]"
						/>
						<div className="p-5 md:p-10 z-20 bg-gray-100 hover:bg-gradient-to-b from-gray-900 to hover:bg-orange-500 hover:bg-opacity-40 hover:text-white w-full h-full text-black group rounded-2xl flex flex-col justify-between">
							<div className="mb-5 flex flex-col justify-between">
								<h2 className="text-2xl ">{title}</h2>
								<p className="mt-3 mb-5 text-textColor group-hover:text-white">
									by <span className="font-medium">{author}</span> in
									<span className="font-medium">{category}</span>
								</p>
								<p className="">{desc.slice(0, 100)}...</p>
							</div>
							<Link
								href={`/blogs/${id}`}
								className="flex items-center gap-[2px] group-hover:gap-6 group-hover:duration-300"
							>
								Read More <FaAngleRight />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentBlogs;
