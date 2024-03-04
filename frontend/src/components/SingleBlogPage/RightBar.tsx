import { tags } from "@/components/data";
import Link from "next/link";
import { FaRegFolder } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Tags from "../Tags";

const RightBar = () => {
	return (
		<div className="mt-10">
			<div className="flex items-center justify-between">
				<input
					type="search"
					className="rounded-lg text-textColor px-5 py-[13px] border-2 border-[#c2c7cc] focus:outline-none focus:border-primary placeholder:text-textColor w-[78%] sm:w-[88%] lg:w-[82%]"
					placeholder="Search within the blog"
					name=""
					id=""
				/>
				<div className="w-[20%] sm:w-[10%] lg:w-[16%]">
        <button className="bg-primary w-full py-[16px] rounded-lg flex justify-center">
					<IoMdSearch className="text-xl text-white" />
				</button>
        </div>
			</div>
			<div className=" bg-secondary px-5 py-8 md:p-10 mt-5 rounded-2xl">
				<h3 className="flex lg:justify-center items-center gap-2 text-base font-bold">
					<FaRegFolder className="text-xl" /> CATEGORIES
				</h3>
				<div className="flex flex-col gap-2">
					<Link className="hover:text-primary mt-5" href="">
						Classic Music (2)
					</Link>
					<Link className="hover:text-primary mt-5" href="">
						Music (1)
					</Link>
					<Link className="hover:text-primary mt-5" href="">
						Pop Music (2)
					</Link>
				</div>
			</div>
			<div className="mt-5 rounded-2xl">
				<Tags tags={tags.slice(45, 65)} title={"Blog Tags"} bg={true} />
			</div>
		</div>
	);
};

export default RightBar;
