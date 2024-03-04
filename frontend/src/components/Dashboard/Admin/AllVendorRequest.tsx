"use client";
import React from "react";
import { Axios } from "@/lib/axios";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import VendorTable from "./VendorTable";
import DashboardHeader from "../DashboardHeader";
import Loader from "@/components/Loader/Loader";

const AllVendorRequest = () => {
	const {
		data: vendors = [],
		refetch,
		isLoading,
	} = useQuery(["vendors"], async () => {
		try {
			const res = await Axios.get(`admin/get-pending-vendor-request`);
			return res?.data?.data;
		} catch (error: any) {
			if (error.response.data.success === false) {
				toast.error(error.response.data.errorMessage);
			}
			console.log("add category error", error.response.data);
		}
	});

	return (
		<div className="relative">
			<DashboardHeader
				url="dashboard"
				currentPage="all vendor request"
				title="All vendor request"
			/>
			<div className="px-7 md:px-10">
				{isLoading ? (
					<Loader />
				) : vendors.length > 0 ? (
					<div className="rounded-md box-shadow border border-[#F1F1F4] max-w-7xl w-full">
						<VendorTable
							vendorData={vendors}
							refetch={refetch}
							isLoading={isLoading}
						/>
					</div>
				) : (
					<div className="min-h-[200px] flex flex-col justify-center max-w-4xl rounded-2xl box-shadow border border-gray-100 my-16">
						<p className="text-2xl font-semibold text-center">
							No pending request! 😊
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default AllVendorRequest;
