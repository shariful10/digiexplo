import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { bigContentData } from "./data";

const BigContent = () => {
	return (
		<>
			{bigContentData.map((data, i) => (
				<div key={i} className="mb-5 md:mb-10">
					<h5 className="text-base text-darkBlue mb-5 font-semibold">
						{data.heading}
					</h5>
					<p className="text-base text-descColor mb-5 text-justify">
						{data.subHeading}
					</p>
					<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
						<FaRegDotCircle
							className="text-black mt-1 w-[7%] md:w-[2%]"
							size={16}
						/>
						<span className="w-[90%]">{data?.a}</span>
					</p>
					<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
						<FaRegDotCircle
							className="text-black mt-1 w-[7%] md:w-[2%]"
							size={16}
						/>
						<span className="w-[90%]">{data?.b}</span>
					</p>
					<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
						<FaRegDotCircle
							className="text-black mt-1 w-[7%] md:w-[2%]"
							size={16}
						/>
						<span className="w-[90%]">{data?.c}</span>
					</p>
					<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
						<FaRegDotCircle
							className="text-black mt-1 w-[7%] md:w-[2%]"
							size={16}
						/>
						<span className="w-[90%]">{data?.d}</span>
					</p>
					<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
						<FaRegDotCircle
							className="text-black mt-1 w-[7%] md:w-[2%]"
							size={16}
						/>
						<span className="w-[90%]">{data?.e}</span>
					</p>
					{data.f && (
						<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
							<FaRegDotCircle
								className="text-black mt-1 w-[7%] md:w-[2%]"
								size={16}
							/>
							<span className="w-[90%]">{data?.f}</span>
						</p>
					)}
					{data.g && (
						<p className="text-base text-descColor mb-5 flex gap-2 text-justify">
							<FaRegDotCircle
								className="text-black mt-1 w-[7%] md:w-[2%]"
								size={16}
							/>
							<span className="w-[90%]">{data?.g}</span>
						</p>
					)}
				</div>
			))}
		</>
	);
};

export default BigContent;
