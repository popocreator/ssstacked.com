import Head from 'next/head';
import styles from './index.module.css';
import LandingLayout from '@/layouts/LandingLayout';

export default function Contact() {
	return (
		<LandingLayout>
			<Head>
				<title>Contact</title>
			</Head>
			<main>Contact</main>
		</LandingLayout>
	);
}
