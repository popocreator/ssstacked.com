import styles from './index.module.css';
import React from 'react';

export default function MainBanner() {
	return (
		<section className={styles.banner}>
			<div className={styles.container}>
				<h2 className={styles.bannerTitle}>
					<p>Approach</p>
					<p>every challenge</p>
					<p>with a</p>
					<p>growing heart</p>
				</h2>
			</div>
		</section>
	);
}
