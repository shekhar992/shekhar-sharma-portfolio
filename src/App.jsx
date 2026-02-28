import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import GenAICaseStudy from './pages/GenAICaseStudy'
import KrogerCaseStudy from './pages/KrogerCaseStudy'
import HealthcareCaseStudy from './pages/HealthcareCaseStudy'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Aggressive scroll reset - run immediately and after a tick
    window.scrollTo(0, 0)
    setTimeout(() => window.scrollTo(0, 0), 0)
    setTimeout(() => window.scrollTo(0, 0), 10)
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/genai-platform" element={<GenAICaseStudy />} />
        <Route path="/case-study/kroger-platform" element={<KrogerCaseStudy />} />
        <Route path="/case-study/healthcare-samd" element={<HealthcareCaseStudy />} />
      </Routes>
    </div>
  )
}

export default App
