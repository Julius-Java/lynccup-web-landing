import Image from "next/image";
import iphone from "@/public/iphone.svg";
// import { getRandomColor } from "@/lib/utils";
import { InView } from "./components/motion-ui/in-view";
import { Button } from "./components/button-main";
import phone from "@/public/phone.svg";
import LevitateEffect from "./components/motion-ui/levitate-effect";
import CategoriesMarquee from "./components/categories-marquee";
import FeatureTabs from "./components/feature-tabs";
import AppStoreLink from "./components/app-store-link";

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<section
				id="hero"
				className="min-h-[calc(100vh_-_80px)] lg:min-h-[calc(100vh_-_108px)] px-3 flex flex-col gap-y-12 items-center justify-center lg:flex-row lg:justify-normal lg:container lg:mx-auto lg:gap-x-5 py-14 lg:py-0"
			>
				<div className="space-y-7 text-center max-w-xs mx-auto lg:mx-0 lg:text-left lg:max-w-2xl">
					<h1 className="font-ibm_sans_bold font-[600] text-3xl lg:text-5xl xl:text-6xl">
						Bringing events and social media together
					</h1>

					<p className="text-lg lg:max-w-xl">
						Lynccup is a social platform to buy and sell event
						tickets. It helps everyone interact with eachother,
						create, manage and book tickets for unforgettable
						experiences.
					</p>

					{/* <InView
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
					> */}
					<AppStoreLink>
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
					</AppStoreLink>
					{/* </InView> */}
				</div>
				<div className="relative max-w-max mx-auto block">
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
								width={600}
								className="mx-auto z-10 lg:w-full"
							/>
						</LevitateEffect>
					</InView>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full bg-[rgb(189_76_76_/0.24)]  filter blur-[150px] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]" />
				</div>
			</section>

			<section className="px-3 py-16 space-y-10">
				<div className="space-y-4 text-center lg:space-y-0 lg:flex lg:container lg:mx-auto lg:text-left lg:justify-between">
					<h2 className="font-[600] text-2xl lg:text-4xl lg:w-[40%]">
						Events for every passion!
					</h2>
					<p className="max-w-md mx-auto lg:mx-0 lg:max-w-none lg:w-[60%]">
						From big gatherings to hangouts with friends and
						families, Lynccup connects you to a world of diverse
						experiences, making it easy to find and join events that
						match your energy. Download Lynccup and start exploring
						today!
					</p>
				</div>
				{/* Marquee */}
				<CategoriesMarquee />
			</section>

			<section className="lg:container lg:mx-auto px-3 py-16 space-y-6">
				<FeatureTabs />
			</section>
		</main>
	);
}
