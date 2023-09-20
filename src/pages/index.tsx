import Head from 'next/head';
import styles from './index.module.css';
import LandingLayout from '@/layouts/LandingLayout';
import Image from 'next/image';
import OpensourceProject from '@/components/OpensourceProject';
import ConferencesAndMeetups from '@/components/ConferencesAndMeetups';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import MainBanner from '@/components/MainBanner';

export default function Home() {
	// const height = window.height;

	return (
		<LandingLayout>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<MainBanner />
				<Projects />
				<OpensourceProject />
				<Certifications />
				<ConferencesAndMeetups />
			</main>
			<div style={{height: '500vh'}}></div>
		</LandingLayout>
	);
}
