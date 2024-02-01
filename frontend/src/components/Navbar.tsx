"use client";
import Link from "next/link";
import Image from "next/image";
import CartPage from "./CartPage";
import Container from "./Container";
import logo from "@/images/logo.webp";
import { LuUser2 } from "react-icons/lu";
import { IoMdCart } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
	show: boolean;
	showCart: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ show, setShow, showCart, setShowCart }: Props) => {
	return (
		<div className="md:px-10 py-3 bg-white">
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
						/>
					</Link>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-4">
							<div
								onClick={() => setShowCart(true)}
								className="relative cursor-pointer"
							>
								<IoMdCart className="text-2xl" />
								<div className="bg-primary rounded-full p-0.5 h-4 w-4 flex justify-center items-center text-white text-[10px] absolute -top-1 -right-1">
									0
								</div>
							</div>
							<button className="hidden md:block bg-primary hover:bg-[#316dce] transition-all ease-in-out duration-500 py-2 px-5 rounded-lg font-semibold text-white">
								Became a Vendor
							</button>
							<Link href="/login">
                        <button className="hidden hover:bg-primary transition-all ease-in-out duration-700 py-2 px-5 rounded-lg font-semibold text-black hover:text-white md:flex items-center gap-2">
                           <LuUser2 />
                           Login
                        </button>
                     </Link>
						</div>
						<div className="md:hidden">
							{!show && (
								<RxHamburgerMenu
									onClick={() => setShow(true)}
									size={24}
								/>
							)}
						</div>
					</div>
				</div>
			</Container>
			<CartPage showCart={showCart} setShowCart={setShowCart} />
		</div>
	);
};

export default Navbar;
