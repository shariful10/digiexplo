import Image from "next/image";
import React from "react";
import Container from "../Container";
import { LuUser2 } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";

const DesktopNav = () => {
	return (
		<div className="py-3 sticky top-0">
			<Container>
				<div className="flex justify-between items-center">
					<p>Search bar.......</p>
					<div className="flex items-center gap-4">
						<div className="relative">
							<IoMdCart className="text-2xl" />
							<div className="bg-primary rounded-full p-0.5 h-4 w-4 flex justify-center items-center text-white text-[10px] absolute -top-1 -right-1">
								0
							</div>
						</div>
						<button className="bg-primary py-2 px-5 rounded-lg font-semibold text-white">
							Became a Vendor
						</button>
						<button className="hover:bg-primary transition-all ease-in-out duration-700 py-2 px-5 rounded-lg font-semibold text-black hover:text-white flex items-center gap-2">
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
