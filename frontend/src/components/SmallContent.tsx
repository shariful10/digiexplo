import React from "react";
import { smallContentData } from "./data";

const SmallContent = () => {
	return (
		<div>
			{smallContentData.map(({ heading, desc }, i) => (
				<div key={i} className="">
					<h5 className="text-base text-darkBlue mb-5 font-semibold">
						{heading}
					</h5>
					<p className="text-base text-descColor mb-5 text-justify">
						{desc}
					</p>
				</div>
			))}
		</div>
	);
};

export default SmallContent;
