import React from "react";
import Container from "../Container";
import ImageCard from "../ImageCard";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { FaRegFolder } from "react-icons/fa6";
import { AiOutlineTags } from "react-icons/ai";
import Tags from "../Tags";
import RightBar from "../RightBar";



const BlogContent = () => {
	return (
		<Container>
			<div className="grid md:grid-cols-3 gap-6 mb-5 md:mb-10">
				<div className="md:col-span-2">
					<ImageCard className="sm:grid-cols-2" />
				</div>
				{/* <div className="mt-10">
					<div className="flex items-center justify-between">
						<input
							type="search"
							className="rounded-lg text-textColor px-5 py-[13px] border-2 border-[#c2c7cc] focus:outline-none focus:border-primary placeholder:text-textColor w-[80%] lg:w-[88%]"
							placeholder="Search within the blog"
							name=""
							id=""
						/>
						<button className="bg-primary w-[18%] lg:w-[10%] py-[16px] rounded-lg flex justify-center">
							<IoMdSearch className="text-xl text-white" />
						</button>
					</div>
					<div className=" bg-secondary p-5 md:p-10 mt-5 rounded-2xl">
						<h3 className="flex justify-center items-center gap-2 text-base font-bold">
							<FaRegFolder className="text-xl" /> CATEGORIES
						</h3>
						<div className="flex flex-col gap-2 hover:text-primary mt-5">
							<Link href="">Classic Music (2)</Link>
							<Link href="">Music (1)</Link>
							<Link href="">Pop Music (2)</Link>
						</div>
					</div>
					<div className=" bg-secondary p-5 xl:p-10 mt-5 rounded-2xl">
						<h3 className="flex justify-center items-center gap-2 text-base font-bold">
							<AiOutlineTags className="text-xl" />
							BLOG TAGS
						</h3>
						<div className="mt-5 text-sm">
                     <Tags />
						</div>
					</div>
				</div> */}
            <RightBar />
			</div>
		</Container>
	);
};

export default BlogContent;
