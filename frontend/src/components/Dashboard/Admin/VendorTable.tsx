import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { vendorData } from "@/components/data";

const VendorTable = () => {

	return (
		<div className="overflow-x-scroll lg:overflow-hidden">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500">
				<tbody>
					{vendorData.map((item) => (
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
							</td>
							<td>
								<p className="text-base font-semibold">{item?.name}</p>
							</td>
							<td className="px-6 py-4 font-medium whitespace-nowrap">
                        <select id={`status-${item.id}`} className="text-white bg-primary rounded-md px-3 py-2 focus:outline-none">
									{item.status.map((status) => (
										<option key={status.id} value={status.option.toLowerCase()} className="py-2 px-4 text-primary bg-white hover:bg-gray-100 cursor-pointer">
											{status.option}
										</option>
									))}
								</select>
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

export default VendorTable;
