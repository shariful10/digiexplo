import Link from "next/link";
import React from "react";

const ProfileMenu = ({ open, user, logoutUser }) => {
	return (
		<div
			className={`fixed  right-[10rem] ${
				open ? "top-16 z-20" : "-top-10 -z-40"
			} duration-500`}
		>
			<div
				id="dropdownAvatar"
				className=" bg-white divide-y divide-gray-100 rounded-lg shadow w-[200px] border"
			>
				<div className="px-4 py-3 text-sm text-gray-900 ">
					<div>
						{user?.name?.firstName} {user?.name?.lastName}
					</div>
					<div className="font-medium truncate text-xs">{user?.email}</div>
				</div>
				<ul
					className="py-2 text-sm text-gray-700 text-start"
					aria-labelledby="dropdownUserAvatarButton"
				>
					<li>
						<Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
							Dashboard
						</Link>
					</li>
					<li>
						<Link href="/dashboard/settings" className="block px-4 py-2 hover:bg-gray-100">
							Settings
						</Link>
					</li>
					<li>
						<Link href="#" className="block px-4 py-2 hover:bg-gray-100">
							Earnings
						</Link>
					</li>
				</ul>
				<div className="py-2" onClick={logoutUser}>
					<button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
						Sign out
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileMenu;
