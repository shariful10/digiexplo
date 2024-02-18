"use client"
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { UserProvider } from "@/components/Context/UserContext";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

   const getUserData = async () => {
    const res = await fetch('user-dat/id')
   }
   useEffect(()=> {
    getUserData()
   })
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <UserProvider  >{children}</UserProvider>
      </body>
    </html>
  );
}
