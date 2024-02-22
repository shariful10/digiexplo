"use client";
import React from "react";
import { useQuery } from "react-query";
import VendorTable from "./VendorTable";
import DashboardHeader from "../DashboardHeader";
import { Axios } from "@/lib/axios";

interface Vendor {
  _id: string;
  status: string;
}

const AllVendorRequest = () => {
  const { data: vendors = [], refetch } = useQuery(["vendors"], async () => {
    const res = await Axios.get(`admin/get-pending-vendor-request`);
    return res?.data?.data;
  });

  const pendingStatus = vendors.filter(
    (item: any) => item.status === "Pending"
  );

  return (
    <div className="mx-auto p-5 md:px-0 w-full z-10">
      <DashboardHeader
        url="Dashboard"
        currentPage="All vendor request"
        title="All vendor request"
      />
      <div className="p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-7xl w-full mt-5 md:mt-10">
        <VendorTable vendorData={pendingStatus} refetch={refetch} />
      </div>
    </div>
  );
};

export default AllVendorRequest;
