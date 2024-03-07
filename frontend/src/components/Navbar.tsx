"use client";
import { useGetApprovedProducts } from "@/lib/getProducts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import "react-loading-skeleton/dist/skeleton.css";
import { useUser } from "./AuthProvider";
import CartPage from "./CartPage";
import Container from "./Container";
import ProfileMenu from "./ProfileMenu";
import SearchInput from "./SearchInput";
import { IProduct } from "./types";
import { auth } from "@/lib/auth";
import Image from "next/image";
import logo from "@/images/logo.png";
import FormattedPrice from "./FormattedPrice";

interface Props {
  show: boolean;
  showCart: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  setListShown: React.Dispatch<React.SetStateAction<boolean>>;
  listShown: boolean;
}

const Navbar = ({
  show,
  setShow,
  showCart,
  setShowCart,
  listShown,
  setListShown,
}: Props) => {
  const { logoutUser } = auth;
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<IProduct[]>([]);
  const { data: products = [], isLoading } = useGetApprovedProducts();

  const { user } = useUser();

  useEffect(() => {
    if (search) {
      const filtered = products.filter((item) =>
        item.productName.toLowerCase().includes(search.toLowerCase())
      );

      setItems(filtered);
    } else {
      setItems([]);
    }
  }, [search]);

  return (
    <div className="md:px-10 py-5 bg-white">
      <Container>
        <div className="flex justify-between items-center">
          {/* <div className="hidden md:flex items-center gap-1">
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
          </div> */}

          {/* New sidebar */}
          <div className="flex flex-col gap-4 relative w-full search-list">
            <SearchInput setSearch={setSearch} setListShown={setListShown} />
            {/* searched items */}
            {items.length > 0 && listShown && (
              <ul className="absolute top-12 bg-white z-50 max-w-lg w-full shadow-md rounded-md">
                {items.map((item, index) => (
                  <li key={index} className="hover:bg-secondary">
                    <Link
                      href={`/product/${item._id}`}
                      onClick={() => setListShown(false)}
                    >
                      <div className="flex justify-between py-5 items-center px-8">
                        <div className="flex gap-4 items-center justify-between w-full">
                          <Image
                            className="rounded h-[100px] w-[100px] object-cover border-2 border-gray-400"
                            src={item.thumbnail}
                            width={100}
                            height={100}
                            alt={item.productName}
                          />
                          <div className="flex justify-between w-full">
                            <div className="flex flex-col">
                              <h4 className="text-lg font-semibold">
                                {item.productName}
                              </h4>
                              <p className="text-sm">
                                {item?.vendor?.ownerName}
                              </p>
                            </div>
                            <h4 className="font-semibold text-right text-primary">
                              <FormattedPrice amount={item?.price} />
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {/* searched items End*/}
          </div>
          {/* New sidebar End */}

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
            <div className="xl:hidden cursor-pointer">
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
