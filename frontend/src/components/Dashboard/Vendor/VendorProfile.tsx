import React from "react";
import ProfileHeader from "@/components/Dashboard/Vendor/ProfileHeader";
import VendorProduct from "@/components/Dashboard/Vendor/VendorProduct";

const VendorProfile = () => {
  return (
    <div className="m-5 max-w-7xl w-full mx-auto">
      <ProfileHeader vendorStatus="Pending" />
      <VendorProduct />
    </div>
  );
};

export default VendorProfile;
