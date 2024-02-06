import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa"

const BlogCards = () => {
	return (
		<div
            key={id}
            className="rounded-2xl bg-gray-100 flex flex-col justify-between items-start relative "
          >
            <Image
              src={bg_img}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full bg-cover absolute top-0 rounded-[18px]"
            />
            <div className="p-5 md:p-10 z-20 bg-gray-100 hover:bg-gradient-to-b from-gray-900 to hover:bg-orange-500 hover:bg-opacity-40 hover:text-white w-full h-full text-black group rounded-2xl flex flex-col justify-between">
              <div className="mb-5 flex flex-col justify-between">
                <h2 className="text-2xl ">{title}</h2>
                <p className="mt-3 mb-5 text-textColor group-hover:text-white">
                  by <span className="font-medium">{author}</span> in
                  <span className="font-medium">{category}</span>
                </p>
                <p className="">{desc.slice(0, 100)}...</p>
              </div>
              <Link
                href={`/blogs/${id}`}
                className="flex items-center gap-[2px] group-hover:gap-6 group-hover:duration-300"
              >
                Read More <FaAngleRight />
              </Link>
            </div>
          </div>
	);
};

export default BlogCards;
