import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
	return (
		<div>
			<DesktopNav />
         <MobileNav />
		</div>
	);
};

export default Navbar;
