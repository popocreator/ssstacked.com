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
				<section className='section'>
					<h2 className='title'>시간 확보를 위한 일정 관리</h2>
					<p className='subtitle'>
						개발자는 작업이 예상과 다르게 진행될 가능성이 매우 높은 직업이기
						때문에 명확한 시간 트래킹이 불가능합니다. 따라서, 개발이 아닌 업무에
						대한 시간을 미리 파악하고 나머지 시간을 최대한 개발 시간으로 확보해
						두어야만 합니다.
					</p>
					<section className='jira'>
						<h3 className='title'>팀 업무를 관리하는 Jira</h3>
					</section>
					<section className='trello'>
						<h3 className='title'>개인 업무를 관리하는 Trello</h3>
					</section>
					<section className='bitbucket'>
						<h3 className='title'>개발 프로젝트를 관리하는 Bitbucket</h3>
					</section>
					<section className='notion'>
						<h3 className='title'>
							개발하기 위한 요구사항 및 회의록을 관리하는 Notion
						</h3>
					</section>
					<section className='amplitude'>
						<h3 className='title'>사용자 로그를 파악하는 Amplitude</h3>
					</section>
					<section className='hackle'>
						<h3 className='title'>A/B 실험을 관리하는 Hackle</h3>
					</section>
					<section className='crashlytics'>
						<h3 className='title'>
							제품 이슈에 대한 로그를 관리할 수 있는 Crashlytics
						</h3>
					</section>
				</section>
				<section className='section'>
					<div className='title'>빠른 회고 사이클</div>
					<div className='subtitle'>
						빠른 성장을 위해서는 현재 상황을 감정적으로 받아들이지 말아라. 라는
						말을 하면 무책임하다고 생각한다. 사람이 감정을 억제할 수 있는 능력은
						가지고 있지 않다고 생각한다. 따라서 특정 사건이 발생했을 때 감정적인
						부분은 그대로 느끼고, 그 사건을 객관화 해야 한다. 항상 하나의
						사건에는 감정적으로 느끼는 부분과 실제로 어떤 문제와 개선점들이 있을
						수 있는지를 나누어서 생각해야 한다.
					</div>
				</section>
				<section className='section'>공식 문서를 통한 기록</section>
				<section className='section'>전반적인 기술 스택의 템플릿화</section>
				<section className='section'>기록에 도움을 주는 서비스들</section>
			</main>
			<div style={{height: '500vh'}}></div>
		</LandingLayout>
	);
}
