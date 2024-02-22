"use client"
import React, { useState } from "react";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen lg:flex">
      <DashboardSidebar open={open} setOpen={setOpen} />
      <div className="flex-1">
        <DashboardNavbar open={open} setOpen={setOpen} />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
