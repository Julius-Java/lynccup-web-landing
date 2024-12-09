"use client";

import mic from "@/public/mic.svg";
import stars from "@/public/stars.svg";
import heart from "@/public/heart.svg";
import fashion from "@/public/fashion.svg";
import music from "@/public/music.svg";
import hands from "@/public/hands.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CATEGORIES = [
	{
		label: "concerts",
		icon: mic,
	},
	{
		label: "culture & lifestyle",
		icon: heart,
	},
	{
		label: "festival",
		icon: stars,
	},
	{
		label: "fashion",
		icon: fashion,
	},
	{
		label: "music",
		icon: music,
	},
	{
		label: "politics",
		icon: hands,
	},
];

export default function CategoriesMarquee() {
	return (
		<Marquee autoFill>
			{CATEGORIES.map((category, _) => {
				return (
					<div
						className="border border-[#1F1F1F] rounded-xl py-4 px-6 flex flex-col gap-y-3 justify-center items-center text-gray min-w-[150px] mr-8"
						key={_}
					>
						<Image src={category.icon} alt="" />
						<span className="capitalize text-sm">
							{category.label}
						</span>
					</div>
				);
			})}
		</Marquee>
	);
}
