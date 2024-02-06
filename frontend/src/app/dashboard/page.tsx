"use client";
import React from "react";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import image from "@/images/Shariful.jpg";
import DashboardSectionTitle from "@/components/Dashboard/DashboardSectionTitle";

const Dashboard = () => {
	const { user, loading, logoutUser } = useAuth();
	console.log(user);

	return (
		<div>
			<DashboardSectionTitle />
			<div className="flex flex-col items-center mt-10">
				<Image
					src={image}
					width={200}
					height={200}
					className="rounded-full h-[150px] w-[150px]"
					alt="profile image"
				/>
				<div className="mt-10 flex flex-col gap-2 justify-center items-center">
					<h4 className="text-xl">
						<span className="font-semibold">Name: </span>
						{user?.name?.firstName} {user?.name?.lastName}
					</h4>
					<h6 className="text-lg">
						<span className="font-semibold">User Name: </span>
						{user?.username}
					</h6>
					<h6 className="text-lg">
						<span className="font-semibold">User Email: </span>
						{user?.email}
					</h6>
					<h6 className="text-lg">
						<span className="font-semibold">User Phone: </span>
						{user?.phone}
					</h6>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
