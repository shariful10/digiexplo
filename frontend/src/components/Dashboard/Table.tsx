import React from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import FormattedPrice from "../FormattedPrice";
import { myOrderItems } from "@/components/data";
import Link from "next/link";

interface Props {
	items: {
		id: number;
		image: string;
		title: string;
		vendor: string;
		price: number;
		date: string;
	}[];
}

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
							<td className="flex items-center mr-14 px-6 py-4 text-gray-900 whitespace-nowrap">
								<Image
									className="w-10 h-10 rounded-md"
									src={item?.image!}
									width={100}
									height={80}
									alt="Jese image"
								/>
								<div className="ps-3">
									<div className="text-base font-semibold md:hidden">
										{item?.title.slice(0, 20)}...
									</div>
									<div className="text-base font-semibold hidden md:block">
										{item?.title}
									</div>
									<div className="font-normal text-gray-500">
										{item?.vendor}
									</div>
								</div>
							</td>
							<td className="px-6 py-4 text-primary font-semibold whitespace-nowrap">
								<FormattedPrice amount={item?.price} />
							</td>
							<td className="px-6 py-4 w-full whitespace-nowrap">
								{item?.date}
							</td>
							<td className="px-6 py-4">
								<Link
									href="#"
									className="font-medium hover:text-blue-600"
								>
									<FaEye />
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
