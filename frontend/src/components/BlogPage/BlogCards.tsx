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
		<div className="grid md:grid-cols-2 gap-6 mt-10 justify-center">
			{items?.map((item) => (
				<div
					key={item?.id}
					className="bg-gray-100 p-5 md:p-10 rounded-2xl group"
				>
					<div>
						<div className="overflow-hidden rounded-2xl group relative">
							<Image
								src={item?.thumbnail}
								width={400}
								height={200}
								className="w-full h-full rounded-2xl"
								alt="thumbnail"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-500 flex justify-center items-center">
								<Link href={`/blogs/${item?.id}`}>
									<button className="bg-white px-4 py-2.5 rounded-md transform translate-y-2 group-hover:translate-y-0 duration-500">
										View Details
									</button>
								</Link>
							</div>
						</div>
						<div className="mt-5">
							<h3 className="text-xl font-medium mb-2">{item?.title}</h3>
							<h5>
								by{" "}
								<span className="font-medium text-textColor">
									{item?.author}
								</span>{" "}
								in{" "}
								<span className="font-medium text-textColor">
									{item?.category}
								</span>
							</h5>
							<p className="mt-5">{item?.desc.slice(0, 100)}...</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogCards;
