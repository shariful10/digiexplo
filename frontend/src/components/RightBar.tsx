import Tags from "./Tags";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa";
import { AiOutlineTags } from "react-icons/ai";

const RightBar = () => {
	return (
		<div className="mt-10">
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
		</div>
	);
};

export default RightBar;
