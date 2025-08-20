function Contact() {
	return (
		<section id="contact" className="bg-gray-50">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<header className="mb-10 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
					<p className="mt-3 text-base text-gray-600">Send us a message or reach us through the details below.</p>
				</header>
				<div className="grid gap-10 lg:grid-cols-2">
					<form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
						<div className="grid gap-4 sm:grid-cols-2">
							<div>
								<label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Name</label>
								<input id="name" type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30" placeholder="Your name" />
							</div>
							<div>
								<label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email</label>
								<input id="email" type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30" placeholder="you@example.com" />
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">Message</label>
								<textarea id="message" rows="5" className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30" placeholder="How can we help?" />
							</div>
						</div>
						<button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue/90 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2">Send Message</button>
					</form>
					<div className="space-y-4">
						<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900">Contact Details</h3>
							<ul className="mt-3 space-y-2 text-sm text-gray-700">
								<li><span className="font-medium">Phone:</span> +91 98765 43210</li>
								<li><span className="font-medium">Email:</span> hello@jala-xerox.com</li>
								<li><span className="font-medium">Address:</span> 123 Market Road, Your City, India</li>
							</ul>
						</div>
						<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
							<ul className="mt-3 space-y-2 text-sm text-gray-700">
								<li>Mon - Sat: 9:00 AM - 8:00 PM</li>
								<li>Sun: 10:00 AM - 2:00 PM</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact


