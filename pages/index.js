import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from './lib/data';

export default function Home() {
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
				{blogPosts.map((post) => (
					<div key={post.slug}>
						<div>
							<Link href={`/blog/${post.slug}`}>
								<h2>{post.title}</h2>
							</Link>
						</div>
						<div>
							<p>{post.date}</p> <p>{post.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
