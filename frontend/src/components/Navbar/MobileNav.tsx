import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.webp";

const MobileNav = ({ className }: { className: string }) => {
	return (
		<div className={`md:hidden absolute top-0 w-[70%] h-[100vh] bg-[#140F44] z-50 ${className}`}>
			<div className="px-[30px] py-[25px]">
            <Link href="/">
               <Image src={logo} className="w-[80px]" alt="logo" />
            </Link>
         </div>
		</div>
	);
};

export default MobileNav;
