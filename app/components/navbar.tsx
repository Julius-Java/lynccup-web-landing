"use client";

import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { TextShimmer } from "./motion-ui/text-shimmer";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AppStoreLink from "./app-store-link";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		function triggerScrolled() {
			if (window.scrollY >= 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		}

		window.addEventListener("scroll", triggerScrolled);

		return () => {
			window.removeEventListener("scroll", triggerScrolled);
		};
	}, []);
	return (
		<nav
			className={cn(
				"p-4 md:px-5 lg:py-5",
				scrolled && "w-full fixed left-0 top-0 z-[9999999999999]"
			)}
		>
			<section
				className={cn(
					"flex items-center justify-between lg:container lg:mx-auto transition-all duration-300 ease-in-out",
					scrolled &&
						"bg-black/90 backdrop-blur-sm rounded-full py-4 px-6 z-[99999999] lg:max-w-4xl"
				)}
			>
				<Link href={"/"} className="block">
					<Image
						src={logo}
						alt="Lynccup logo"
						className="lg:w-[150px]"
					/>
				</Link>
				<span className="block capitalize text-gray  text-xs md:text-sm lg:text-lg">
					<AppStoreLink>
						<TextShimmer className=" [--base-gradient-color:theme(colors.white)]">
							download mobile app
						</TextShimmer>
					</AppStoreLink>
				</span>
			</section>
		</nav>
	);
}
