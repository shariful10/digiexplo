import Link from "next/link";
import React from "react";

interface LinkedContentProps {
	url: string;
   heading?: string,
	firstDesc: string;
	lastDesc?: string;
	urlTitle: string;
}

const LinkContent = ({
	url,
   heading,
	firstDesc,
	lastDesc,
	urlTitle,
}: LinkedContentProps) => {
	return (
		<div className="mb-5 md:mb-10">
         <h5 className="text-base text-darkBlue mb-5 font-semibold">
            {heading}
         </h5>
         <p className="text-base text-descColor mb-5 text-justify">
            {firstDesc}{" "}
            <Link href={url} className="text-primary hover:underline">
               {urlTitle}
            </Link>{" "}
            {lastDesc}
         </p>
      </div>
	);
};

export default LinkContent;
