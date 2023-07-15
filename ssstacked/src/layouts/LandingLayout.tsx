import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface LandingLayoutProps {
	children?: React.ReactNode;
}

export default function LandingLayout({children}: LandingLayoutProps) {
	return (
		<>
			<Header></Header>
			{children}
			<Footer></Footer>
		</>
	);
}
