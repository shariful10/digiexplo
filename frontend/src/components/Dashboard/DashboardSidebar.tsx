"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import logo from "@/images/logo.webp";
import { LuUser2 } from "react-icons/lu";
import { VscHome } from "react-icons/vsc";
import { BsPersonGear } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { HiOutlineLogout } from "react-icons/hi";

const dashboardItems = [
	{
		id: 1,
		title: "User Profile",
		url: "/dashboard",
		Icon: LuUser2,
	},
   {
      id: 2,
      title: "Profile Settings",
      url: "/dashboard/profle-settings",
      Icon: BsPersonGear,
   },
	{
		id: 3,
		title: "My Product",
		url: "/dashboard/my-product",
		Icon: VscHome,
	},
];

const DashboardSidebar = () => {
	const pathName = usePathname();
   const { logoutUser } = useAuth();

	return (
		<div className="bg-blue-700 h-screen w-64 py-10 hidden md:flex flex-col justify-between">
			<div>
            <Link href="/" className="">
               <Image src={logo} className="w-[70%] rounded-md px-10" alt="logo" />
            </Link>
            <div className="flex flex-col gap-2 mt-10 px-5">
               {dashboardItems.map(({ id, title, url, Icon }) => (
                  <Link
                     href={url}
                     key={id}
                     className={`flex items-center gap-2 hover:bg-white hover:text-primary py-2 px-5 w-full rounded-md ${
                        pathName === url ?
                        "bg-white text-primary py-2 px-5 w-full rounded-md" : "text-white"
                     }`}
                  >
                     <Icon className="text-xl" />
                     <span className="">{title}</span>
                  </Link>
               ))}
            </div>
         </div>
         <div>
            <div className="px-5">
               <hr />
            </div>
            <div className="flex flex-col gap-2 mt-5 px-5">
               <Link
                  href="/"
                  className="flex items-center gap-2 text-white hover:bg-white hover:text-blue-700 py-2 px-5 w-full rounded-md"
               >
                  <VscHome className="text-xl" />
                  <span className="">Home</span>
               </Link>
               <Link href="/">
                  <button
                     onClick={logoutUser}
                     className="flex items-center gap-2 text-white hover:bg-white hover:text-blue-700 py-2 px-5 w-full rounded-md"
                  >
                     <HiOutlineLogout className="text-xl" />
                     <span className="">Logout</span>
                  </button>
               </Link>
            </div>
         </div>
		</div>
	);
};

export default DashboardSidebar;