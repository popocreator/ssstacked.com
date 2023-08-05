import Head from 'next/head';
import styles from './index.module.css';
import LandingLayout from '@/layouts/LandingLayout';
import Image from 'next/image';

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
							<div className={styles.lineText}>
								<p>
									Approach
									<span />
								</p>
							</div>
							<div className={styles.lineText}>
								<p>
									every challenge
									<span />
								</p>
							</div>
							<div className={styles.lineText}>
								<p>
									with a
									<span />
								</p>
							</div>
							<div className={styles.lineText}>
								<p>
									growing heart
									<span />
								</p>
							</div>
						</h2>
					</div>
				</section>
				<section className='section'>시간 확보를 위한 일정 관리</section>
				<section className='section'>빠른 회고 사이클</section>
				<section className='section'>공식 문서를 통한 기록</section>
				<section className='section'>전반적인 기술 스택의 템플릿화</section>
				<section className='section'>기록에 도움을 주는 서비스들</section>
			</main>
			<div style={{height: '500vh'}}></div>
		</LandingLayout>
	);
}
