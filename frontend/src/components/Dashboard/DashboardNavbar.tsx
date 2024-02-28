import React from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import logo from "@/images/logo-white.png";
import { RxHamburgerMenu } from "react-icons/rx";

interface DashboardNavbarProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardNavbar = ({ open, setOpen }: DashboardNavbarProps) => {
	return (
		<div className="flex justify-between items-center lg:hidden bg-[#2D3748] py-2 px-5">
			<Image src={logo} className="h-14 w-14" alt="Logo" />
			<span onClick={() => setOpen(!open)} className="text-white">
				{open ? <IoClose size={28} /> : <RxHamburgerMenu size={28} />}
			</span>
		</div>
	);
};

export default DashboardNavbar;
