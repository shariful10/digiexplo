import React from "react";
import Link from "next/link";

interface DashboardHeaderProps {
  url: string;
  title: string;
  currentPage: string;
}

const DashboardHeader = ({ url, currentPage, title }: DashboardHeaderProps) => {
  return (
    <div className="p-7 md:p-10">
      <p className="flex items-center gap-1 font-medium italic">
        <Link
          href={`/${url}`}
          className="text-neutral-400 hover:text-black duration-300"
        >
          {url}
        </Link>
        /<span>{currentPage}</span>
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold mt-10 text-neutral-800 capitalize">
        {title}
      </h2>
    </div>
  );
};

export default DashboardHeader;
