function About() {
	return (
		<section id="about" className="bg-white">
			<div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
				<div>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Jala-Xerox</h2>
					<p className="mt-4 text-base text-gray-600">We started Jala-Xerox with a simple mission: make printing fast, affordable, and stress-free for everyone. Whether you are a student racing against a deadline or a business preparing for a big presentation, we deliver high-quality prints with friendly, reliable service.</p>
					<ul className="mt-6 grid list-disc gap-2 pl-5 text-sm text-gray-700">
						<li>Same‑day delivery for most print jobs</li>
						<li>Transparent pricing with no surprises</li>
						<li>Personalized support for design and formatting</li>
					</ul>
				</div>
				<div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
					<div className="grid grid-cols-2 gap-4 text-center">
						<div className="rounded-lg bg-white p-6 shadow">
							<p className="text-3xl font-extrabold text-brand-blue">5k+</p>
							<p className="mt-1 text-xs text-gray-500">Print Jobs Completed</p>
						</div>
						<div className="rounded-lg bg-white p-6 shadow">
							<p className="text-3xl font-extrabold text-brand-blue">4.8★</p>
							<p className="mt-1 text-xs text-gray-500">Average Customer Rating</p>
						</div>
						<div className="rounded-lg bg-white p-6 shadow">
							<p className="text-3xl font-extrabold text-brand-blue">10+</p>
							<p className="mt-1 text-xs text-gray-500">Years of Service</p>
						</div>
						<div className="rounded-lg bg-white p-6 shadow">
							<p className="text-3xl font-extrabold text-brand-blue">24h</p>
							<p className="mt-1 text-xs text-gray-500">Support Availability</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About


