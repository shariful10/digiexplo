import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import logo from "@/images/logo.png";
import FooterCol from "./FooterCol";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-[#EFF4F7] md:px-10">
			<Container>
				<div className="pt-20 pb-[60px]">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
						<div>
							<Link href="/" className="mb-5">
								<Image src={logo} className="w-[60px]" alt="logo" />
							</Link>
							<p className="mt-5">
								Monotonectally fabricate magnetic e-tailers via optimal
								processes. Appropriately initiate cross-media
								infrastructures and proactive interfaces.
							</p>
						</div>
						<FooterCol
							title="Company"
							item1="About Us"
							item2="Blog"
							item3="Author List"
							item4="Hiring Now"
						/>
						<FooterCol
							title="Help & legal"
							item1="Contact"
							item2="Support"
							item3="Terms & Condition"
							item4="Privacy Policy"
						/>
						<div className="flex flex-col gap-6">
							<div className="">
								<h4 className="text-2xl font-semibold mb-5">
									Want to contribute?
								</h4>
								<Link href="/vendor-request">
									<button className="bg-primary hover:bg-[#316dce] transition-all ease-in-out duration-500 py-2 px-5 rounded-lg font-semibold text-white">
										Became a Vendor
									</button>
								</Link>
							</div>
							<div className="">
								<h4 className="text-2xl font-semibold mb-5">
									Follow us on
								</h4>
								<div className="flex items-center gap-4">
									<Link href="#">
										<FaSquareFacebook className="text-2xl hover:text-primary duration-300" />
									</Link>
									<Link href="#">
										<FaSquareXTwitter className="text-2xl hover:text-primary duration-300" />
									</Link>
									<Link href="#">
										<RiInstagramFill className="text-[26px] hover:text-primary duration-300" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
