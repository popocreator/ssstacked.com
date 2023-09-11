import styles from './index.module.css';
// import LogoImage from '@/assets/logo.svg';
import LogoImage from '@/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Logo() {
	return (
		<h1 className={styles.logo} title='Homepage Logo'>
			<Link href='/'>
				{/* <LogoImage height='22' /> */}
				<Image src={require('@/assets/logo.png')} alt='' height={22} />
				{/* <Image src={require('@/assets/logo_1.png')} alt='' height={22} /> */}
			</Link>
		</h1>
	);
}
