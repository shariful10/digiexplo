import React from "react";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen lg:flex">
      <DashboardSidebar />
      <div className="flex-1">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
