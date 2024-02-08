import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import FormattedPrice from "../FormattedPrice";
import { myOrderItems } from "@/components/data";

const Table = () => {
	return (
		<div className="overflow-x-scroll lg:overflow-hidden">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" className="px-6 py-3">
							Item
						</th>
						<th scope="col" className="px-6 py-3">
							Price
						</th>
						<th scope="col" className="px-6 py-3">
							Date
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>
						<th scope="col" className="px-6 py-3">
							View
						</th>
					</tr>
				</thead>
				<tbody>
					{myOrderItems.map((item) => (
						<tr
							key={item?.id}
							className="bg-white border-b last:border-none hover:bg-gray-50"
						>
							<td className="flex items-center mr-14 px-6 py-4 text-gray-600 whitespace-nowrap">
								<Image
									className="w-10 h-10 rounded-md"
									src={item?.image!}
									width={100}
									height={80}
									alt="Jese image"
								/>
								<div className="ps-3">
									<p className="text-base font-semibold md:hidden">
										{item?.title.slice(0, 20)}...
									</p>
									<p className="text-base font-semibold hidden md:block">
										{item?.title}
									</p>
									<p className="font-normal text-gray-500">
										{item?.vendor}
									</p>
								</div>
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
								<div className="text-green-500 bg-green-100 px-2 py-1 rounded-md">
									<FormattedPrice
										amount={item?.price}
										className="text-center"
									/>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md font-medium">
									{item?.date}
								</span>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<span
									className={`${
										item?.status === "Paid"
											? "bg-green-100 text-green-500 "
											: "bg-amber-100 text-amber-500 "
									} px-2 py-1 rounded-md font-medium`}
								>
									{item?.status}
								</span>
							</td>
							<td className="px-6 py-4">
								<Link href="#" className="font-medium text-primary">
									<FaEye size={20} />
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
