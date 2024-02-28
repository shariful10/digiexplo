import React from "react";

const SectionDesc = ({ description }: { description: string }) => {
	return (
		<p className="text-[17px] text-descColor text-center mb-5 capitalize">
			{description}
		</p>
	);
};

export default SectionDesc;
