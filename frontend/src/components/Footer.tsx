import React from "react";
import Link from "next/link"
import Image from "next/image"
import Container from "./Container";
import logo from "@/images/logo.webp";

const Footer = () => {
	return <footer className="bg-[#EFF4F7]">
      <Container>
         <div className="pt-20 pb-[60px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
               <div>
                  <Link href="/" className="mb-5">
                     <Image src={logo} className="w-[100px]" alt="logo" />
                  </Link>
                  <p>Monotonectally fabricate magnetic e-tailers via optimal processes. Appropriately initiate cross-media infrastructures and proactive interfaces. Dynamically cultivate after interoperable.</p>
               </div>
            </div>
         </div>
      </Container>
   </footer>;
};

export default Footer;
