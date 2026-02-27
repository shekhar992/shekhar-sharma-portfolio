import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Problem from './components/Problem'
import Journey from './components/Journey'
import Product from './components/Product'
import Impact from './components/Impact'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Journey />
      <Product />
      <Impact />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
