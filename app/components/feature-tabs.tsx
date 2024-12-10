"use client";
import { Button } from "./button-main";
import Image from "next/image";
import phone from "@/public/phone.svg";
import FeatureCard from "./feature-card";
import demo1 from "@/public/demo1.svg";
import demo2 from "@/public/demo2.svg";
import demo3 from "@/public/demo3.svg";
import demo4 from "@/public/demo4.svg";
import demo5 from "@/public/demo5.svg";
// import demo6 from "@/public/demo6.svg";
import middleDemo from "@/public/middle-demo.svg";
import leftDemo from "@/public/left-demo.svg";
import rightDemo from "@/public/right-demo.svg";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import AppStoreLink from "./app-store-link";

import { InView } from "./motion-ui/in-view";

export default function FeatureTabs() {
	const [activeTab, setActiveTab] = useState<"organizers" | "attendees">(
		"organizers"
	);

	return (
		<AnimatePresence>
			<motion.div key={activeTab}>
				{/* Tab Header */}
				<div className="py-4 border-b border-[#1F1F1F] flex items-center justify-between w-full flex-wrap gap-4">
					<div className="flex items-center gap-x-3">
						<Button
							size={"sm"}
							className="rounded-full lg:h-12 lg:px-[19px]"
							onClick={() => setActiveTab("organizers")}
							variant={
								activeTab === "organizers"
									? "primary"
									: "outline"
							}
						>
							For event organizers
						</Button>
						<Button
							size={"sm"}
							className="rounded-full lg:h-12 lg:px-[19px]"
							variant={
								activeTab === "attendees"
									? "primary"
									: "outline"
							}
							onClick={() => setActiveTab("attendees")}
						>
							For attendees
						</Button>
					</div>
					<div>
						<AppStoreLink>
							<Button
								variant={"outline"}
								size={"sm"}
								className="flex items-center justify-center gap-x-3 mx-auto lg:mx-0 lg:h-12 lg:px-[19px]"
							>
								<Image src={phone} alt="" width={10} />
								<span className="block font-[600]">
									Get the App
								</span>
							</Button>
						</AppStoreLink>
					</div>
				</div>

				{/* Tab Content */}
				<div>
					{activeTab === "organizers" && (
						<motion.div
							initial={{
								scale: 0.1,
							}}
							animate={{
								scale: 1,
							}}
							exit={{
								scale: 0.1,
							}}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
						>
							<OrganizersTabContent />
						</motion.div>
					)}
					{activeTab === "attendees" && (
						<motion.div
							initial={{
								scale: 0.1,
							}}
							animate={{
								scale: 1,
							}}
							exit={{
								scale: 0.1,
							}}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
						>
							<AttendeesTabContent />
						</motion.div>
					)}
				</div>
			</motion.div>

			<section className="px-3 py-20 space-y-8 md:max-w-2xl md:mx-auto lg:max-w-5xl">
				<div className="space-y-4 text-center">
					<h3 className="font-ibm_sans_bold font-[600] text-2xl lg:text-4xl">
						{activeTab === "organizers"
							? "Ready to make your next event unforgettable?"
							: "Find, book, and experience events like never before"}
					</h3>
					<p className="">
						{activeTab === "organizers"
							? "Join Lynccup and let your events shine!"
							: "Get started with Lynccup now!"}
					</p>
				</div>
				<div className="max-w-max mx-auto">
					<AppStoreLink>
						<Button
							variant={"outline"}
							size={"lg"}
							className="flex items-center justify-center gap-x-3  lg:mx-0 px-12"
						>
							<Image src={phone} alt="" />
							<span className="block font-[600]">
								Get the App
							</span>
						</Button>
					</AppStoreLink>
				</div>
				<div className="bg-[#0B0C1C] rounded-xl pt-12 flex items-center justify-center">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								x: 150,
							},
							visible: {
								opacity: 1,
								x: 0,
							},
						}}
						transition={{ duration: 0.3, ease: "easeIn" }}
						className="lg:self-end hidden lg:block"
					>
						<Image
							src={leftDemo}
							alt=""
							className="translate-x-12"
						/>
					</InView>
					<InView
						variants={{
							hidden: {
								opacity: 0,
								scale: 0,
							},
							visible: {
								opacity: 1,
								scale: 1,
								zIndex: 100,
							},
						}}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<Image src={middleDemo} alt="" />
					</InView>

					<InView
						variants={{
							hidden: {
								opacity: 0,
								x: -150,
							},
							visible: {
								opacity: 1,
								x: 0,
							},
						}}
						transition={{ duration: 0.3, ease: "easeIn" }}
						className="lg:self-end hidden lg:block"
					>
						<Image
							src={rightDemo}
							alt=""
							className="-translate-x-12"
						/>
					</InView>
				</div>
			</section>
		</AnimatePresence>
	);
}

