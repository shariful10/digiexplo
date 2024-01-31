"use client";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";
import { items } from "../Sidebar";

const BrowseByCategory = () => {
	return (
		<div className="mt-10 mb-11">
			<SectionTitle title="Browse By" subtitle="Category" />
			<SectionDesc description="Our Categories are Extraordinary" />
			<div className="pt-5 flex gap-5 justify-center">
				{items.slice(1, 6).map(({ id, title, Icon }) => (
					<div key={id}>
						<div className="bg-secondary rounded-lg p-5 flex flex-col items-center gap-2 capitalize w-[200px] hover:bg-primary hover:text-white duration-500 cursor-pointer">
							<Icon className="text-2xl" />
							<h1>{title}</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BrowseByCategory;
