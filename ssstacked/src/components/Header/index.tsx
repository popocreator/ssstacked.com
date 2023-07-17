import Logo from '@/elements/Logo';
import Image from 'next/image';
import UkrainianFlag from '@/assets/ukrainian-flag.png';

import styles from './index.module.css';
import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';

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
			<section className={styles.topBanner}>
				<Image src={UkrainianFlag} alt={'Ukraine Flag'} />
				<p className={styles.test}>
					Stop the War.{' '}
					<span className={styles.topBannerText_desktop}>
						Support Ukraine.{' '}
						<a
							href='https://u24.gov.ua/?utm_source=website&utm_medium=banner&utm_campaign=donation'
							className={styles.topBannerlink}
							target='_blank'
							rel='noopener noreferrer nofollow'
						>
							Make a donation
						</a>{' '}
						to United24 program.
					</span>{' '}
					{/* <span className={styles.topBannerText_mobile}>
						<a
							href='https://u24.gov.ua/?utm_source=website&utm_medium=banner&utm_campaign=donation'
							className={styles.topBannerlink}
							target='_blank'
							rel='noopener noreferrer nofollow'
						>
							Support Ukraine
						</a>
					</span> */}
				</p>
				<button type='button'>X</button>
			</section>
			<header className={styles.header}>
				<div className={styles.container}>
					<Logo />
					<ul className={styles.gnb}>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/about'>About</a>
						</li>
						<li>
							<a href='/services'>Services</a>
						</li>
						<li>
							<a href='/blog'>Blog</a>
						</li>
						<li>
							<a href='/contact'>Contact</a>
						</li>
					</ul>
					<button className={styles.more}>more</button>
				</div>
			</header>
		</div>
	);
}
