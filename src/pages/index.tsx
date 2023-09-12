import Head from 'next/head';
import styles from './index.module.css';
import LandingLayout from '@/layouts/LandingLayout';
import Image from 'next/image';
import OpensourceList from '@/components/OpensourceList';

export default function Home() {
	// const height = window.height;

	return (
		<LandingLayout>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<section className={styles.mainBanner}>
					<div className={styles.container}>
						<h2 className={styles.mainBannerTitle}>
							<p>Approach</p>
							<p>every challenge</p>
							<p>with a</p>
							<p>growing heart</p>
						</h2>
					</div>
				</section>
				<OpensourceList />
				<section className='section'>
					{/* 컨퍼런스 및 밋업 참여 */}
					<div className={styles.container}>
						<h2 className='title'>Attend Tech Conferences and Meetups</h2>
					</div>
				</section>
				<section className='section'>
					{/* 다른 개발자와 같이하는 프로젝트 참여 */}
					<div className={styles.container}>
						<h2 className='title'>Collaborate With Other Developers</h2>
					</div>
				</section>
				<section className='section'>
					{/* 개인 프로젝트 */}
					<div className={styles.container}>
						<h2 className='title'>Work on Personal Projects</h2>
					</div>
				</section>
				<section className='section'>
					{/* 자격증 취득 */}
					<div className={styles.container}>
						<h2 className='title'>Gain Industry-specific Certifications</h2>
					</div>
				</section>
			</main>
			<div style={{height: '500vh'}}></div>
		</LandingLayout>
	);
}
