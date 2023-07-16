import Logo from '@/elements/Logo';
import styles from './index.module.css';
import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function Header() {
	const router = useRouter();
	useEffect(() => {
		console.log(router.pathname);
	}, [router.pathname]);

	return (
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
	);
}
