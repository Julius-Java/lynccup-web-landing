import type { Metadata } from "next";
import { ibm_plex_sans_medium, ibm_plex_sans_bold } from "./components/ui/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
	title: "Lynccup | Web",
	description: "Lynccup is a social platform to buy and sell event tickets. It helps everyone interact with eachother, create, manage and book tickets for unforgettable experiences.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/icon?<generated>"
					type="image/<generated>"
					sizes="32x32"
				/>
			</head>
			<body
				className={cn('antialiased', ibm_plex_sans_medium.className, ibm_plex_sans_bold.variable)}
			>
				<Navbar/>
				{children}
			</body>
		</html>
	);
}
