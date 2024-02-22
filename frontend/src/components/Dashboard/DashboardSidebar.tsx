"use client";
import logo from "@/images/logo-white.png";
import { Axios } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCirclePlus, FaGear } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import { useQuery } from "react-query";
import {
  FaMinusSquare,
  FaTelegramPlane,
  FaUser,
  FaUserCog,
} from "react-icons/fa";

const dashboardUserItems = [
  {
    id: 1,
    title: "My Order Items",
    url: "/dashboard",
    Icon: MdOutlineShoppingCart,
  },
  {
    id: 2,
    title: "Change Password",
    url: "/dashboard/change-password",
    Icon: FaGear,
  },
  {
    id: 3,
    title: "Message to Admin",
    url: "/dashboard/send-message",
    Icon: FaTelegramPlane,
  },
];

const dashboardVendorItems = [
  {
    id: 1,
    title: "Vendor Profile",
    url: "/dashboard",
    Icon: FaUser,
  },
  {
    id: 3,
    title: "Change Password",
    url: "/dashboard/change-password",
    Icon: FaGear,
  },
  {
    id: 4,
    title: "Add Product",
    url: "/dashboard/add-product",
    Icon: FaCirclePlus,
  },
];

const dashboardAdminItems = [
  {
    id: 1,
    title: "Categories",
    url: "/dashboard/categories",
    Icon: BiSolidCategoryAlt,
  },
  {
    id: 2,
    title: "All Vendor Request",
    url: "/dashboard/all-vendor-request",
    Icon: FaUser,
  },
  {
    id: 3,
    title: "All Vendors",
    url: "/dashboard/all-vendors",
    Icon: FaUserCog,
  },
  {
    id: 4,
    title: "Rejected Vendor",
    url: "/dashboard/rejected-vendors",
    Icon: FaMinusSquare,
  },
  {
    id: 5,
    title: "Change Password",
    url: "/dashboard/change-password",
    Icon: FaGear,
  },
];

interface DashboardNavbarProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardSidebar = ({ open, setOpen }: DashboardNavbarProps) => {
	const pathName = usePathname();
	const { data: user = [] } = useQuery(["user"], async () => {
		const res = await Axios.get(`users/get-user`);
		return res?.data?.data;
	});

	return (
		<div className="w-64">
				<div
					className={`fixed top-0 bg-[#2D3748] h-screen w-64 ${
						open
							? "left-0 duration-500"
							: "-left-[500px] lg:left-0 duration-500"
					} py-10 z-20 flex flex-col justify-between`}
				>
					<div>
						<Link href="/" className="">
							<Image
								src={logo}
								className="w-[65%] rounded-md px-10 mx-auto"
								alt="logo"
							/>
						</Link>
						{user?.role === "User" ? (
							<div className="flex flex-col gap-2 mt-10">
								{dashboardUserItems.map(({ id, title, url, Icon }) => (
									<Link
										href={url}
										key={id}
                    onClick={() => setOpen(false)}
										className={`flex items-center gap-2 hover:text-[#f5f5f5] py-2 w-full ${
											pathName === url
												? "bg-[#53535f] text-[#f5f5f5] py-2 w-full"
												: "text-[#9a9cae]"
										} px-10`}
									>
										<Icon className="text-xl" />
										<span className="">{title}</span>
									</Link>
								))}
							</div>
						) : user?.role === "Vendor" ? (
							<div className="flex flex-col gap-2 mt-10">
								{dashboardVendorItems.map(({ id, title, url, Icon }) => (
									<Link
										href={url}
										key={id}
                    onClick={() => setOpen(false)}
										className={`flex items-center gap-2 hover:text-[#f5f5f5] py-2 w-full ${
											pathName === url
												? "bg-[#53535f] text-[#f5f5f5] py-2 w-full"
												: "text-[#9a9cae]"
										} px-10`}
									>
										<Icon className="text-xl" />
										<span className="">{title}</span>
									</Link>
								))}
							</div>
						) : user?.role === "Admin" ? (
							<div className="flex flex-col gap-2 mt-10">
								{dashboardAdminItems.map(({ id, title, url, Icon }) => (
									<Link
										href={url}
										key={id}
                    onClick={() => setOpen(false)}
										className={`flex items-center gap-2 hover:text-[#f5f5f5] py-2 w-full ${
											pathName === url
												? "bg-[#53535f] text-[#f5f5f5] py-2 w-full"
												: "text-[#9a9cae]"
										} px-10`}
									>
										<Icon className="text-xl" />
										<span className="">{title}</span>
									</Link>
								))}
							</div>
						) : (
							<></>
						)}
					</div>
					<div>
						<div className="px-5">
							<hr />
						</div>
						<div className="flex flex-col gap-2 mt-5 px-5">
							<Link
								href="/"
								className="flex items-center gap-2 text-[#9a9cae] hover:text-[#f5f5f5] py-2 px-5 w-full"
							>
								<VscHome className="text-xl" />
								<span className="">Home</span>
							</Link>
							<Link href="/">
								<button
									// onClick={logoutUser}
									className="flex items-center gap-2 text-[#9a9cae] hover:text-[#f5f5f5] py-2 px-5 w-full"
								>
									<HiOutlineLogout className="text-xl" />
									<span className="">Logout</span>
								</button>
							</Link>
						</div>
					</div>
			</div>
		</div>
	);
};

export default DashboardSidebar;
