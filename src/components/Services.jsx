const items = [
	{
		title: 'Xerox & Document Printing',
		desc: 'High-quality B/W and color prints, scanning, and photocopy services.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-blue">
				<path d="M6 3a3 3 0 0 0-3 3v5h2V6a1 1 0 0 1 1-1h9V3H6Z" />
				<path d="M20 8h-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v6h3v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h3v-6a2 2 0 0 0-2-2Zm-5 0H9V6h6v2Zm3 11H6v-6h12v6Z" />
			</svg>
		),
	},
	{
		title: 'T-shirt & Custom Printing',
		desc: 'Personalized T-shirts, mugs, and gift printing for every occasion.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-blue">
				<path d="M16 3a3 3 0 0 1-6 0H7l-4 3 2 3 3-2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7l3 2 2-3-4-3h-2Z" />
			</svg>
		),
	},
	{
		title: 'Business Cards, Flyers, Posters',
		desc: 'Design and print marketing materials with premium finishes.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-blue">
				<path d="M4 3h16a1 1 0 0 1 1 1v9H3V4a1 1 0 0 1 1-1Zm17 12H3v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5Z" />
			</svg>
		),
	},
	{
		title: 'Online Form Filling Support',
		desc: 'Guidance and assistance for government and university forms.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-blue">
				<path d="M5 3a2 2 0 0 0-2 2v13l4-2 4 2 4-2 4 2V5a2 2 0 0 0-2-2H5Z" />
			</svg>
		),
	},
	{
		title: 'Stationery & Office Supplies',
		desc: 'Notebooks, pens, files, and all daily office essentials.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-brand-blue">
				<path d="M6 2h8a2 2 0 0 1 2 2v18l-6-3-6 3V4a2 2 0 0 1 2-2Z" />
			</svg>
		),
	},
]

function Services() {
	return (
		<section id="services" className="bg-gray-50">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<header className="mb-10 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
					<p className="mt-3 text-base text-gray-600">Everything you need for personal, academic, and business printing.</p>
				</header>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((s) => (
						<div key={s.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10">
								{s.icon}
							</div>
							<h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
							<p className="mt-2 text-sm text-gray-600">{s.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services


