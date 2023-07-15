import Head from 'next/head';
import styles from './index.module.css';
import LandingLayout from '@/layouts/LandingLayout';

export default function Home() {
	return (
		<LandingLayout>
			<Head>
				<title>Home</title>
			</Head>
			<main>Home</main>
		</LandingLayout>
	);
}
