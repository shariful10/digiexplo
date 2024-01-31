import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.webp";
import { TbVideo } from "react-icons/tb";
import { VscHome } from "react-icons/vsc";
import { LuImagePlus } from "react-icons/lu";
import { MdOutlineQueueMusic } from "react-icons/md";
import { HiOutlineColorSwatch } from "react-icons/hi";

export const items = [
	{
		id: "1",
		title: "home",
		Icon: VscHome,
		url: "/",
	},
	{
		id: "2",
		title: "graphics",
		Icon: HiOutlineColorSwatch,
		url: "/",
	},
	{
		id: "3",
		title: "photos",
		Icon: LuImagePlus,
		url: "/",
	},
	{
		id: "4",
		title: "video",
		Icon: TbVideo,
		url: "/",
	},
	{
		id: "5",
		title: "audio",
		Icon: MdOutlineQueueMusic,
		url: "/",
	},
	{
		id: "6",
		title: "blogs",
		Icon: MdOutlineQueueMusic,
		url: "/blogs",
	},
];

const Sidebar = () => {
	return (
		<div className="hidden lg:block w-[270px] ">
			<div className="fixed left-0 bg-white sidebar-shadow h-screen w-[270px]">
				<div className="px-[30px] py-[25px]">
					<Link href="/">
						<Image src={logo} className="w-[100px]" alt="logo" />
					</Link>
				</div>
				<div className="mt-[30px]">
					<div className="">
						{items.map(({ id, title, Icon, url }) => (
							<ul key={id}>
								<li className="flex items-center gap-4 px-5 py-[13px] cursor-pointer hover:text-primary capitalize text-lg font-medium">
									<Icon className="text-2xl" />
									<Link href={`${url ? url : ""}`}>{title}</Link>
								</li>
							</ul>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
