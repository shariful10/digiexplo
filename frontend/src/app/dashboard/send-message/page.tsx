import ChatPage from "@/components/Dashboard/SendMessage/ChatPage";
import React from "react";

const sendMessagePage = () => {
	return (
		<div>
			<h1 className="text-xl text-center font-semibold mt-5 md:mt-0">
				Message to admin
			</h1>
			<ChatPage />
		</div>
	);
};

export default sendMessagePage;
