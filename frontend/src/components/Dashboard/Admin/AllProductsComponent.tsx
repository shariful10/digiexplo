"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Axios } from "@/lib/axios";
import { IProduct } from "@/components/types";
import { IoOpenSharp } from "react-icons/io5";
import Loader from "@/components/Loader/Loader";
import AllProductModal from "./AllProductModal";
import DashboardHeader from "../DashboardHeader";
import { useGetApprovedProducts } from "@/lib/getProducts";

const AllProductsComponent = () => {
	const [openModal, setOpenModal] = useState(false);
	const { data: products = [], isLoading, refetch } = useGetApprovedProducts();
	const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

	const handleViewProduct = (product: IProduct) => {
		setSelectedProduct(product);
		setOpenModal(true);
	};

	const handleAddFeaturedProduct = async (productId: string) => {
		try {
			const res = await Axios.post(
				`/featured/add-featured-product/${productId}`
			);
			if (res?.data.success) {
				toast.success(res?.data.message);
			}
			refetch();
		} catch (error: any) {
			if (error.response.data.success === false) {
				toast.error(error.response.data.errorMessage);
			}
			console.log("Feature Update error", error);
		}
	};

	return (
		<div className="relative">
			<DashboardHeader
				currentPage="All-products"
				title="all products"
				url="dashboard"
			/>
			<div className="px-7 md:px-10">
				{isLoading ? (
					<Loader />
				) : products.length > 0 ? (
					<div className=" rounded-md box-shadow border border-[#F1F1F4] max-w-5xl w-full overflow-x-scroll lg:overflow-hidden">
						<div className="w-full">
							<table className="w-full text-sm text-left rtl:text-right text-gray-500">
								<thead className="">
									<tr>
										<th className="px-8 py-5 md:px-10 whitespace-nowrap">SL</th>
										<th className="px-8 py-5 md:px-10 whitespace-nowrap">
											Title
										</th>
										<th className="px-8 py-5 md:px-10 whitespace-nowrap">
											Price
										</th>
										<th className="px-8 py-5 md:px-10 whitespace-nowrap">
											Category
										</th>
										<th className="px-8 py-5 md:px-10 whitespace-nowrap text-center">
											Status
										</th>
										<th className="px-8 py-5 md:px-10 whitespace-nowrap text-center">
											View
										</th>
									</tr>
								</thead>
								<tbody>
									{products.map((product: IProduct, index: number) => (
										<tr
											className="bg-white border-b last:border-none hover:bg-gray-100 text-sm"
											key={product?._id}
										>
											<td className="px-8 py-5 md:px-10">
												<p className="whitespace-nowrap capitalize">
													{index + 1}
												</p>
											</td>
											<td className="px-8 py-5 md:px-10">
												<p className="whitespace-nowrap capitalize">
													{product?.productName}
												</p>
											</td>
											<td className="px-8 py-2.5 md:px-10">
												<p className="whitespace-nowrap ">${product?.price}</p>
											</td>
											<td className="px-8 py-2.5 md:px-10">
												<p className="whitespace-nowrap ">
													{product?.category}
												</p>
											</td>
											<td className="whitespace-nowrap px-8 py-2.5 md:px-10">
												<p className="bg-green-300 py-1 px-0.5 text-green-600 rounded-full text-xs text-center">
													{product?.status}
												</p>
											</td>
											<td className="px-8 py-2.5 md:px-10 flex justify-center">
												<button
													className="font-medium text-primary"
													onClick={() => handleViewProduct(product)}
												>
													<IoOpenSharp size={25} />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				) : (
					<div className="min-h-[200px] flex flex-col justify-center max-w-4xl rounded-2xl box-shadow border border-gray-100 my-16">
						<p className="text-2xl font-semibold text-center">
							No pending products! 😊
						</p>
					</div>
				)}
			</div>

			{openModal && selectedProduct && (
				<AllProductModal
					onClose={() => setOpenModal(false)}
					product={selectedProduct}
					handleAddFeaturedProduct={handleAddFeaturedProduct}
				/>
			)}
		</div>
	);
};

export default AllProductsComponent;
