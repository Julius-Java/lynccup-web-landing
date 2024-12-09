"use client";
import { Button } from "./button-main";
import Image from "next/image";
import phone from "@/public/phone.svg";
import FeatureCard from "./feature-card";
import demo1 from "@/public/demo1.svg";
import demo2 from "@/public/demo2.svg";
import demo3 from "@/public/demo3.svg";

import { InView } from "./motion-ui/in-view";

export default function FeatureTabs() {
	return (
		<div>
			{/* Tab Header */}
			<div className="py-4 border-b border-[#1F1F1F] flex items-center justify-between w-full flex-wrap gap-4">
				<div className="flex items-center gap-x-2">
					<Button
						size={"sm"}
						className="rounded-full lg:h-12 lg:px-[19px]"
					>
						For event organizers
					</Button>
					<Button
						size={"sm"}
						className="rounded-full lg:h-12 lg:px-[19px]"
						variant={"outline"}
					>
						For attendees
					</Button>
				</div>
				<div>
					<Button
						variant={"outline"}
						size={"sm"}
						className="flex items-center justify-center gap-x-3 mx-auto lg:mx-0 lg:h-12 lg:px-[19px]"
					>
						<Image src={phone} alt="" width={10} />
						<span className="block font-[600]">Get the App</span>
					</Button>
				</div>
			</div>

			{/* Tab Content */}
			<div className="space-y-8 py-6 md:grid md:grid-cols-2 md:gap-5 md:space-y-0 lg:block lg:space-y-20">
				<div className="lg:flex lg:items-center lg:justify-between gap-x-6">
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
								<p className="text-sm lg:text-base xl:text-lg">
									Design your event in minutes with
									customizable options for venues, dates,
									tickets, and other. Easily modify event
									details, or handle last-minute changes
									without breaking a sweat.
								</p>
							</FeatureCard>
						</InView>
					</div>

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
							<Image src={demo1} alt="" />
						</InView>
					</div>
				</div>
				<div className="lg:flex lg:items-center lg:justify-between gap-x-6 lg:flex-row-reverse">
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
							<p className="text-sm lg:text-base xl:text-lg">
								Sell tickets hassle-free with our secure and
								user-friendly platform, offering multiple
								payment options for your attendees.
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
							<Image src={demo2} alt="" />
						</InView>
					</div>
				</div>

				<div className="lg:flex lg:items-center lg:justify-between gap-x-6">
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
							<p className="text-sm lg:text-base xl:text-lg">
								Track ticket sales, attendee numbers, and event
								performance with detailed analytics at your
								fingertips.
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
							<Image src={demo3} alt="" />
						</InView>
					</div>
				</div>
			</div>
		</div>
	);
}
