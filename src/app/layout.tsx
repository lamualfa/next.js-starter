import "./layout.css";

import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sunday",
};

const fontInter = Inter({
	subsets: ["latin"],
});

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={fontInter.className}>{props.children}</body>
		</html>
	);
}
