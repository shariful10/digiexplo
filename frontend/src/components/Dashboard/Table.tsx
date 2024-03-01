import { Axios } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { useQuery } from "react-query";
import FormattedPrice from "../FormattedPrice";
import Loader from "../Loader/Loader";
import { formatDate } from "../helper";

const Table = () => {
	const {
		data: user = [],
		refetch,
		isLoading,
	} = useQuery(["user"], async () => {
		const res = await Axios.get(`/users/get-user`);
		return res?.data?.data;
	});

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{user?.buyedProducts.length > 0 ? (
						<div>
							<div className="p-8 md:p-10 rounded-md box-shadow border border-[#F1F1F4] max-w-5xl">
								<div className="mb-5">
									<h3 className="text-textColor text-[17px] font-semibold">
										Product Stats
									</h3>
									<p className="text-[#99a1b7] font-medium">My Order items</p>
								</div>
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
											{user?.buyedProducts?.map((item) => (
												<tr
													key={item?._id}
													className="bg-white border-b last:border-none hover:bg-gray-50"
												>
													<td className="flex items-center mr-14 px-6 py-4 text-gray-600 whitespace-nowrap">
														<Image
															className="w-10 h-10 rounded-md"
															src={item?.thumbnail}
															width={100}
															height={80}
															alt="Jese image"
														/>
														<div className="ps-3">
															<p className="text-base font-semibold md:hidden">
																{item?.productName?.slice(0, 20)}...
															</p>
															<p className="text-base font-semibold hidden md:block">
																{item?.productName}
															</p>
															<p className="font-normal text-gray-500">
																{item?.vendor?.user?.username}
															</p>
														</div>
													</td>
													<td className="px-6 py-4 font-medium whitespace-nowrap">
														<button className="text-green-500 bg-green-100 px-2 py-1 rounded-md">
															<FormattedPrice
																amount={item?.price}
																className="text-center"
															/>
														</button>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md font-medium">
															{formatDate(item?.createdAt)}
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
														<Link
															href={`product/${item?._id}`}
															className="font-medium text-primary"
														>
															<FaEye size={20} />
														</Link>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					) : (
						<p>No ordered items found</p>
					)}
				</>
			)}
		</>
	);
};

export default Table;
