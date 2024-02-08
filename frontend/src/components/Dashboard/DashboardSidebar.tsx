"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import logo from "@/images/logo.webp";
import { GoGear } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { VscHome } from "react-icons/vsc";
import { BsPersonGear } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";

const dashboardUserItems = [
   {
      id: 1,
      title: "My Order Items",
      url: "/dashboard/my-order-items",
      Icon: MdOutlineShoppingCart,
   },
	{
		id: 2,
		title: "Change Password",
		url: "/dashboard/change-password",
		Icon: GoGear,
	},
];

const dashboardVendorItems = [
  {
    id: 1,
    title: "Vendor Profile",
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
    title: "My Order Items",
    url: "/dashboard/my-order-items",
    Icon: VscHome,
  },
];

const DashboardSidebar = () => {
  const pathName = usePathname();
  const { user, logoutUser } = useAuth();

  return (
    <div className="w-64">
      <div className="fixed top-0 bg-sidebar  h-screen w-64 py-10 hidden z-20 md:flex flex-col justify-between">
        <div>
          <Link href="/" className="">
            <Image src={logo} className="w-[70%] rounded-md px-10" alt="logo" />
          </Link>
          {user?.role === "User" && (
            <div className="flex flex-col gap-2 mt-10">
              {dashboardUserItems.map(({ id, title, url, Icon }) => (
                <Link
                  href={url}
                  key={id}
                  className={`flex items-center gap-2 hover:text-[#f5f5f5] py-2 px-5 w-full ${
                    pathName === url
                      ? "bg-[#53535f] text-[#f5f5f5] py-2 px-5 w-full"
                      : "text-[#9a9cae]"
                  }`}
                >
                  <Icon className="text-xl" />
                  <span className="">{title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="px-5">
            <hr />
          </div>
          <div className="flex flex-col gap-2 mt-5 px-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#9a9cae] hover:text-[#f5f5f5] py-2 px-5 w-full"
            >
              <VscHome className="text-xl" />
              <span className="">Home</span>
            </Link>
            <Link href="/">
              <button
                onClick={logoutUser}
                className="flex items-center gap-2 text-[#9a9cae] hover:text-[#f5f5f5] py-2 px-5 w-full"
              >
                <HiOutlineLogout className="text-xl" />
                <span className="">Logout</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
