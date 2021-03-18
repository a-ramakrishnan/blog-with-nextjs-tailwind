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

			<div className='space-y-6'>
				{blogPosts.map((post) => (
					<BlogListItems key={post.slug} {...post} />
				))}
			</div>
		</div>
	);
}

function BlogListItems({ title, date, slug, content }) {
	return (
		<div className='border border-gray-200 shadow hover:shadow-md hover:border-gray-700 rounded-md p-4 transition duration-200 ease-in-out'>
			<div className='pb-4'>
				<Link href={`/blog/${slug}`}>
					<a className='text-lg text-black'>{title}</a>
				</Link>
			</div>
			<div className='text-gray-500 pb-2 text-xs'>{date}</div>
			<div className='text-gray-800 pb-2 text-l'>{content}</div>
		</div>
	);
}
