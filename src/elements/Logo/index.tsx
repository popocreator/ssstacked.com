import styles from './index.module.css';
import LogoImage from '@/assets/logo.svg';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
	return (
		<h1 className={styles.logo} title='Homepage Logo'>
			<Link href='/'>
				<LogoImage height='22' />
			</Link>
		</h1>
	);
}
