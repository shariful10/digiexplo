import React from "react";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";

const images = [
	{
		id: 1,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
		title: "Cherry Blossom Nature Photo",
		price: 12,
		vendor_name: "Alivia Adkins",
		category: "Graphics",
	},
	{
		id: 2,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
		title: "Business Brochure Template",
		price: 14,
		vendor_name: "Alivia Adkins",
		category: "Photo",
	},
	{
		id: 3,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
		title: "Business Brochure Template",
		price: 11,
		vendor_name: "Alivia Adkins",
		category: "video",
	},
	{
		id: 4,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
		title: "Business Brochure Template",
		price: 22,
		vendor_name: "audio",
		category: "",
	},
	{
		id: 5,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
		title: "Business Brochure Template",
		price: 15,
		vendor_name: "photo",
		category: "Alivia Adkins",
	},
	{
		id: 6,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
		title: "Business Brochure Template",
		price: 14,
		vendor_name: "audio",
		category: "Alivia Adkins",
	},
	{
		id: 7,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
		title: "Business Brochure Template",
		price: 12,
		vendor_name: "Alivia Adkins",
		category: "video",
	},
	{
		id: 8,
		image: "https://dummyimage.com/640x420/a8a6a6/fff",
		title: "Business Brochure Template",
		price: 16,
		vendor_name: "Alivia Adkins",
		category: "photo",
	},
];

const ImageCard = ({ className }: {className?: string}) => {
	return (
		<div className={`mt-10 grid md:grid-cols-2 ${className} gap-6`}>
			{images.map(({ id, image, title, price, vendor_name, category }) => (
				<div key={id} className="cursor-pointer">
					<Image
						src={image}
						width={100}
						height={500}
						className="rounded-xl w-full"
						alt="image"
					/>
					<div className="mt-5 text-textColor">
						<div className="flex justify-between font-bold">
							<p className="">{title}</p>
							<span className="text-primary">
								<FormattedPrice amount={price} />
							</span>
						</div>
						<p className="">
							by <span className="font-medium">{vendor_name}</span> in{" "}
							<span className="font-medium">{category}</span>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ImageCard;
