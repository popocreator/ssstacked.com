import Head from 'next/head';
import styles from './index.module.css';
import LandingLayout from '@/layouts/LandingLayout';

export default function Services() {
	return (
		<LandingLayout>
			<Head>
				<title>Services</title>
			</Head>
			<main>Services</main>
		</LandingLayout>
	);
}
