"use client";
import Link from "next/link";
import Image from "next/image";
import { IOrder } from "../types";
import { Axios } from "@/lib/axios";
import Loader from "../Loader/Loader";
import { useQuery } from "react-query";
import { useParams } from "next/navigation";
import { FaDownload } from "react-icons/fa6";
import { useGetApprovedProducts } from "@/lib/getProducts";
import AuthorInfo from "@/components/ProductDetails/AuthorInfo";
import { formatDate } from "@/components/Dashboard/Vendor/VendorProductCard";
import ProductDescription from "@/components/ProductDetails/ProductDescription";
import ProductInformation from "@/components/ProductDetails/ProductInformation";

const ProductDetailsComponent = () => {
	const { id } = useParams();

	const { data: user = [] } = useQuery(["user"], async () => {
		const res = await Axios.get(`/users/get-user`);
		return res?.data?.data;
	});

	const { data: products = [], isLoading } = useGetApprovedProducts();
	const product = products.find((product) => product._id === id);

	if (!product) {
		return null;
	}

	const isProductPurchased = user?.buyedProducts?.some(
		(order: IOrder) => order.product === product?._id
	);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<div className="px-5 py-8 lg:p-20 bg-gradient-to-br from-[#012052]  to-blue-800 rounded-2xl text-white md:my-10">
						<div className="xl:flex items-center gap-10">
							<div className="xl:p-2 rounded-2xl xl:w-1/2 mb-6 xl:mb-0">
								<Image
									src={product?.thumbnail}
									width={655}
									height={437}
									alt={product?.productName}
									className="rounded-2xl bg-cover max-h-[400px] xl:h-full"
								/>
							</div>
							<div>
								<h2 className="text-2xl sm:text-4xl 2xl:text-[42px] font-bold md:leading-[52px] mb-2">
									{product?.productName}
								</h2>
								<p>
									by{" "}
									<span className="font-medium cursor-pointer">
										{product?.vendor.user.username}
									</span>{" "}
									in{" "}
									<span className="font-medium cursor-pointer">
										{product?.category}
									</span>{" "}
									on{" "}
									<span className="font-medium cursor-pointer">
										{formatDate(product?.createdAt)}
									</span>
								</p>
								<p className="text-xl md:text-3xl font-extrabold my-6">
									${product?.price}
								</p>
								{isProductPurchased ? (
									<Link
										href={product.file}
										download
										className="bg-primary text-white px-4 py-2.5 rounded-xl transform translate-y-2 group-hover:translate-y-0 duration-300 flex gap-2 items-center max-w-36"
									>
										<FaDownload size={16} /> <span>Download</span>
									</Link>
								) : (
									<button className="text-black hover:text-white capitalize bg-gray-100 hover:bg-primary duration-300 transition-all ease-in-out py-3 min-w-[40px] max-w-[150px] w-full rounded-lg text-base font-semibold">
										Purchase
									</button>
								)}
							</div>
						</div>
					</div>
					{/* Banner end */}

					<div className="xl:flex gap-8 my-20">
						<div className=" xl:w-[65%] mb-10 xl:mb-0">
							<ProductDescription description={product?.description} />
						</div>
						<div className="xl:max-w-[35%] w-full">
							<ProductInformation productInfo={product} />
							<AuthorInfo author={product?.vendor} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductDetailsComponent;
