import { Axios } from "@/lib/axios";
import Link from "next/link";
import { useState } from "react";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import PendingVendorModal from "./PendingVendorModal";
import { IVendor } from "@/components/types";

interface VendorTableProps {
	vendorData: IVendor[];
	refetch?: () => void;
}

const VendorTable = ({ vendorData, refetch }: VendorTableProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [selectedVendor, setSelectedVendor] = useState<IVendor | null>(null);
	const handleVendorRequest = async (
		vendorId: string,
		e: ChangeEvent<HTMLSelectElement>
	) => {
		const status = e.target.value;
		try {
			const res = await Axios.patch(`admin/update-vendor-request/${vendorId}`, {
				status,
			});
			if (res?.data.success) {
				toast.success(res?.data.message);
			}
			refetch;
			return res?.data?.data;
		} catch (error: any) {
			if (error.response.data.success === false) {
				toast.error(error.response.data.errorMessage);
			}
			console.log("Vendor Update error", error);
		}
	};

	console.log(vendorData);

	const handleViewVendor = (vendor: IVendor) => {
		setSelectedVendor(vendor);
		setOpenModal(true);
	};

	return (
		<div className="">
			<div className="overflow-x-scroll lg:overflow-hidden w-full">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead className="">
						<tr>
							<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Name</th>
							<th className="pb-3 px-3 md:px-0 whitespace-nowrap">Email</th>
							<th className="pb-3 px-3 md:px-0 whitespace-nowrap">
								Company Name
							</th>
							<th className="pb-3 px-3 md:px-0 whitespace-nowrap">
								Owner Name
							</th>
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
								className="bg-white border-b last:border-none hover:bg-gray-50 text-sm"
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
									<select
										className="text-white bg-primary rounded-md px-3 py-2 focus:outline-none"
										onChange={(e) => handleVendorRequest(vendor._id, e)}
									>
										<option
											disabled
											defaultChecked
											selected
											className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer"
										>
											Status
										</option>
										<option
											value="Approved"
											className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer"
										>
											Approve
										</option>
										<option
											value="Cancel"
											className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer"
										>
											Cancel
										</option>
									</select>
								</td>
								<td className="flex justify-center items-center">
									<button
										onClick={() => handleViewVendor(vendor)}
										className="font-medium text-primary flex justify-center items-center mt-1.5"
									>
										<FaEye size={20} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{openModal && selectedVendor && (
				<PendingVendorModal
					// handleVendorStatusUpdate={handleVendorStatusUpdate}
					onClose={() => setOpenModal(false)}
					vendor={selectedVendor}
				/>
			)}
		</div>
	);
};

export default VendorTable;
