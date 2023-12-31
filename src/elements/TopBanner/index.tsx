import Image from 'next/image';
import styles from './index.module.css';
import React from 'react';
import UkraineFlag from '@/assets/ukrainian-flag.png';
import imageLoader from '@/lib/imageLoader';

export default function TopBanner() {
	return (
		<section className={styles.topBanner}>
			<Image
				src={UkraineFlag}
				alt={'Ukraine Flag'}
				height={36}
				loader={imageLoader}
			/>
			<p className={styles.topBannerText}>
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
			<button className={styles.close} type='button'>
				X
			</button>
		</section>
	);
}
