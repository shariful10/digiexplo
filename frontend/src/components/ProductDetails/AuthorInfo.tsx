import Image from "next/image";
import React from "react";
import { FiUser } from "react-icons/fi";

interface AuthorInfo {
  authorName: string;
  avatar: string;
  address: string;
}

const AuthorInfo = ({ author }: { author: AuthorInfo }) => {
  return (
    <div className="bg-secondary rounded-xl p-8 mb-8  ">
      <h4 className="uppercase font-semibold flex items-center justify-center gap-2 mb-8">
        <FiUser /> Author Information
      </h4>
      <div className="flex items-center gap-2.5">
        <Image
          src={author.avatar}
          width={90}
          height={90}
          alt="Business Brochure Template Featured"
          className="rounded-xl bg-cover max-h-[90px] h-full"
        />
        <div>
          <p className="font-bold leading-[22px]">{author.authorName}</p>
          <p className="text-sm text-gray-500 mb-1.5">{author.address}</p>
          <button className="text-white hover:text-black border border-secondary hover:border-primary capitalize hover:bg-gray-100 bg-primary duration-300 transition-all ease-in-out py-1.5 px-3 rounded-full text-xs font-semibold">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
