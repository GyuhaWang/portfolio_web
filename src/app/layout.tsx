import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import RecoilRootWrapper from './recoilWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'GyuHaWang Portfolio',
	description: 'frontEnd portfolio GyuHa',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<RecoilRootWrapper>{children}</RecoilRootWrapper>
			</body>
		</html>
	);
}
