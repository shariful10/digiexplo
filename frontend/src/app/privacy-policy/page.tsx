import { Metadata } from "next";
import BigContent from "@/components/BigContent";
import LinkContent from "@/components/LinkContent";
import { informationData } from "@/components/data";
import SmallContent from "@/components/SmallContent";
import SectionTopBanner from "@/components/SectionTopBanner";

export const metadata: Metadata = {
	title: "Privacy Policy | Digi Explo",
	description: "A Multivendor Shop",
};

const PrivacyPolicy = () => {
	return (
		<div className="md:w-5/6 mx-auto px-5 md:px-10">
			<SectionTopBanner
				href="/privacy-policy"
				heading="Privacy Policy"
				subHeading="Privacy Policy"
			/>
			<div className="mb-5 md:mb-10">
				<p className="text-darkBlue">
					<span className="font-semibold">Last Updated:</span> 13/02/2024
				</p>
				<div className="mt-5">
					<LinkContent
						url="/"
						urlTitle="https://digiexpo.com"
						firstDesc="At DiGiExplo ('we,' 'us,' or 'our'), we are committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, and disclose your personal information when you access or use our website located at"
						lastDesc="and the digital content sales services we provide (collectively, the 'Services'). By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy"
					/>
					<div>
						<h5 className="text-base text-darkBlue mb-5 font-semibold">
							Information We Collect
						</h5>
						{informationData.map(({ desc }, i) => (
							<p
								key={i}
								className="text-base text-descColor mb-5 text-justify"
							>
								{desc}
							</p>
						))}
					</div>
					<BigContent />
					<SmallContent />
					<LinkContent
						url="mailto:info@DiGiExplo.com"
						urlTitle="info@DiGiExplo.com"
						heading="Contact Us"
						firstDesc="If you have any questions or concerns about this Privacy Policy, please contact us at"
					/>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
