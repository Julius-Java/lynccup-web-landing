"use client";
import useDeviceType from "../hooks/use-device-type";

export default function AppStoreLink({
	children,
}: {
	children: React.ReactNode;
}) {
	const deviceType = useDeviceType();
	const link =
		(deviceType === "ios" || deviceType === "mac")
			? "https://apps.apple.com/us/app/lynccup/id1581310000"
			: "https://play.google.com/store/apps/details?id=com.lynccup";
	return (
		<a href={link} target="_blank">
			{children}
		</a>
	);
}
