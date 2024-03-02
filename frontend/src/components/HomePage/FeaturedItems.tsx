"use client";
import { Axios } from "@/lib/axios";
import toast from "react-hot-toast";
import ImageCard from "../ImageCard";
import Loader from "../Loader/Loader";
import { useQuery } from "react-query";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";
import { IFeaturedProduct } from "../types";

const FeaturedItems = () => {
	const { data: featuredProducts = [], isLoading } = useQuery(
		["featuredProducts"],
		async () => {
			try {
				const res = await Axios.get(`featured/get-featured-product`);
				return res?.data?.data;
			} catch (error: any) {
				if (error.response.data.success === false) {
					toast.error(error.response.data.errorMessage);
				}
				console.log("Fetch vendor error", error.response.data);
			}
		}
	);

	return (
		<>
			{featuredProducts.length > 0 ? (
				<div className="my-16">
					<SectionTitle title="Featured" subtitle="Items" />
					<SectionDesc description="These Items are Extraordinary" />
					{isLoading ? (
						<Loader />
					) : (
						<div
							className={`mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
						>
							{featuredProducts?.map((product: IFeaturedProduct) => (
								<ImageCard
									key={product._id}
									product={product.product}
								/>
							))}
						</div>
					)}
				</div>
			) : (
				""
			)}
		</>
	);
};

export default FeaturedItems;
