import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
	return (
		<div className='mx-auto w-9/12 flex flex-col min-h-screen'>
			<header>
				<h1 className='text-4xl font-bold text-center my-6'>
					Mavericks Blog
				</h1>
				<nav className='my-6'>
					<ul className='flex flex-row justify-center space-x-4 '>
						<li>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a>About Us</a>
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<Component {...pageProps} />

			<footer className='w-full text-center border-t border-grey p-4 pin-b'>
				<nav>
					<ul className='flex flex-row justify-center space-x-4 '>
						<li>
							<h2>(C) Copyright Ekasta 2021</h2>
						</li>
						<li>
							<Link href='/privacy'>
								<a>Privacy Policy</a>
							</Link>
						</li>
						<li>
							<Link href='/termsandconditions'>
								<a>Terms and Conditions</a>
							</Link>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	);
}

export default MyApp;
