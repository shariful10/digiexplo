"use client";

import React from "react";
import Table from "./Table";
import { useUser } from "../Context/UserContext";
import VendorProfile from "./Vendor/VendorProfile";
import AllVendorRequest from "./Admin/AllVendorRequest";

const DashboardHome = () => {
	const { user } = useUser();

	return (
		<div>
			{user?.role === "User" ? (
				<div className="mx-auto md:px-0 w-full z-10">
					<div className="p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-7xl w-full mx-auto">
						<div className="mb-5">
							<h3 className="text-textColor text-[17px] font-semibold">
								Product Stats
							</h3>
							<p className="text-[#99a1b7] font-medium">
								My order items
							</p>
						</div>
						<Table />
					</div>
				</div>
			) : user?.role === "Vendor" ? (
				<VendorProfile />
			) : (
				<AllVendorRequest />
			)}
		</div>
	);
};

export default DashboardHome;
