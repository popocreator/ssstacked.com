import Head from 'next/head';
import styles from './index.module.css';
import LandingLayout from '@/layouts/LandingLayout';

export default function About() {
	return (
		<LandingLayout>
			<Head>
				<title>About</title>
			</Head>
			<main>About</main>
		</LandingLayout>
	);
}
