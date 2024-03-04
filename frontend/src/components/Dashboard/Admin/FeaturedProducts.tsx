"use client";
import { Axios } from "@/lib/axios";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loader from "@/components/Loader/Loader";
import DashboardHeader from "../DashboardHeader";
import FeaturedProductTable from "./FeaturedProductTable";

const FeaturedProductsComponent = () => {
	const {
		data: featuredProducts = [],
		refetch,
		isLoading,
	} = useQuery(["featuredProducts"], async () => {
		try {
			const res = await Axios.get(`featured/get-featured-product`);
			return res?.data?.data;
		} catch (error: any) {
			if (error.response.data.success === false) {
				toast.error(error.response.data.errorMessage);
			}

			console.log("Fetch vendor error", error.response.data);
		}
	});

	const handleDeleteFeaturedProducts = async (productId: string) => {
		try {
			const res = await Axios.delete(
				`/featured/delete-featured-product/${productId}`
			);

			if (res?.data.success) {
				toast.success(res?.data.message);
				refetch();
			}
		} catch (error: any) {
			if (error.response.data.success === false) {
				toast.error(error.response.data.errorMessage);
			}
			console.log("Feature Delete error", error);
		}
	};

	return (
		<div>
			<DashboardHeader
				currentPage="featured-products"
				title="Featured Products"
				url="dashboard"
			/>

			{isLoading ? (
				<Loader />
			) : featuredProducts.length > 0 ? (
				<FeaturedProductTable
					refetch={refetch}
					isLoading={isLoading}
					featuredProducts={featuredProducts}
					handleDeleteFeaturedProducts={handleDeleteFeaturedProducts}
				/>
			) : (
				<div className="min-h-[200px] flex flex-col justify-center max-w-4xl rounded-2xl box-shadow border border-gray-100 my-16">
					<p className="text-2xl font-semibold text-center">
						No featured products! 😊
					</p>
				</div>
			)}
		</div>
	);
};

export default FeaturedProductsComponent;
