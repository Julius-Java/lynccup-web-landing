import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { TextShimmer } from "./motion-ui/text-shimmer";

export default function Navbar() {
	return (
		<nav className="p-4 md:px-5 lg:py-5">
			<section className="flex items-center justify-between lg:container lg:mx-auto">
				<Link href={"/"} className="block">
					<Image src={logo} alt="Lynccup logo" className="lg:w-[150px]" />
				</Link>
				<a
					href="#"
					target="_blank"
					className="block capitalize text-gray  text-xs md:text-sm lg:text-lg"
				>
					<TextShimmer className=" [--base-gradient-color:theme(colors.white)]">
						download mobile app
					</TextShimmer>
				</a>
			</section>
		</nav>
	);
}
