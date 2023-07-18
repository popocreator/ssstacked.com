import styles from './index.module.css';
import React from 'react';

export default function More() {
	return (
		<a className={styles.more_button}>
			<span className={styles.more_line_1}></span>
			<span className={styles.more_line_2}></span>
			<span className={styles.more_line_3}></span>
		</a>
	);
}
