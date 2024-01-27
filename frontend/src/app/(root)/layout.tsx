import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex gap-10">
			<Sidebar />
			<div className="w-full bg-[#FEFFFF]">
				<Navbar />
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
