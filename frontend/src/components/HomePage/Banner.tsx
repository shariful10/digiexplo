import Image from "next/image";
import React from "react";
import b1 from "@/images/b1.png";
import b2 from "@/images/b2.png";
import b3 from "@/images/b3.jpg";
import b4 from "@/images/b4.jpg";
import b5 from "@/images/b5.jpg";
import b6 from "@/images/b6.jpg";
import b7 from "@/images/b7.jpg";
import Link from "next/link";

const images = [
	{
		id: 1,
		image: b1,
	},
	{
		id: 2,
		image: b2,
	},
	{
		id: 3,
		image: b3,
	},
	{
		id: 4,
		image: b4,
	},
	{
		id: 5,
		image: b5,
	},
	{
		id: 6,
		image: b6,
	},
	{
		id: 7,
		image: b7,
	},
	{
		id: 8,
		image: b1,
	},
	{
		id: 9,
		image: b2,
	},
	{
		id: 10,
		image: b3,
	},
	{
		id: 11,
		image: b4,
	},
	{
		id: 12,
		image: b5,
	},
	{
		id: 13,
		image: b6,
	},
	{
		id: 14,
		image: b7,
	},
	{
		id: 15,
		image: b1,
	},
	{
		id: 16,
		image: b2,
	},
	{
		id: 17,
		image: b3,
	},
	{
		id: 18,
		image: b4,
	},
	{
		id: 19,
		image: b5,
	},
	{
		id: 20,
		image: b6,
	},
	{
		id: 21,
		image: b7,
	},
];

const Banner = () => {
	return (
		<div className="mt-10 mb-[60px] bg-gradient-to-b from-primary to-[#002562] px-5 py-14 md:px-20 md:py-[120px] rounded-2xl text-white relative overflow-hidden">
			<div className="absolute -top-20 -right-20 hidden md:grid grid-cols-3 gap-5 rotate-45">
				{images.map(({ id, image }) => (
					<div key={id} className="w-[180px] h-[135px] rounded-2xl hover:scale-110 duration-300 overflow-hidden">
						<Link href="#">
							<Image
								src={image}
								className="w-full h-full rounded-2xl"
								alt=""
							/>
						</Link>
					</div>
				))}
			</div>
			<div className="">
				<h1 className="text-[40px] leading-[55px] md:text-[72px] font-bold md:w-[60%] md:leading-[82px] uppercase">
					Lorem ipsum dolor sit amet.
				</h1>
				<p className="text-base md:text-lg my-5 md:w-1/2">
					Have the to of lose he least unmolested receive fixed is the of
					moving by we monstrous in holding you at its little you attempt.
				</p>
				<button className="bg-primary hover:bg-[#316dce] transition-all ease-in-out duration-500 font-medium text-white py-3 px-8 rounded-lg mt-5">
					Explore Now
				</button>
			</div>
		</div>
	);
};

export default Banner;
