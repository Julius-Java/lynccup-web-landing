"use client";

import { motion } from "motion/react";

export default function LevitateEffect({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={{
				transformStyle: "preserve-3d",
			}}
		>
			<motion.div
				initial={{
					transform: "translateY(14px)",
				}}
				animate={{
					transform: "translateY(-14px)",
				}}
				transition={{
					repeat: Infinity,
					repeatType: "mirror",
					duration: 2,
					ease: "easeInOut",
				}}
			>
				{children}
			</motion.div>
		</div>
	);
}
