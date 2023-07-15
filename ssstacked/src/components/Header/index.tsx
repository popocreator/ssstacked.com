import Logo from '@/elements/Logo';
import styles from './index.module.css';
import React from 'react';

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<ul>
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
			<button>more</button>
		</header>
	);
}
