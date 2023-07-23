import React, {useState} from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

interface LandingLayoutProps {
	children?: React.ReactNode;
}

export default function LandingLayout({children}: LandingLayoutProps) {
	const [visibleSidebar, setVisibleSidebar] = useState<boolean>(false);

	return (
		<>
			<Header onClickMore={() => setVisibleSidebar(true)} />
			{visibleSidebar && <Sidebar onClosed={() => setVisibleSidebar(false)} />}
			{children}
			<Footer />
		</>
	);
}
