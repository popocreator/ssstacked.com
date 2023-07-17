import Logo from '@/elements/Logo';
import styles from './index.module.css';
import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';

export default function Header() {
	const router = useRouter();
	const headerHeight = 100;
	const [headerVisible, setHeaderVisible] = useState(true);

	useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const headerVisible = prevScrollPos > currentScrollPos;

			setHeaderVisible(headerVisible);
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
		<header
			className={styles.header}
			style={{top: headerVisible ? '0' : `-${headerHeight}px`}}
		>
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
	);
}
