//import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-white">
			<Navbar />
			<main className="flex-1">
				<Hero />
				<Services />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default App
