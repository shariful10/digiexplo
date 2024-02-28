"use client";
import Link from "next/link";
import { Axios } from "@/lib/axios";
import { useQuery } from "react-query";
import { CategoryType } from "../types";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";

const BrowseByCategory = () => {
  const { data: categories = [] } = useQuery(["categories"], async () => {
    try {
      const res = await Axios.get(`users/get-categories`);
      return res?.data?.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch category data");
    }
  });

  const categoryToUrl = (title: string) => {
    const splitUrl = title.split(" ");
    const url = splitUrl.join("-").toLowerCase();
    return url;
  };

  return (
    <div className="mt-10 mb-11">
      <SectionTitle title="Browse By" subtitle="Category" />
      <SectionDesc description="Our Categories are Extraordinary" />
      <div className="pt-5 grid grid-cols-2 gap-4 md:flex md:gap-5 justify-center">
        {categories.map(({ _id, title }: CategoryType) => (
          <Link key={_id} href={`/${categoryToUrl(title)}`}>
            <div className="bg-secondary rounded-lg p-2 md:p-5 flex flex-col items-center gap-2 capitalize md:w-[200px] hover:bg-primary hover:text-white duration-500 cursor-pointer">
              <p>{title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
