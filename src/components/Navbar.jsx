import { useState } from 'react'
import Logo from '../assets/jala-logo.png';

function Navbar() {
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				{/* <a href="#home" className="text-xl font-extrabold tracking-tight text-brand-blue">
					Jala-Xerox
				</a> */}
				<img className='h-15 w-20' src={Logo} alt="" />
				<button
					className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-teal lg:hidden"
					aria-label="Toggle Menu"
					onClick={() => setOpen((v) => !v)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
						<path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
					</svg>
				</button>
				<nav className="hidden gap-8 text-sm font-medium text-gray-700 lg:flex">
					<a href="#home" className="hover:text-brand-teal">Home</a>
					<a href="#services" className="hover:text-brand-teal">Services</a>
					<a href="#about" className="hover:text-brand-teal">About</a>
					<a href="#contact" className="hover:text-brand-teal">Contact</a>
				</nav>
			</div>
			{open && (
				<div className="border-t border-gray-100 bg-white lg:hidden">
					<nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 text-sm font-medium text-gray-700 sm:px-6 lg:px-8">
						<a onClick={() => setOpen(false)} href="#home" className="rounded px-2 py-2 hover:bg-gray-50">Home</a>
						<a onClick={() => setOpen(false)} href="#services" className="rounded px-2 py-2 hover:bg-gray-50">Services</a>
						<a onClick={() => setOpen(false)} href="#about" className="rounded px-2 py-2 hover:bg-gray-50">About</a>
						<a onClick={() => setOpen(false)} href="#contact" className="rounded px-2 py-2 hover:bg-gray-50">Contact</a>
					</nav>
				</div>
			)}
		</header>
	)
}

export default Navbar


