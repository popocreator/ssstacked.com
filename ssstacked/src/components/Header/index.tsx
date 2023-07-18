import Logo from '@/elements/Logo';

import styles from './index.module.css';
import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import TopBanner from '@/elements/TopBanner';
import More from '@/elements/More';
import GlobalLink from '@/elements/GlobalLink';
import Link from 'next/link';

export default function Header() {
	const router = useRouter();
	const headerHeight = 100;
	const topBannerHeight = 80;
	const [headerVisible, setHeaderVisible] = useState(true);

	useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const _headerVisible = prevScrollPos > currentScrollPos;
			setHeaderVisible(_headerVisible);
			prevScrollPos = currentScrollPos;
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		console.log(router.pathname);
	}, [router.pathname]);

	return (
		<div
			className={styles.stickyHeader}
			style={{
				top: headerVisible ? '0' : `-${headerHeight + topBannerHeight}px`,
			}}
		>
			<TopBanner />
			<header className={styles.header}>
				<div className={styles.container}>
					<Logo />
					<ul className={styles.gnb}>
						<GlobalLink href='/'>Home</GlobalLink>
						<GlobalLink href='/about'>About</GlobalLink>
						<GlobalLink href='/services'>Services</GlobalLink>
						<GlobalLink href='/blog'>Blog</GlobalLink>
						<GlobalLink href='/contact'>Contact</GlobalLink>
					</ul>
					<More />
				</div>
			</header>
		</div>
	);
}
