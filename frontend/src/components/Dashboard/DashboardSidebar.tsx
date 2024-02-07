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

const dashboardUserItems = [
  {
    id: 1,
    title: "User Profile",
    url: "/dashboard",
    Icon: LuUser2,
  },
  {
    id: 2,
    title: "My Order Items",
    url: "/dashboard/my-order-items",
    Icon: VscHome,
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
    <div className="w-56 lg:w-64 hidden lg:block">
      <div className="fixed top-0 bottom-0 bg-blue-700  h-screen w-56 lg:w-64 py-10 z-20 flex flex-col justify-between">
        <div>
          <Link href="/" className="">
            <Image src={logo} className="w-[70%] rounded-md px-10" alt="logo" />
          </Link>
          {user?.role === "User" && (
            <div className="flex flex-col gap-2 mt-10 px-5">
              {dashboardUserItems.map(({ id, title, url, Icon }) => (
                <Link
                  href={url}
                  key={id}
                  className={`flex items-center gap-2 hover:bg-white hover:text-primary py-2 px-5 w-full rounded-md ${
                    pathName === url
                      ? "bg-white text-primary py-2 px-5 w-full rounded-md"
                      : "text-white"
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
    </div>
  );
};

export default DashboardSidebar;
