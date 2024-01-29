import Link from "next/link";
import React from "react";

interface FooterProps {
	title: string;
	item1?: string;
	item2?: string;
	item3?: string;
	item4?: string;
}

const FooterCol = ({ title, item1, item2, item3, item4 }: FooterProps) => {
	return (
		<div>
			<h4 className="text-2xl font-semibold mb-5">{title}</h4>
			<div className="flex flex-col gap-2">
				<Link
					href="#"
					className="text-base hover:text-primary duration-300"
				>
					{item1}
				</Link>
				<Link
					href="#"
					className="text-base hover:text-primary duration-300"
				>
					{item2}
				</Link>
				<Link
					href="#"
					className="text-base hover:text-primary duration-300"
				>
					{item3}
				</Link>
				<Link
					href="#"
					className="text-base hover:text-primary duration-300"
				>
					{item4}
				</Link>
			</div>
		</div>
	);
};

export default FooterCol;
