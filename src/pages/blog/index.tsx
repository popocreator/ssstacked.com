import Head from 'next/head';
import styles from './index.module.css';
import LandingLayout from '@/layouts/LandingLayout';

export default function Blog() {
	return (
		<LandingLayout>
			<Head>
				<title>Blog</title>
			</Head>
			<main>Blog</main>
		</LandingLayout>
	);
}
