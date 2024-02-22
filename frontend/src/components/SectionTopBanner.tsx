import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

interface BannerProps {
   href: string,
   heading: string,
   subHeading: string,
}

const SectionTopBanner = ({ href, heading, subHeading }: BannerProps) => {
	return (
		<div className="bg-secondary px-5 py-10 md:p-10 lg:p-40 rounded-2xl my-5 md:my-10">
			<div className="text-textColor mt-5 lg:mt-0 text-center">
				<h3 className="text-2xl md:text-[36px] font-bold">{heading}</h3>
				<p className="mt-5 flex justify-center items-center gap-1 text-sm">
					<Link href="/" className="font-medium hover:text-primary">
						Home
					</Link>
					<FaAngleRight />
					<Link href={href} className="font-medium hover:text-primary">
						{subHeading}
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SectionTopBanner;
