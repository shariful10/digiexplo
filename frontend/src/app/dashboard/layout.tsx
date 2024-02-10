import React from "react";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative min-h-screen md:flex">
			<DashboardSidebar />
			<div className="flex-1">
				<div className="lg:p-10">{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
