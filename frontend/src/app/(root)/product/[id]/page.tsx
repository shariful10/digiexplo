"use client";

import { ProductInterface } from "@/components/ImageCard";
import AuthorInfo from "@/components/ProductDetails/AuthorInfo";
import ProductDescription from "@/components/ProductDetails/ProductDescription";
import ProductInformation from "@/components/ProductDetails/ProductInformation";
import Tags from "@/components/Tags";
import { products, tags } from "@/components/data";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return null;
  }

  const {
    thumbnail,
    title,
    author,
    category,
    price,
    description,
    date,
    tags,
  }: ProductInterface = product;

  return (
    <div>
      <div className="px-5 py-8 lg:p-20 bg-gradient-to-br from-[#012052]  to-blue-800 rounded-2xl text-white md:my-10">
        <div className="xl:flex items-center gap-10">
          <div className="xl:p-2 rounded-2xl xl:w-1/2 mb-6 xl:mb-0">
            <Image
              src={thumbnail}
              width={655}
              height={437}
              alt={title}
              className="rounded-2xl bg-cover max-h-[400px] xl:h-full"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl 2xl:text-[42px] font-bold md:leading-[52px] mb-2">
              {title}
            </h2>
            <p>
              by{" "}
              <span className="font-medium cursor-pointer">
                {author.authorName}
              </span>{" "}
              in <span className="font-medium cursor-pointer">{category}</span>{" "}
              on <span className="font-medium cursor-pointer">{date}</span>
            </p>
            <p className="text-xl md:text-3xl font-extrabold my-6">${price}</p>
            <button className="text-black hover:text-white capitalize bg-gray-100 hover:bg-primary duration-300 transition-all ease-in-out py-3 min-w-[40px] max-w-[150px] w-full rounded-lg text-base font-semibold">
              Purchase
            </button>
          </div>
        </div>
      </div>
      {/* Banner end */}

      <div className="xl:flex gap-8 my-20">
        <div className=" xl:w-[65%] mb-10 xl:mb-0">
          <ProductDescription description={description} />
        </div>
        <div className="xl:max-w-[35%] w-full">
          <ProductInformation />
          <AuthorInfo author={author} />
          <Tags tags={tags.slice(0, 17)} title={"Product Tags"} bg={true} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
