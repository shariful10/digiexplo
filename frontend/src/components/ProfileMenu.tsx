import Link from "next/link";
import React from "react";
import { IUser } from "./types";

interface ProfileMenuProps {
  user: IUser;
  open: boolean;
  logoutUser: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileMenu = ({ open, setOpen, user, logoutUser }: ProfileMenuProps) => {
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
            <p>
              {user?.firstName} {user?.lastName}
            </p>
          </div>
          <div className="font-medium truncate text-xs">
            <p>{user?.email}</p>
          </div>
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
          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
