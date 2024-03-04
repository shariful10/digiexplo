import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

interface BlogItem {
	id: number;
	title: string;
	author: string;
	thumbnail: string;
	category: string;
	desc: string;
}

interface BlogCardsProps {
	items: BlogItem[];
}

const BlogCards = ({ items }: BlogCardsProps) => {
	return (
		<div className="grid lg:grid-cols-2 gap-6 mt-10 justify-center">
			{items?.map((item) => (
				<div
					key={item?.id}
					className="rounded-2xl bg-gray-100 flex flex-col justify-between items-start relative "
				>
					<Image
						src={item?.thumbnail}
						alt={item?.title}
						width={365}
						height={365}
						className="w-full h-full bg-cover absolute top-0 rounded-[18px]"
					/>
					<div className="p-5 md:p-10 z-20 bg-gray-100 hover:bg-gradient-to-b from-gray-900 to hover:bg-orange-500 hover:bg-opacity-40 hover:text-white w-full h-full text-black group rounded-2xl flex flex-col justify-between">
						<div className="mb-5 flex flex-col justify-between">
							<h2 className="text-2xl ">{item?.title}</h2>
							<p className="mt-3 mb-5 text-textColor group-hover:text-white">
								by <span className="font-medium">{item?.author}</span> in
								<span className="font-medium">{item?.category}</span>
							</p>
							<p className="">{item?.desc.slice(0, 100)}...</p>
						</div>
						<Link
							href={`/blogs/${item?.id}`}
							className="flex items-center gap-[2px] group-hover:gap-6 group-hover:duration-300"
						>
							Read More <FaAngleRight />
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogCards;
