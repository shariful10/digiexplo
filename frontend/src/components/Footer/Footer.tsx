import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import logo from "@/images/logo.webp";
import FooterCol from "./FooterCol";

const Footer = () => {
	return (
		<footer className="bg-[#EFF4F7] md:px-10">
			<Container>
				<div className="pt-20 pb-[60px]">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
						<div>
							<Link href="/" className="mb-5">
								<Image src={logo} className="w-[100px]" alt="logo" />
							</Link>
							<p>
								Monotonectally fabricate magnetic e-tailers via optimal
								processes. Appropriately initiate cross-media
								infrastructures and proactive interfaces.
							</p>
						</div>
						<FooterCol
							title="Categories"
							item1="Web Template"
							item2="HTML Template"
							item3="WordPress Theme"
							item4="Shopify Theme"
						/>
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
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
