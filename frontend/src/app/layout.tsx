"use client";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "@/components/AuthProvider";

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
          <UserProvider>
            <Toaster />
            {children}
          </UserProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
