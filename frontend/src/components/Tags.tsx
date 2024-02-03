import React from "react";
import Link from "next/link";
import { CgTag } from "react-icons/cg";

type PropsType = {
	bg: boolean;
	title: string;
	tags: string[];
	icon?: boolean;
	center?: boolean;
   colon?: boolean;
};

const Tags = ({ icon, tags, title, bg, center, colon }: PropsType) => {
	return (
		<>
			<div className={`${bg && "bg-secondary"} rounded-xl ${bg && "p-8"}`}>
				<h4
					className={`flex justify-center ${
						!center && "lg:justify-start"
					} items-center gap-2.5 text-base font-bold mb-8`}
				>
					{icon && <CgTag size={20} className="text-xl -rotate-45" />}
					{title}{colon && <span>:</span>}
				</h4>
				{tags?.map((tag, index) => (
					<Link href="#" key={index}>
						<button
							className={
								"px-3 py-1 text-sm border border-gray-400 hover:border-textColor rounded-full mr-1.5 my-1.5 hover:text-white hover:bg-textColor duration-300 transition-all ease-in-out"
							}
						>
							{tag}
						</button>
					</Link>
				))}
			</div>
		</>
	);
};

export default Tags;
