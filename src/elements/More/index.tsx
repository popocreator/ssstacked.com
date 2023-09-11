import styles from './index.module.css';
import React from 'react';

interface MoreProps {
	onClick?: () => void;
}

export default function More({onClick}: MoreProps) {
	return (
		<a className={styles.more_button} onClick={onClick}>
			<span className={styles.more_circle}></span>
			<span className={styles.more_circle}></span>
			<span className={styles.more_circle}></span>
		</a>
	);
}
