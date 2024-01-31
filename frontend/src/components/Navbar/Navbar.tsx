"use client"
import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
   const [show, setShow] = useState<boolean>(false);

	return (
		<div className="relative">
			<DesktopNav show={show} setShow={setShow!} />
			{show && (
				<MobileNav
					className={`${
						show ? "left-0 duration-1000 transition-all ease-in-out" : "-left-[400px] duration-1000 transition-all ease-in-out"
					}`}
				/>
			)}
		</div>
	);
};

export default Navbar;
