import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import instagram from "@/public/ig-fill.svg";
import facebook from "@/public/facebook-fill.svg";
import twitter from "@/public/twitter-fill.svg";

export default function Footer() {
	return (
		<footer className="py-8 bg-[#0E0F14] px-5 lg:px-7 text-[#E6E6E6]">
			<section className="lg:container lg:mx-auto space-y-8">
				<div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:place-items-center">
					<div className="space-y-4">
						<Link href={"/"}>
							<Image src={logo} alt="Lynccup logo" />
						</Link>
						<p className="text-sm max-w-[90%] lg:max-w-[70%]">
							Lynccup is a social platform that helps improve
							interaction with everyone and revolutionise event
							ticketing for event organizers and attendees all
							over the world
						</p>
					</div>
					<div className="space-y-4">
						<h4 className="font-ibm_sans_bold font-[600]">Legal</h4>
						<div className="space-y-3 text-sm">
							<a href={"#terms"} className="block max-w-max">
								Terms of Use
							</a>
							<a href={"#privacy"} className="block max-w-max">
								Privacy Policy
							</a>
						</div>
					</div>
					<div className="space-y-4">
						<h4 className="font-ibm_sans_bold font-[600]">
							Follow us
						</h4>
						<div className="space-y-3 text-sm">
							<a
								href="#"
								className="flex items-center gap-x-2 max-w-max"
							>
								<Image src={instagram} alt="Instagram handle" />
								<span className="block">Instagram</span>
							</a>
							<a
								href="#"
								className="flex items-center gap-x-2 max-w-max"
							>
								<Image src={twitter} alt="Twitter handle" />
								<span className="block">Twitter</span>
							</a>
							<a
								href="#"
								className="flex items-center gap-x-2 max-w-max"
							>
								<Image src={facebook} alt="Facebook handle" />
								<span className="block">Facebook</span>
							</a>
						</div>
					</div>
				</div>

				<hr className="border-[#1F1F1F]" />

				<p className="text-sm text-center">
					Copyright &copy; {new Date().getFullYear()}. Lynccup. All
					rights reserved.
				</p>
			</section>
		</footer>
	);
}
