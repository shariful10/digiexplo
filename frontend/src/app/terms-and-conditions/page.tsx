import { Metadata } from "next";
import LinkContent from "@/components/LinkContent";
import TAndCContent from "@/components/TAndCContent";
import SectionTopBanner from "@/components/SectionTopBanner";

export const metadata: Metadata = {
	title: "Terms & Conditions | Digi Explo",
	description: "A Multivendor Shop",
};

const TermsAndConditions = () => {
	return (
		<div className="md:w-5/6 mx-auto px-5 md:px-10">
			<SectionTopBanner
				href="/terms-and-conditions"
				heading="Terms & Conditions"
				subHeading="Terms & Conditions"
			/>
			<div>
				<LinkContent
					url="/"
					urlTitle="https://digiexpo.com"
					firstDesc="Welcome to DiGiExplo! These Terms and Conditions (Terms) govern
					your use of our website located at"
					lastDesc="and the digital content sales services we provide (collectively, the Services). By using our Services, you agree to be bound by these Terms. Please read them carefully."
				/>
				<TAndCContent from={0} to={3} />
            <LinkContent
					url="/privacy-policy"
					urlTitle="Policy policy"
               heading="Copyright Infringement"
					firstDesc="Welcome to DiGiExplo! These Terms and Conditions (Terms) govern
					your use of our website located at"
					lastDesc="to submit a notice of infringement."
				/>
				<TAndCContent from={3} to={4} />
            <LinkContent
					url="/"
					urlTitle="www.DiGiExplo.com"
               heading="Limitation of Liability"
					firstDesc="In no event shall"
					lastDesc="it's affiliates, directors, employees, or agents be liable for
               any indirect, incidental, special, consequential, or punitive
               damages, including but not limited to loss of profits, data,
               use, or goodwill, arising out of or in connection with your
               use of our Services or these Terms."
				/>
				<TAndCContent from={4} to={6} />
            <LinkContent
					url="/"
					urlTitle="www.DiGiExplo.com"
               heading="Indemnification"
					firstDesc="You agree to indemnify, defend, and hold harmless"
					lastDesc="it's affiliates, directors, employees, and agents from and
               against any and all claims, liabilities, damages, losses, or
               expenses, including reasonable attorneys' fees and costs,
               arising out of or in any way connected with your access to or
               use of the Services, your submission of Content, or your
               violation of these Terms."
				/>
            <LinkContent
					url="/"
					urlTitle="www.DiGiExplo.com"
               heading="Disclaimers"
					firstDesc="Our Services are provided on an 'as is' and 'as available'
               basis, without any warranties of any kind, either express or
               implied, including but not limited to warranties of
               merchantability, fitness for a particular purpose, or
               non-infringement."
					lastDesc="does not warrant that the Services will be uninterrupted,
               secure, or error-free, or that any defects in the Services
               will be corrected."
				/>
            <LinkContent
					url="/privacy-policy"
					urlTitle="Privacy Policy"
               heading="Privacy"
					firstDesc="Your privacy is important to us. Please review our"
					lastDesc="to understand how we collect, use, and disclose your personal
               information in connection with the Services."
				/>
				<TAndCContent from={6} to={7} />
            <LinkContent
					url="mailto:info@DiGiExplo.com"
					urlTitle="info@DiGiExplo.com"
               heading="Contact Us"
					firstDesc="If you have any questions about these Terms, please contact us
               at"
				/>
			</div>
		</div>
	);
};

export default TermsAndConditions;