function OrganizersTabContent() {
	return (
		<div className="space-y-16 py-6 md:grid md:grid-cols-2  md:gap-x-7 md:gap-y-12 md:space-y-0 lg:block lg:space-y-20">
			<div className="lg:flex lg:items-center lg:justify-between gap-x-6 lg:space-y-0 space-y-5">
				<div className="lg:w-1/2">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								x: -150,
							},
							visible: {
								opacity: 1,
								x: 0,
							},
						}}
						transition={{
							duration: 0.8,
							ease: "easeIn",
							bounce: 0.5,
						}}
					>
						<FeatureCard>
							<h3 className="capitalize font-[600] text-xl lg:text-3xl">
								effortless event setup & management
							</h3>
							<p className="text-sm lg:text-base xl:text-lg leading-7 lg:leading-9 ">
								Design your event in minutes with customizable
								options for venues, dates, tickets, and other.
							</p>
						</FeatureCard>
					</InView>
				</div>
				<div className="bg-[#0B0C1C] rounded-xl flex items-center justify-center lg:w-1/2 pt-8">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 150,
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
						<Image src={demo1} alt="" />
					</InView>
				</div>
			</div>
			<div className="lg:flex lg:items-center lg:justify-between gap-x-6 lg:flex-row-reverse lg:space-y-0 space-y-5">
				<InView
					variants={{
						hidden: {
							opacity: 0,
							x: -150,
						},
						visible: {
							opacity: 1,
							x: 0,
						},
					}}
					transition={{
						duration: 0.8,
						ease: "easeIn",
						bounce: 0.5,
					}}
				>
					<FeatureCard>
						<h3 className="capitalize font-[600] text-xl  lg:text-3xl">
							streamlined ticket sales & management
						</h3>
						<p className="text-sm lg:text-base xl:text-lg leading-7 lg:leading-9 ">
							Sell tickets hassle-free with our secure and
							user-friendly platform, offering multiple payment
							options for your attendees.
						</p>
					</FeatureCard>
				</InView>
				<div className="bg-[#0B0C1C] rounded-xl flex items-center justify-center lg:w-1/2 pt-8">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 150,
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
						<Image src={demo2} alt="" />
					</InView>
				</div>
			</div>
			<div className="lg:flex lg:items-center lg:justify-between gap-x-6 lg:space-y-0 space-y-5">
				<InView
					variants={{
						hidden: {
							opacity: 0,
							x: -150,
						},
						visible: {
							opacity: 1,
							x: 0,
						},
					}}
					transition={{
						duration: 0.8,
						ease: "easeIn",
						bounce: 0.5,
					}}
				>
					<FeatureCard>
						<h3 className="capitalize font-[600] text-xl lg:text-3xl">
							real-time insights
						</h3>
						<p className="text-sm lg:text-base xl:text-lg leading-7 lg:leading-9 ">
							Track ticket sales, attendee numbers, and event
							performance with detailed analytics at your
							fingertips.
						</p>
					</FeatureCard>
				</InView>
				<div className="bg-[#0B0C1C] rounded-xl flex items-center justify-center lg:w-1/2 pt-8">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 150,
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
						<Image src={demo3} alt="" />
					</InView>
				</div>
			</div>
		</div>
	);
}

function AttendeesTabContent() {
	return (
		<div className="space-y-16 py-6 md:grid md:grid-cols-2 md:gap-5 md:gap-x-7 md:gap-y-12 md:space-y-0 lg:block lg:space-y-20">
			<div className="lg:flex lg:items-center lg:justify-between gap-x-6 lg:space-y-0 space-y-5">
				<div className="lg:w-1/2">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								x: -150,
							},
							visible: {
								opacity: 1,
								x: 0,
							},
						}}
						transition={{
							duration: 0.8,
							ease: "easeIn",
							bounce: 0.5,
						}}
					>
						<FeatureCard>
							<h3 className="capitalize font-[600] text-xl lg:text-3xl">
								personalized recommendations
							</h3>
							<p className="text-sm lg:text-base xl:text-lg leading-7 lg:leading-9 ">
								Explore a curated selection of events tailored
								to your interests from concerts to community
								gatherings. We suggest events based on your
								preferences, location and past bookings.
							</p>
						</FeatureCard>
					</InView>
				</div>
				<div className="bg-[#0B0C1C] rounded-xl flex items-center justify-center lg:w-1/2 pt-8">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 150,
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
						<Image src={demo4} alt="" />
					</InView>
				</div>
			</div>
			<div className="lg:flex lg:items-center lg:justify-between gap-x-6 lg:flex-row-reverse lg:space-y-0 space-y-5">
				<InView
					variants={{
						hidden: {
							opacity: 0,
							x: -150,
						},
						visible: {
							opacity: 1,
							x: 0,
						},
					}}
					transition={{
						duration: 0.8,
						ease: "easeIn",
						bounce: 0.5,
					}}
				>
					<FeatureCard>
						<h3 className="capitalize font-[600] text-xl  lg:text-3xl">
							hassle-free ticket booking
						</h3>
						<p className="text-sm lg:text-base xl:text-lg leading-7 lg:leading-9 ">
							Secure your spot in just a few taps with our smooth
							and secure ticket purchasing process.
						</p>
					</FeatureCard>
				</InView>
				<div className="bg-[#0B0C1C] rounded-xl flex items-center justify-center lg:w-1/2 pt-8">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 150,
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
						<Image src={demo5} alt="" />
					</InView>
				</div>
			</div>
			{/* <div className="lg:flex lg:items-center lg:justify-between gap-x-6">
				<InView
					variants={{
						hidden: {
							opacity: 0,
							x: -150,
						},
						visible: {
							opacity: 1,
							x: 0,
						},
					}}
					transition={{
						duration: 0.8,
						ease: "easeIn",
						bounce: 0.5,
					}}
				>
					<FeatureCard>
						<h3 className="capitalize font-[600] text-xl lg:text-3xl">
							chat with anybody
						</h3>
						<p className="text-sm lg:text-base xl:text-lg">
							Reach out to discuss event highlights with your
							friends or contact an organizer directly for
							inquiries.
						</p>
					</FeatureCard>
				</InView>
				<div className="bg-[#0B0C1C] rounded-xl hidden lg:flex lg:items-center lg:justify-center w-1/2 pt-8">
					<InView
						variants={{
							hidden: {
								opacity: 0,
								y: 150,
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
						<Image src={demo6} alt="" />
					</InView>
				</div>
			</div> */}
		</div>
	);
}
