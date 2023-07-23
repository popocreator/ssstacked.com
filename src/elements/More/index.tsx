import styles from './index.module.css';
import React from 'react';

interface MoreProps {
	onClick?: () => void;
}

export default function More({onClick}: MoreProps) {
	return (
		<a className={styles.more_button} onClick={onClick}>
			<span className={styles.more_line_1}></span>
			<span className={styles.more_line_2}></span>
			<span className={styles.more_line_3}></span>
		</a>
	);
}
