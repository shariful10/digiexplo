import Link from "next/link";
import React from "react";

interface Name {
   lastName: string;
   firstName: string;
}

interface User {
	name: Name;
	_id: string;
	email: string;
	phone: string;
	role?: string;
	username: string;
	profileImg: string;
}

interface ProfileMenuProps {
   user: User;
	open: boolean;
	logoutUser: () => void;
	setOpen: (open: boolean) => void;
}

const ProfileMenu = ({ open, setOpen, user, logoutUser }: ProfileMenuProps) => {
	console.log(user);
	console.log(logoutUser);
	return (
		<div
			className={`fixed  right-10 ${
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
					<li onClick={() => setOpen(false)}>
						<Link
							href="/dashboard"
							className="block px-4 py-2 hover:bg-gray-100"
						>
							Dashboard
						</Link>
					</li>
					<li onClick={() => setOpen(false)}>
						<Link
							href="/dashboard/settings"
							className="block px-4 py-2 hover:bg-gray-100"
						>
							Settings
						</Link>
					</li>
					<li onClick={() => setOpen(false)}>
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
