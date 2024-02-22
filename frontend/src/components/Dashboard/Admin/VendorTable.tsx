import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";

interface User {
	firstName: string;
	email: string;
	profileImg: string;
}

interface Vendor {
	_id: string;
	user: User;
	companyName: string;
	ownerName: string;
	website: string;
}

interface VendorTableProps {
	vendorData: Vendor[];
	refetch: () => void;
}

const VendorTable = ({ vendorData, refetch }: VendorTableProps) => {
	console.log(vendorData);

	return (
		<div className="overflow-x-scroll lg:overflow-hidden w-full">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500">
				<thead className="">
					<tr>
						<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Name</th>
						<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Email</th>
						<th className="pb-3 px-3 md:px-0 whitespace-nowrap">
							Company Name
						</th>
						<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Owner Name</th>
						<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Website</th>
						<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Status</th>
						<th className="pb-3 px-3 md:px-0 whitespace-nowrap text-center">
							View
						</th>
					</tr>
				</thead>
				<tbody>
					{vendorData.map((vendor) => (
						<tr
							key={vendor?._id}
							className="bg-white border-b last:border-none hover:bg-gray-50 text-base"
						>
							<td>
								<p className="whitespace-nowrap px-3 md:px-0">
									{vendor?.user?.firstName}
								</p>
							</td>
							<td>
								<p className="whitespace-nowrap px-3 md:px-0">
									{vendor?.user?.email}
								</p>
							</td>
							<td>
								<p className="whitespace-nowrap px-3 md:px-0">
									{vendor?.companyName}
								</p>
							</td>
							<td>
								<p className="whitespace-nowrap px-3 md:px-0">
									{vendor?.ownerName}
								</p>
							</td>
							<td>
								<p className="whitespace-nowrap px-3 md:px-0">
									{vendor?.website}
								</p>
							</td>
							<td className="whitespace-nowrap">
								<select className="text-white bg-primary rounded-md px-3 py-2 focus:outline-none">
									<option
										value="Approved"
										className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer"
									>
										Approve
									</option>
									<option
										value="Canceled"
										className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer"
									>
										Cancel
									</option>
								</select>
							</td>
							<td className="flex justify-center items-center">
								<Link
									href="#"
									className="font-medium text-primary flex justify-center items-center mt-1.5"
								>
									<FaEye size={20} />
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* <div className="flex justify-between items-center gap-6 font-semibold pb-5">
        <p className="whitespace-nowrap">Image</p>
        <p className="whitespace-nowrap">Name</p>
        <p className="whitespace-nowrap">Email</p>
        <p className="whitespace-nowrap">Company Name</p>
        <p className="whitespace-nowrap">Owner Name</p>
        <p>Website</p>
        <p>Status</p>
        <p>View</p>
      </div>
      {vendorData.map((vendor) => <div key={vendor?._id} className="flex justify-between items-center gap-6">
        <Image src={vendor?.user?.profileImg} width={40} height={40} className="h-10 w-10 rounded-md inset-0 object-cover" alt="" />
        <p className="whitespace-nowrap">{vendor?.user?.firstName}</p>
        <p className="whitespace-nowrap">{vendor?.user?.email}</p>
        <p className="whitespace-nowrap">{vendor?.companyName}</p>
        <p className="whitespace-nowrap">{vendor?.ownerName}</p>
        <p className="whitespace-nowrap">{vendor?.website}</p>
        <select className="text-white bg-primary rounded-md px-3 py-2 focus:outline-none">
          <option value="Approved" className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer">
            Approve
          </option>
          <option value="Canceled" className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer">
            Cancel
          </option>
        </select>
        <button className="whitespace-nowrap text-primary">
          <FaEye size={20} />
        </button>
      </div>)} */}
		</div>
	);
};

export default VendorTable;
