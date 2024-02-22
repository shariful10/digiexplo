"use client";
import { Axios } from "@/lib/axios";
import { useQuery } from "react-query";
import AllVendorRequest from "./Admin/AllVendorRequest";
import Table from "./Table";
import VendorProfile from "./Vendor/VendorProfile";

const DashboardHome = () => {
  const { data: user = [] } = useQuery(["user"], async () => {
    const res = await Axios.get(`users/get-user`);
    return res?.data?.data;
  });

  return (
    <div>
      {user && user?.role === "User" ? (
        <div className="mx-auto md:px-0 w-full z-10">
          <div className="p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-7xl w-full mx-auto">
            <div className="mb-5">
              <h3 className="text-textColor text-[17px] font-semibold">
                Product Stats
              </h3>
              <p className="text-[#99a1b7] font-medium">My order items</p>
            </div>
            <Table />
          </div>
        </div>
      ) : user && user?.role === "Vendor" ? (
        <VendorProfile />
      ) : (
        user && user?.role === "Admin" && <AllVendorRequest />
      )}
    </div>
  );
};

export default DashboardHome;
