"use client";
import { Axios } from "@/lib/axios";
import { useQuery } from "react-query";
import AllVendorRequest from "./Admin/AllVendorRequest";
import Table from "./Table";
import VendorProfile from "./Vendor/VendorProfile";
import MyOrderItems from "./MyOrderItems";

const DashboardHome = () => {
  const { data: user = [] } = useQuery(["user"], async () => {
    const res = await Axios.get(`users/get-user`);
    return res?.data?.data;
  });

  return (
    <div>
      {user && user?.role === "User" ? (
        <MyOrderItems />
      ) : user && user?.role === "Vendor" ? (
        <VendorProfile />
      ) : (
        user && user?.role === "Admin" && <AllVendorRequest />
      )}
    </div>
  );
};

export default DashboardHome;
