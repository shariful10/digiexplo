import React from "react";
import Container from "../Container";
import { LuUser2 } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

const DesktopNav = () => {
	return (
		<div className="py-3 sticky top-0">
			<Container>
				<div className="flex justify-between items-center">
					<div className="hidden md:flex items-center gap-2">
						<input
							type="search"
							className="border border-textColor outline-none py-2 px-4 rounded-lg"
							placeholder="e.g popular product"
							name=""
							id=""
						/>
						<button className="bg-primary text-white py-[10px] px-4 rounded-lg">
							<RiSearchLine size={20} />
						</button>
					</div>
					<div className="flex items-center gap-4">
						<div className="relative">
							<IoMdCart className="text-2xl" />
							<div className="bg-primary rounded-full p-0.5 h-4 w-4 flex justify-center items-center text-white text-[10px] absolute -top-1 -right-1">
								0
							</div>
						</div>
						<button className="hidden md:block bg-primary hover:bg-[#316dce] transition-all ease-in-out duration-500 py-2 px-5 rounded-lg font-semibold text-white">
							Became a Vendor
						</button>
						<button className="hidden hover:bg-primary transition-all ease-in-out duration-700 py-2 px-5 rounded-lg font-semibold text-black hover:text-white md:flex items-center gap-2">
							<LuUser2 />
							Login
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default DesktopNav;
