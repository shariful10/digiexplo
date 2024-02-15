import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { UserProvider } from "@/components/Context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Toaster />
				<UserProvider>{children}</UserProvider>
			</body>
		</html>
	);
}
