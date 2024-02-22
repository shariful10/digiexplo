import Link from "next/link";
import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { TandCData } from "./data";

interface TAndCProps {
   from: number,
   to: number,
}

const TAndCContent = ({ from, to }: TAndCProps) => {
	return (
		<>
			{TandCData.slice(from, to).map(
				(
					{
						heading,
						desc,
						desc2,
						descChild,
						descChild2,
						descChild3,
						descChild4,
					},
					i
				) => (
					<div key={i} className="mb-5 md:mb-10">
						<h5 className="text-base text-darkBlue mb-5 font-semibold">
							{heading}
						</h5>
						<p className="text-base text-descColor mb-5 text-justify">
							{desc}
						</p>
						{descChild && (
							<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
								<FaRegDotCircle
									className="text-black mt-1 w-[7%] md:w-[2%]"
									size={16}
								/>
								<span className="w-[90%]">{descChild}</span>
							</p>
						)}
						{descChild2 && (
							<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
								<FaRegDotCircle
									className="text-black mt-1 w-[7%] md:w-[2%]"
									size={16}
								/>
								<span className="w-[90%]">{descChild2}</span>
							</p>
						)}
						{descChild3 && (
							<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
								<FaRegDotCircle
									className="text-black mt-1 w-[7%] md:w-[2%]"
									size={16}
								/>
								<span className="w-[90%]">{descChild3}</span>
							</p>
						)}
						{descChild4 && (
							<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
								<FaRegDotCircle
									className="text-black mt-1 w-[7%] md:w-[2%]"
									size={16}
								/>
								<span className="w-[90%]">{descChild4}</span>
							</p>
						)}
						{desc2 && (
							<p className="text-base text-descColor mb-5 text-justify">
								{desc2}{" "}
								<Link href="/" className="text-primary hover:underline">
									www.DiGiExplo.com
								</Link>{" "}
								<span>
									you grant us a worldwide, non-exclusive,
									royalty-free, sublicensable, and transferable license
									to use, reproduce, distribute, prepare derivative
									works of, display, and perform the Content in
									connection with the Services and our business,
									including without limitation for promoting and
									redistributing part or all of the Services (and
									derivative works thereof) in any media formats and
									through any media channels.
								</span>
							</p>
						)}
					</div>
				)
			)}
		</>
	);
};

export default TAndCContent;
