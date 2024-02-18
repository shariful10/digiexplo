"use client"
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { UserProvider } from "@/components/Context/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <UserProvider>{children}</UserProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
