import Image from "next/image";
import iphone from "@/public/iphone.svg";
import ellipse from "@/public/ellipse.svg";
import { TextEffect } from "./components/motion-ui/text-effect";
import { getRandomColor } from "@/lib/utils";
import { InView } from "./components/motion-ui/in-view";
import { Button } from "./components/button-main";
import phone from "@/public/phone.svg";
import LevitateEffect from "./components/motion-ui/levitate-effect";

export default function Home() {
	return (
		<main>
			<section
				id="hero"
				className="h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_107px)]    px-3 flex flex-col items-center justify-center lg:flex-row lg:justify-normal lg:container lg:mx-auto"
			>
				<div className="space-y-7 text-center max-w-xs mx-auto lg:mx-0 lg:text-left lg:max-w-2xl">
					<TextEffect
						per="word"
						as="h1"
						delay={0.3}
						className="font-ibm_sans_bold font-[600] text-3xl md:text-4xl lg:text-6xl"
						variants={{
							container: {
								hidden: { opacity: 0 },
								visible: {
									opacity: 1,
									transition: {
										staggerChildren: 0.05,
									},
								},
							},
							item: {
								hidden: {
									opacity: 0,
									y: Math.random() * 100 - 50,
									rotate: Math.random() * 90 - 45,
									scale: 0.3,
									color: getRandomColor(),
								},
								visible: {
									opacity: 1,
									y: 0,
									rotate: 0,
									scale: 1,
									color: "#ffffff",
									transition: {
										type: "spring",
										damping: 12,
										stiffness: 100,
									},
								},
							},
						}}
					>
						Bringing events and social media together
					</TextEffect>
					<InView
						variants={{
							hidden: {
								opacity: 0,
								scale: 1.5,
							},
							visible: {
								opacity: 1,
								scale: 1,
							},
						}}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						viewOptions={{ margin: "0px 0px -350px 0px" }}
					>
						<p className="text-lg lg:max-w-xl">
							Lynccup is a social platform to buy and sell event
							tickets. It helps everyone interact with eachother,
							create, manage and book tickets for unforgettable
							experiences.
						</p>
					</InView>
					<InView
						variants={{
            hidden: {
								opacity: 0,
								x: 100,
							},
							visible: {
								opacity: 1,
								x: 0,
							},
						}}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<Button
							variant={"outline"}
							size={"md"}
							className="flex items-center justify-center gap-x-3 mx-auto lg:mx-0"
						>
							<Image src={phone} alt="" />
							<span className="block font-[600]">
								Get the App
							</span>
						</Button>
					</InView>
				</div>
				<div className="relative max-w-max mx-auto hidden lg:block">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: -150,
							},
							visible: {
								opacity: 1,
								y: 0,
							},
						}}
						transition={{
							duration: 0.8,
							ease: "easeIn",
							bounce: 0.5,
						}}
					>
						<LevitateEffect>
							<Image
								src={iphone}
								alt="Lynccup App Screenshot"
								width={1000}
								className="mx-auto z-10 lg:w-full"
							/>
						</LevitateEffect>
					</InView>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full bg-[rgb(189_76_76_/0.24)]  filter blur-[150px] h-[500px] w-[500px]" />
				</div>
			</section>
		</main>
	);
}
