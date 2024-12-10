export default function FeatureCard({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="rounded-3xl p-[2px] bg-gradient-to-b from-red-500 to-[rgb(198_0_0_/0.1)] md:max-w-[500px] h-full">
			<div className="rounded-[calc(1.5rem-1px)] p-7 lg:p-9 space-y-3 bg-black/95 min-h-[190px] lg:min-h-[250px]">
				{children}
			</div>
		</div>
	);
}
