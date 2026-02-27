import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Product from './components/Product'
import Impact from './components/Impact'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AppFloater from './components/AppFloater'
import AIChatbot from './components/AIChatbot'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Product />
      <Impact />
      <Contact />
      <Footer />
      <AppFloater />
      <AIChatbot />
    </div>
  )
}

export default App
