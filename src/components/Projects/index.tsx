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
				{/* Services */}
				<section className={styles.projectList}>
					<div className={styles.webProject}>Collection of Interaction</div>
					<div className={styles.webProject}>Design Snack</div>
					<div className={styles.webProject}>Identity Service Mocking</div>
				</section>
				{/* Libraries */}
				<section className={styles.projectList}>
					{/* React */}
					<div className={styles.webProject}>
						@ux-monster/react-smooth-scroll
					</div>
					{/* React Native */}
					<div className={styles.row}>
						<div className={styles.mobileProject}>
							@ux-monster/react-native-slider
						</div>
						<div className={styles.mobileProject}>
							@ux-monster/react-native-toast
						</div>
						<div className={styles.mobileProject}>
							@ux-monster/react-native-tooltip
						</div>
						<div className={styles.mobileProject}>
							@ux-monster/react-native-storybook
						</div>
					</div>
				</section>
				{/* Templates */}
				<section className={styles.projectList}>
					<div className={styles.project}>[AWS] Script NGINX + React</div>
					<div className={styles.project}>[AWS] Script NGINX + NextJS</div>
					<div className={styles.project}>Node RestAPI</div>
					<div className={styles.project}>React UIKit</div>
					<div className={styles.project}>React Native UIKit</div>
				</section>
			</div>
		</section>
	);
}
