"use client";
import { recivedMessage } from "@/components/data";
import React, { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";

const ChatPage: React.FC = () => {
	const [message, setMessage] = useState<string>("");
	const [messages, setMessages] = useState<
		{ id: number; message: string; mine: boolean }[]
	>(recivedMessage.map((msg) => ({ ...msg, mine: false })));

	const handleSendMessage = () => {
		if (message.trim() !== "") {
			setMessages([
				...messages,
				{ id: messages.length + 1, message, mine: true },
			]);
			setMessage("");
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSendMessage();
		}
	};

	return (
		<div className="flex flex-col bg-gray-100 h-[calc(100vh-128px)] rounded-2xl mt-5 mx-5 md:mx-0">
			<div className="flex-1 overflow-y-auto p-6">
				<div className="flex flex-col space-y-2">
					{messages.map((msg) => (
						<div
							key={msg.id}
							className={`p-4 rounded-lg shadow-md max-w-xs ${
								msg.mine
									? "self-end bg-blue-500 text-white"
									: "self-start bg-white"
							}`}
						>
							{msg.message}
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center p-4">
				<input
					type="text"
					className="flex-1 bg-gray-200 rounded-full px-4 py-2 mr-2 focus:outline-none"
					placeholder="Type a message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
					onClick={handleSendMessage}
				>
					<IoSend size={24} />
				</button>
			</div>
		</div>
	);
};

export default ChatPage;
