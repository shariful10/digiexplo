import React from "react";
import ProfileHeader from "@/components/Dashboard/Vendor/ProfileHeader";
import VendorProduct from "@/components/Dashboard/Vendor/VendorProduct";
import { useQuery } from "react-query";
import { Axios } from "@/lib/axios";
import toast from "react-hot-toast";

const VendorProfile = () => {
  const { data: user = [] } = useQuery(["user"], async () => {
    const res = await Axios.get(`/users/get-user`);
    return res?.data?.data;
  });

  const { data: vendor = [] } = useQuery(["vendor"], async () => {
    try {
      const res = await Axios.get(`vendor/get-vendor/${user._id}`);
      return res?.data?.data;
    } catch (error: any) {
      if (error.response.data.success === false) {
        toast.error(error.response.data.errorMessage);
      }
      console.log("get vendor error", error.response.data);
    }
  });

  return (
    <div className="m-5 max-w-7xl w-full mx-auto p-5 min-[1600px]:p-0">
      <ProfileHeader vendor={vendor} />
      <VendorProduct products={vendor?.products} />
    </div>
  );
};

export default VendorProfile;
