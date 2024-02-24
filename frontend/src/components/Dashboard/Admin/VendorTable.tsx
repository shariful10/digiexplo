import { Axios } from "@/lib/axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import PendingVendorModal from "./PendingVendorModal";
import { IVendor } from "@/components/types";
import { IoChevronDownOutline } from "react-icons/io5";

interface VendorTableProps {
	vendorData: IVendor[];
	refetch?: () => void;
}

const VendorTable = ({ vendorData, refetch }: VendorTableProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [selectedVendor, setSelectedVendor] = useState<IVendor | null>(null);
	const [openStatusMenu, setOpenStatusMenu] = useState<boolean[]>([]);

	// status menu
	useEffect(() => {
		// Update the openStatusMenu state only if its length is not equal to the products array's length
		if (openStatusMenu.length !== vendorData.length) {
			setOpenStatusMenu(new Array(vendorData.length).fill(false));
		}
	}, [vendorData.length]);

	const handleVendorRequest = async (vendorId: string, status: string) => {
		try {
			const res = await Axios.patch(`admin/update-vendor-request/${vendorId}`, {
				status,
			});
			if (res?.data.success) {
				toast.success(res?.data.message);
			}
			refetch?.();
			return res?.data?.data;
		} catch (error: any) {
			if (error.response.data.success === false) {
				toast.error(error.response.data.errorMessage);
			}
			console.log("Vendor Update error", error);
		}
	};

	const handleViewVendor = (vendor: IVendor) => {
		setSelectedVendor(vendor);
		setOpenModal(true);
	};

	// toggle status menu
	const handleToggleStatusMenu = (index: number) => {
		const updatedOpenStatusMenu = [...openStatusMenu];
		updatedOpenStatusMenu[index] = !updatedOpenStatusMenu[index];
		setOpenStatusMenu(updatedOpenStatusMenu);
	};

	return (
		<div className="">
			<div className=" w-full">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 overflow-x-scroll lg:overflow-x-hidden">
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
						{vendorData.map((vendor, index) => (
							<tr
								key={index}
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
									<div
										className="text-white bg-primary rounded-md px-3 py-2 relative cursor-pointer flex items-center justify-between w-full max-w-[100px]"
										onClick={() => handleToggleStatusMenu(index)}
									>
										Status <IoChevronDownOutline size={16} />
										<div
											className={`rounded-md p-5 border shadow-md bg-white absolute left-0 ${
												openStatusMenu[index]
													? "top-10 z-30 visible"
													: "top-20 -z-50 invisible"
											} duration-200 text-black flex flex-col items-center gap-4`}
										>
											<button
												className="px-5 py-1.5 bg-green-500 text-white rounded-md "
												onClick={() =>
													handleVendorRequest(vendor?._id, "Approved")
												}
											>
												Approve
											</button>
											<button
												className="px-5 py-1.5 bg-amber-500 text-white rounded-md "
												onClick={() =>
													handleVendorRequest(vendor?._id, "Cancel")
												}
											>
												Cancel
											</button>
										</div>
									</div>
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
					handleVendorStatusUpdate={handleVendorRequest}
					onClose={() => setOpenModal(false)}
					vendor={selectedVendor}
				/>
			)}
		</div>
	);
};

export default VendorTable;
