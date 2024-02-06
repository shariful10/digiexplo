import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative min-h-screen md:flex">
			<DashboardSidebar />
			<div className="flex-1">
				<div className="p-5">{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
