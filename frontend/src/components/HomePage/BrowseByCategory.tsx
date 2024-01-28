"use client";
import React from "react";
import { items } from "../Sidebar";
import SectionDesc from "../SectionDesc";
import SectionTitle from "../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const BrowseByCategory = () => {
	return (
		<div className="mt-10 mb-11">
			<SectionTitle title="Browse By" subtitle="Category" />
			<SectionDesc description="Our Categories are Extraordinary" />
			<div className="pt-5">
				<Swiper slidesPerView={5} className="mySwiper">
					{items.map(({ id, title, Icon }) => (
						<SwiperSlide key={id}>
							<div className="bg-secondary rounded-lg p-5 flex flex-col items-center gap-2 capitalize w-[200px] hover:bg-primary hover:text-white duration-500 cursor-pointer">
								<Icon className="text-2xl" />
								<h1>{title}</h1>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default BrowseByCategory;
