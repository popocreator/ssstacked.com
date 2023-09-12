import GlobalLink from '@/elements/GlobalLink';
import styles from './index.module.css';
import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';

interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
	const router = useRouter();

	return (
		<section className='section'>
			<div className={styles.container + ' ' + styles.column}>
				{/* <h2 className={styles.title}>Projects</h2> */}
				<header className={styles.header}>
					<ul className={styles.headerLinkList}>
						<GlobalLink
							active={
								'/' === router.pathname || '/services' === router.pathname
							}
							href='/services'
						>
							Services
						</GlobalLink>
						<GlobalLink
							active={'/libraries' === router.pathname}
							href='/libraries'
						>
							Libraries
						</GlobalLink>
						<GlobalLink
							active={'/templates' === router.pathname}
							href='/templates'
						>
							Templates
						</GlobalLink>
					</ul>
					<p className={styles.headerDescription}>
						The projects we create help create new knowledge based on
						experience.
					</p>
				</header>
			</div>
		</section>
	);
}
