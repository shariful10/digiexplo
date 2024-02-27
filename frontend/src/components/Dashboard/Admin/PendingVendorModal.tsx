"use client";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { HandleVendorStatusUpdateType, IVendor } from "@/components/types";

interface Props {
	vendor: IVendor;
	// handleVendorStatusUpdate: HandleVendorStatusUpdateType;
	onClose: () => void;
	isLoading: boolean;
}

const PendingVendorModal = ({
	vendor,
	// handleVendorStatusUpdate,
	onClose,
	isLoading,
}: Props) => {
	if (!vendor) {
		return null;
	}

	return (
		<div className="flex justify-center items-center absolute top-0 left-0 w-full min-h-screen bg-black bg-opacity-20">
			<div
				className={`px-5 py-14 md:p-12 rounded-2xl box-shadow border border-[#F1F1F4] max-w-4xl w-full my-5 md:my-10 bg-white relative`}
			>
				<div
					className="absolute top-5 right-5 cursor-pointer border-2 rounded-full border-black hover:rotate-180 duration-500"
					onClick={onClose}
				>
					<IoClose size={25} />
				</div>
				<div className="rounded-2xl">
					<p className="text-lg mb-2">Verification ID:</p>
					<div className="flex flex-col gap-10">
						<div className="xl:p-2 rounded-2xl mb-6 xl:mb-0 w-full">
							{isLoading ? (
								<Skeleton className="mb-4 rounded-2xl" height={300} />
							) : (
								<Image
									src={vendor?.verificationId}
									width={655}
									height={437}
									alt={vendor?.verificationId}
									className="rounded-2xl w-full bg-cover xl:h-full"
								/>
							)}
						</div>
						<div>
							<p className="text-lg mb-2">Email: {vendor?.user?.email}</p>
							<p className="text-lg mb-2">
								Vendor Name:{" "}
								{vendor?.user?.firstName + " " + vendor?.user?.lastName}
							</p>
							<p className="text-lg mb-2">
								Company Name: {vendor?.companyName}
							</p>
							<p className="text-lg mb-2">Company Address: {vendor?.address}</p>
							{/* <div className="flex justify-end items-center gap-3">
								<button
									className="text-white capitalize bg-green-500 duration-300 transition-all ease-in-out py-3 min-w-[40px] max-w-[150px] w-full rounded-lg text-base font-semibold"
									// onClick={() => {
									//   handleVendorStatusUpdate(vendor?._id, "Approved");
									//   onClose;
									// }}
								>
									Approve
								</button>
								<button
									className="text-black  capitalize bg-amber-400  duration-300 transition-all ease-in-out py-3 min-w-[40px] max-w-[150px] w-full rounded-lg text-base font-semibold"
									// onClick={() => {
									//   handleVendorStatusUpdate(vendor?._id, "Cancel");
									//   onClose;
									// }}
								>
									Cancel
								</button>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			{/* Banner end */}
		</div>
	);
};

export default PendingVendorModal;
