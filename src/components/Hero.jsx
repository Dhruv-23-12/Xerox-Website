function Hero() {
	return (
		<section id="home" className="relative isolate overflow-hidden bg-gradient-to-br from-brand-blue to-brand-teal">
			<div className="mx-auto grid max-w-7xl gap-8 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-28">
				<div>
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Fast & Affordable Printing and More</h1>
					<p className="mt-4 max-w-prose text-base text-white/90 sm:text-lg">From instant Xerox and document prints to custom T-shirts, business cards, posters, and stationery supplies — Jala-Xerox is your one-stop print partner.</p>
					<a href="#services" className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-blue shadow-sm ring-1 ring-inset ring-white/20 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Explore Services</a>
				</div>
				<div className="hidden lg:block">
					<div className="aspect-[4/3] w-full rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
						<div className="flex h-full items-center justify-center p-8">
							<div className="grid w-full grid-cols-2 gap-4">
								<div className="h-40 rounded-lg bg-white/30" >
								<img className="fit-cover h-40 w-200 rounded-lg" src="https://deeteespromos.com/wp-content/uploads/2017/06/T-SHIRT-WITHOUT-DESIGN.jpg" alt="" />
								</div>

								<div className="h-40 rounded-lg bg-white/20" >
								<img className="fit-cover h-40 w-200 rounded-lg" src="https://www.thebalancemoney.com/thmb/A07n-9YZvp8ySR_vnTuGg593FZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-76123636-578e549f3df78c09e9288b3c.jpg" alt="" />
								</div>

								<div className="h-40 rounded-lg bg-white/20" >
								<img className="fit-cover h-40 w-200 rounded-lg" src="https://wallpapercave.com/wp/wp6661087.jpg" alt="" />
								</div>

								<div className="h-40 rounded-lg bg-white/30" >
								<img className="fit-cover h-40 w-200 rounded-lg" src="https://atyourservice.blogs.xerox.com/wp-content/uploads/sites/5/2021/08/scan-with-print-banner.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero


