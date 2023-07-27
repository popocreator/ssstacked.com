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
									with a
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
									growing heart
									<span />
								</p>
							</div>
						</h2>
					</div>
				</section>
			</main>
			<div style={{height: '500vh'}}></div>
		</LandingLayout>
	);
}
