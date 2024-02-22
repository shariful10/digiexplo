import React from "react";
import Link from "next/link";
import Image from "next/image";
import { vendorItems } from "@/components/data";
import VendorTable from "@/components/Dashboard/Admin/VendorTable";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import { FaEye } from "react-icons/fa6";

const AllVendorPage = () => {
	return (
		<div className="p-5 md:p-10 mx-auto w-full z-10">
			<DashboardHeader
				url="Dashboard"
				currentPage="All vendor"
				title="All vendor"
			/>
			<div className="p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-5xl w-full mt-5 md:mt-10">
				<div className="overflow-x-scroll lg:overflow-hidden w-full">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500">
						<thead className="">
							<tr>
								<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Image</th>
								<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Name</th>
								<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Email</th>
								<th className="pb-3 px-3 md:px-0 whitespace-nowrap">
									Company Name
								</th>
								<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Website</th>
								<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Status</th>
								<th className="pb-3 px-3 md:px-0 whitespace-nowrap">
									Commission
								</th>
							</tr>
						</thead>
						<tbody>
							{vendorItems.map((vendor) => (
								<tr
									key={vendor?._id}
									className="bg-white border-b last:border-none hover:bg-gray-50 text-sm"
								>
									<td className="py-3">
										<Image
											src={vendor?.profileImg}
											width={48}
											height={48}
											className="w-12 h-12 rounded-md"
											alt="profileImg"
										/>
									</td>
									<td className="py-3">
										<p className="whitespace-nowrap px-3 md:px-0">
											{vendor?.firstName}
										</p>
									</td>
									<td className="py-3">
										<p className="whitespace-nowrap px-3 md:px-0">
											{vendor?.email}
										</p>
									</td>
									<td className="py-3">
										<p className="whitespace-nowrap px-3 md:px-0">
											{vendor?.companyName}
										</p>
									</td>
									<td className="py-3">
										<p className="whitespace-nowrap px-3 md:px-0">
											{vendor?.website}
										</p>
									</td>
									<td className="py-3 px-3 md:px-0">
										<button className="text-green-500 bg-green-200 px-3 py-0.5 rounded-full">
											{vendor?.status}
										</button>
									</td>
									<td className="whitespace-nowrap py-3">
										<select className="text-white bg-primary rounded-md px-3 py-2 focus:outline-none">
											<option
												value="30%"
												className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer"
											>
												30%
											</option>
											<option
												value="20%"
												className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer"
											>
												20%
											</option>
										</select>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AllVendorPage;
