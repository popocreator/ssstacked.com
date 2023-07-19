import Link, {LinkProps} from 'next/link';
import styles from './index.module.css';
import React from 'react';

interface GlobalLinkProps extends LinkProps {
	active?: boolean;
	children?: React.ReactNode;
}

export default function GlobalLink({active, children, href}: GlobalLinkProps) {
	return (
		<li className={active ? styles.activeLink : styles.link}>
			<Link href={href} className={styles.linkText}>
				{children}
			</Link>
			<div className={styles.underline}></div>
		</li>
	);
}
