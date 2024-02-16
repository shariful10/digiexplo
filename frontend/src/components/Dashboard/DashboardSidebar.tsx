"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.webp";
import { GoGear } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { VscHome } from "react-icons/vsc";
import { BsPersonGear } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { HiOutlineLogout } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoLockOpenOutline } from "react-icons/io5";

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
  {
    id: 3,
    title: "Message to Admin",
    url: "/dashboard/send-message",
    Icon: FaTelegramPlane,
  },
];

const dashboardVendorItems = [
  {
    id: 1,
    title: "My Profile",
    url: "/dashboard",
    Icon: LuUser2,
  },
  {
    id: 2,
    title: "Add Product",
    url: "/dashboard/add-product",
    Icon: IoMdAddCircleOutline,
  },
  {
    id: 3,
    title: "Change Password",
    url: "/dashboard/my-order-items",
    Icon: IoLockOpenOutline,
  },
];

const DashboardSidebar = () => {
  const pathName = usePathname();
  const user = { role: "User" };

  return (
    <div className="w-64">
      <div className="fixed top-0 bg-sidebar  h-screen w-64 py-10 hidden z-20 md:flex flex-col justify-between">
        <div>
          <div className="text-center">
            <Link href="/" className="text-4xl font-bold  text-white">
              Digi<span className="text-primary">Ex</span>plore
            </Link>
          </div>
          {/* <Link href="/" className="">
            <Image src={logo} className="w-[70%] rounded-md px-10" alt="logo" />
          </Link> */}
          {user?.role === "User" ? (
            <div className="flex flex-col gap-2 mt-14">
              {dashboardUserItems.map(({ id, title, url, Icon }) => (
                <Link
                  href={url}
                  key={id}
                  className={`flex items-center gap-2 hover:text-primary py-2 w-full duration-300 ${
                    pathName === url
                      ? "bg-[#53535f] text-[#f5f5f5] py-2 w-full"
                      : "text-[#9a9cae]"
                  } px-10`}
                >
                  <Icon className="text-xl" />
                  <span className="">{title}</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-14">
              {dashboardVendorItems.map(({ id, title, url, Icon }) => (
                <Link
                  href={url}
                  key={id}
                  className={`flex items-center gap-2 hover:text-primary py-2 w-full duration-300 ${
                    pathName === url
                      ? "bg-[#53535f] text-[#f5f5f5] py-2 w-full"
                      : "text-[#9a9cae]"
                  } px-10`}
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
              className="flex items-center gap-2 text-[#9a9cae] hover:text-primary py-2 px-5 w-full duration-300"
            >
              <VscHome className="text-xl" />
              <span className="">Home</span>
            </Link>
            <Link href="/">
              <button
                // onClick={logoutUser}
                className="flex items-center gap-2 text-[#9a9cae] hover:text-primary py-2 px-5 w-full duration-300"
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
