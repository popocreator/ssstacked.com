import Logo from '@/elements/Logo';

import styles from './index.module.css';
import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import TopBanner from '@/elements/TopBanner';
import More from '@/elements/More';
import GlobalLink from '@/elements/GlobalLink';
import Link from 'next/link';

interface HeaderProps {
	onClickMore?: () => void;
}

export default function Header({onClickMore}: HeaderProps) {
	const router = useRouter();
	const headerHeight = 120;
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
						<GlobalLink
							active={
								'/' === router.pathname ||
								'/services' === router.pathname ||
								'/libraries' === router.pathname ||
								'/templates' === router.pathname
							}
							href='/'
						>
							Home
						</GlobalLink>
						<GlobalLink active={'/about' === router.pathname} href='/about'>
							About
						</GlobalLink>
						<GlobalLink active={'/careers' === router.pathname} href='/careers'>
							Careers
						</GlobalLink>
						<GlobalLink active={'/blog' === router.pathname} href='/blog'>
							Blog
						</GlobalLink>
						<GlobalLink active={'/contact' === router.pathname} href='/contact'>
							Contact
						</GlobalLink>
					</ul>
					<More onClick={onClickMore} />
				</div>
			</header>
		</div>
	);
}
