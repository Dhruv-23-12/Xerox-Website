function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div>
						<h3 className="text-lg font-semibold text-gray-900">Jala-Xerox</h3>
						<p className="mt-2 text-sm text-gray-600">Fast, reliable, and affordable printing services.</p>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
						<ul className="mt-3 space-y-2 text-sm text-gray-700">
							<li><a href="#home" className="hover:text-brand-teal">Home</a></li>
							<li><a href="#services" className="hover:text-brand-teal">Services</a></li>
							<li><a href="#about" className="hover:text-brand-teal">About</a></li>
							<li><a href="#contact" className="hover:text-brand-teal">Contact</a></li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-gray-900">Follow Us</h4>
						<div className="mt-3 flex gap-3">
							<a href="#" aria-label="Twitter" className="rounded-md p-2 text-gray-600 hover:bg-gray-50 hover:text-brand-blue">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M19.633 7.997c.013.18.013.36.013.54 0 5.49-4.18 11.82-11.82 11.82-2.35 0-4.53-.69-6.36-1.87.33.04.65.05.99.05a8.37 8.37 0 0 0 5.18-1.79 4.19 4.19 0 0 1-3.91-2.9c.26.04.52.06.8.06.38 0 .77-.05 1.13-.15a4.18 4.18 0 0 1-3.36-4.1v-.05c.56.31 1.21.5 1.89.53a4.18 4.18 0 0 1-1.86-3.48c0-.77.2-1.49.56-2.11a11.86 11.86 0 0 0 8.6 4.36 4.72 4.72 0 0 1-.1-.96 4.18 4.18 0 0 1 7.23-2.86 8.22 8.22 0 0 0 2.66-1.02 4.2 4.2 0 0 1-1.84 2.31 8.36 8.36 0 0 0 2.41-.66 9.03 9.03 0 0 1-2.1 2.17Z" /></svg>
							</a>
							<a href="#" aria-label="Facebook" className="rounded-md p-2 text-gray-600 hover:bg-gray-50 hover:text-brand-blue">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.07l.43-3H13v-1.5c0-.28.22-.5.5-.5Z" /></svg>
							</a>
							<a href="#" aria-label="Instagram" className="rounded-md p-2 text-gray-600 hover:bg-gray-50 hover:text-brand-blue">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" /></svg>
							</a>
						</div>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-gray-900">Contact</h4>
						<ul className="mt-3 space-y-2 text-sm text-gray-700">
							<li>+91 98765 43210</li>
							<li>hello@jala-xerox.com</li>
							<li>123 Market Road, Your City, India</li>
						</ul>
					</div>
				</div>
				<div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Jala-Xerox. All rights reserved.</div>
			</div>
		</footer>
	)
}

export default Footer


