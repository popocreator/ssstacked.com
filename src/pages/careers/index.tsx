import Head from 'next/head';
import styles from './index.module.css';
import LandingLayout from '@/layouts/LandingLayout';

export default function Careers() {
	return (
		<LandingLayout>
			<Head>
				<title>Careers</title>
			</Head>
			<main>Careers</main>
		</LandingLayout>
	);
}
