import styles from './index.module.css';
import React from 'react';
import Image from 'next/image';
import UkrainianFlag from '~/ukrainian-flag.png';

export default function TopBanner() {
	return (
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
	);
}
