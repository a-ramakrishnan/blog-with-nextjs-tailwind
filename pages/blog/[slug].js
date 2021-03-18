import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../lib/data';

export default function BlogPage({ title, date, slug, content }) {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>Mavericks Blog</h1>
			</main>

			<div>
				<h2>{title}</h2>
				<div>
					<p>{date}</p> <p>{content}</p>
				</div>
				<button>
					<Link href='/'>Go to Home</Link>
				</button>
			</div>
		</div>
	);
}

export async function getStaticProps(context) {
	const { params } = context;
	console.log(params.slug);
	return {
		props: blogPosts.find((item) => item.slug === params.slug),
	};
}

export async function getStaticPaths() {
	return {
		paths: blogPosts.map((item) => ({
			params: {
				slug: item.slug,
			},
		})),
		fallback: false,
	};
}
