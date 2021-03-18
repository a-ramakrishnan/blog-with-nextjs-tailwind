import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../lib/data';

export default function BlogPage({ title, date, slug, content }) {
	return (
		<div className='mb-4 mt-4 shadow hover:shadow-lg hover:border-black rounded-md p-4'>
			<h2 className='pb-4 text-xl font-bold'>{title}</h2>
			<div className='text-gray-500 pb-4 text-xs'>{date}</div>
			<div className='text-gray-800 pb-2 text-md'>{content}</div>

			<div class='flex space-x-3 mt-4 mb-4 text-sm font-medium'>
				<div class='flex-auto flex space-x-3'>
					<button
						class='w-1/2 flex items-center justify-center rounded-md bg-black text-white'
						type='submit'
					>
						Buttons are just for Style
					</button>

					<button
						class='flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300'
						type='button'
						aria-label='like'
					>
						<svg width='20' height='20' fill='currentColor'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
							/>
						</svg>
					</button>
				</div>
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
