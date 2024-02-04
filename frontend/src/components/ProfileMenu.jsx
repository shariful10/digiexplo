import React from "react";

const ProfileMenu = ({ open }) => {
  return (
    <div
      className={`fixed  right-10 ${
        open ? "top-16 z-20" : "-top-10 -z-40"
      } duration-500`}
    >
      <div
        id="dropdownAvatar"
        className=" bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <div className="px-4 py-3 text-sm text-gray-900 ">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownUserAvatarButton"
        >
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
