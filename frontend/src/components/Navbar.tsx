"use client";
import logo from "@/images/logo.png";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import "react-loading-skeleton/dist/skeleton.css";
import { useUser } from "./AuthProvider";
import CartPage from "./CartPage";
import Container from "./Container";
import ProfileMenu from "./ProfileMenu";

interface Props {
  show: boolean;
  showCart: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ show, setShow, showCart, setShowCart }: Props) => {
  const { logoutUser } = auth;
  const [open, setOpen] = useState(false);

  const { user } = useUser();

  console.log(user);

  return (
    <div className="md:px-10 py-5 bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center gap-1">
            <input
              type="search"
              className="border border-textColor outline-none py-2 px-4 rounded-lg"
              placeholder="e.g popular product"
              name=""
              id=""
            />
            <button className="bg-primary text-white py-[10px] px-4 rounded-lg">
              <RiSearchLine size={20} />
            </button>
          </div>
          <Link href="/" className="md:hidden">
            <Image
              src={logo}
              className="w-[70px] rounded-md"
              alt="logo"
              width={70}
              height={70}
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              {/* <CartIcon setShowCart={setShowCart} user={user} /> */}
              {user?.profileImg ? (
                <div className="relative">
                  <Image
                    src={user?.profileImg}
                    width={40}
                    height={40}
                    onClick={() => setOpen(!open)}
                    className="rounded-full object-cover h-10 w-10 cursor-pointer border-2 border-primary"
                    alt="ProfileImage"
                  />
                  <ProfileMenu
                    open={open}
                    user={user}
                    setOpen={setOpen}
                    logoutUser={logoutUser}
                  />
                </div>
              ) : (
                <Link href="/login">
                  <button className="hidden hover:bg-primary transition-all ease-in-out duration-700 py-2 px-5 rounded-lg font-semibold text-black hover:text-white lg:flex items-center gap-2">
                    <LuUser2 />
                    Login
                  </button>
                </Link>
              )}
            </div>
            <div className="xl:hidden">
              {!show && (
                <RxHamburgerMenu onClick={() => setShow(true)} size={24} />
              )}
            </div>
          </div>
        </div>
      </Container>
      <CartPage showCart={showCart} setShowCart={setShowCart} user={user} />
    </div>
  );
};

export default Navbar;
