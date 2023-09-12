import styles from './index.module.css';
import React, {useEffect, useRef, useState} from 'react';

interface CertificationsProps {}

export default function Certifications({}: CertificationsProps) {
	return (
		<section className='section'>
			<div className={styles.container + ' ' + styles.column}>
				<header className={styles.opensourceHeader}>
					<h2 className={styles.opensourceGroupTitle}>Certifications</h2>
					<button className={styles.opensourceViewAll}>VIEW ALL</button>
				</header>
			</div>
		</section>
	);
}
