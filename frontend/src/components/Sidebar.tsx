"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Axios } from "@/lib/axios";
import logo from "@/images/logo.png";
import { useQuery } from "react-query";
import { CategoryType } from "./types";
import { useUser } from "./AuthProvider";
import { CgClose } from "react-icons/cg";
import { LuUser2 } from "react-icons/lu";
import Skeleton from "react-loading-skeleton";
import { usePathname } from "next/navigation";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ show, setShow }: Props) => {
  const pathName = usePathname();

  const handleVendorRequestBtn = () => {
    localStorage.setItem("vendorRequest", JSON.stringify(true));
  };

  const { data: categories = [], isLoading } = useQuery(
    ["categories"],
    async () => {
      try {
        const res = await Axios.get(`users/get-categories`);
        return res?.data?.data;
      } catch (error) {
        throw new Error("Failed to fetch category data");
      }
    }
  );

  const { user } = useUser();

  const categoryToUrl = (title: string) => {
    const splitUrl = title.split(" ");
    const url = splitUrl.join("-").toLowerCase();
    return url;
  };

  return (
    <div className="xl:w-[270px]">
      <div
        className={`fixed top-0 sidebar-shadow h-screen w-[270px] z-50 ${
          show
            ? "left-0 duration-500 bg-darkBlue text-white"
            : "-left-[300px] xl:left-0 duration-500 bg-white"
        }`}
      >
        <div className="px-[20px] md:px-[30px] py-[15px] md:py-[25px] flex justify-between">
          <Link href="/">
            <Image
              src={logo}
              className={`w-[70px] md:w-[100px] rounded-md  ${
                show ? "invert" : "invert-0"
              }`}
              alt="logo"
            />
          </Link>
          <CgClose
            className="xl:hidden"
            onClick={() => setShow(false)}
            size={24}
          />
        </div>
        <div className="my-[30px]">
          {isLoading ? (
            <div className="flex flex-col gap-4 px-10">
              <Skeleton className="mb-4" height={35} count={7 + 2} />
            </div>
          ) : (
            <div className="flex flex-col gap-y-1">
              <Link
                href="/"
                className={`px-10 cursor-pointer ${
                  pathName === "/" && "text-primary"
                } hover:text-primary capitalize text-lg font-medium`}
              >
                Home
              </Link>
              {categories.map(({ _id, title }: CategoryType) => (
                <ul key={_id} className="my-2">
                  <li
                    onClick={() => setShow(false)}
                    className={`px-10 cursor-pointer ${
                      pathName === `/category/${categoryToUrl(title)}` &&
                      "text-primary"
                    } hover:text-primary capitalize text-lg font-medium`}
                  >
                    <Link href={`/category/${categoryToUrl(title)}`}>
                      {title}
                    </Link>
                  </li>
                </ul>
              ))}
              <Link
                href="/blogs"
                className={`px-10 cursor-pointer ${
                  pathName === "/blogs" && "text-primary"
                } hover:text-primary capitalize text-lg font-medium`}
              >
                Blog
              </Link>
            </div>
          )}
        </div>
        {!user && user === null && (
          <div className="flex flex-col gap-2 mx-5 small:hidden">
            <Link
              href="/signup"
              onClick={() => {
                setShow(false), handleVendorRequestBtn();
              }}
            >
              <button className="bg-primary hover:bg-[#316dce] transition-all ease-in-out duration-500 py-2.5 px-5 rounded-md font-semibold text-white w-full">
                Become a Vendor
              </button>
            </Link>
            <Link href="/login" onClick={() => setShow(false)}>
              <button className="bg-primary hover:bg-[#316dce] transition-all ease-in-out duration-700 py-2 px-5 rounded-md font-semibold text-white flex justify-center items-center gap-2 w-full">
                <LuUser2 />
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
