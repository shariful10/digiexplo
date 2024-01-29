import Link from "next/link";
import Image from "next/image";

const SingleBlogBanner = () => {
	const image =
		"https://mayosis.themepreview.xyz/mayovendor/wp-content/uploads/sites/16/2020/06/pexels-indra-gunawan-398154.jpg";
	return (
		<div className="bg-secondary p-5 md:p-10 lg:p-20 rounded-2xl md:flex items-center gap-6">
			<Image
				src={image}
				width={600}
				height={400}
				className="rounded-2xl"
				alt=""
			/>
			<div className="text-textColor mt-5 md:mt-0">
				<h3 className="text-2xl md:text-[36px] font-bold">
					Know point startup reached concise.
				</h3>
				<p className="">
					in
					<Link href={"#"} className="font-medium">
						Classic Music
					</Link>
					on
					<Link href={"#"} className="font-medium">
						June 11, 2023
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SingleBlogBanner;
