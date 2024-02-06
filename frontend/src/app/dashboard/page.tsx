"use client";
import React from "react";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import image from "@/images/Shariful.jpg";
import PageContent from "@/components/ProfileSettingPage/PageContent";


const Dashboard = () => {
	const { user } = useAuth();
	console.log(user);

	return (
		<div>
         <PageContent />
		</div>
	);
};

export default Dashboard;
