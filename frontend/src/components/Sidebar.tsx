"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import { CgClose } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { MdOutlineQueueMusic } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";

export const items = [
	{
		id: "1",
		title: "home",
		url: "/",
	},
	{
		id: "2",
		title: "graphics",
		url: "/graphics",
	},
	{
		id: "3",
		title: "photos",
		url: "/photos",
	},
	{
		id: "4",
		title: "video",
		url: "/video",
	},
	{
		id: "5",
		title: "audio",
		url: "/audio",
	},
	{
		id: "6",
		title: "blogs",
		url: "/blogs",
	},
];

interface Props {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ show, setShow }: Props) => {
	const pathName = usePathname();

  return (
    <div className="md:w-[270px]">
      <div
        className={`fixed top-0 sidebar-shadow h-screen w-[270px] z-50 ${
          show
            ? "left-0 duration-500 bg-darkBlue text-white"
            : "-left-[300px] md:left-0 duration-500 bg-white"
        }`}
      >
        <div className="px-[20px] md:px-[30px] py-[15px] md:py-[25px] flex justify-between">
          <Link href="/">
            <Image
              src={logo}
              className="w-[70px] md:w-[100px] rounded-md"
              alt="logo"
            />
          </Link>
          <CgClose
            className="md:hidden"
            onClick={() => setShow(false)}
            size={24}
          />
        </div>
        <div className="my-[30px]">
          <div className="">
            {items.map(({ id, title, url }) => (
              <ul key={id}>
                <li
                  onClick={() => setShow(false)}
                  className={`px-5 py-[13px] cursor-pointer ${
                    pathName === url && "text-primary"
                  } hover:text-primary capitalize text-lg font-medium`}
                >
                  <Link href={`${url ? url : ""}`}>{title}</Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mx-5 small:hidden">
          <Link href="#" onClick={() => setShow(false)}>
            <button className="bg-primary hover:bg-[#316dce] transition-all ease-in-out duration-500 py-2.5 px-5 rounded-md font-semibold text-white w-full">
              Became a Vendor
            </button>
          </Link>
          <Link href="/login" onClick={() => setShow(false)}>
            <button className="bg-primary hover:bg-[#316dce] transition-all ease-in-out duration-700 py-2 px-5 rounded-md font-semibold text-white flex justify-center items-center gap-2 w-full">
              <LuUser2 />
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
