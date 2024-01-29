import React from "react";

interface HeadingProps {
	title: string;
	subtitle: string;
}

const SectionTitle = ({ title, subtitle }: HeadingProps) => {
	return (
		<h2 className="font-bold text-[48px] text-textColor text-center mb-2">
			{title} <span className="text-primary">{subtitle}</span>
		</h2>
	);
};

export default SectionTitle;
