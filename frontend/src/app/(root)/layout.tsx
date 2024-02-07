"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [show, setShow] = useState<boolean>(false);
	const [showCart, setShowCart] = useState<boolean>(false);

	return (
		<div className={`flex`}>
			<div>
				<Sidebar show={show} setShow={setShow} />
			</div>
			<div className={`relative bg-white`}>
				<Navbar
					show={show}
					setShow={setShow}
					showCart={showCart}
					setShowCart={setShowCart}
				/>
				<div
					className={`bg-[#FEFFFF] md:px-10 ${
						showCart && "overflow-hidden"
					}`}
				>
					{children}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
