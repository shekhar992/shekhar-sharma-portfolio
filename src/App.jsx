import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'

// Lazy load case study pages for code splitting
const GenAICaseStudy = lazy(() => import('./pages/GenAICaseStudy'))
const KrogerCaseStudy = lazy(() => import('./pages/KrogerCaseStudy'))
const HealthcareCaseStudy = lazy(() => import('./pages/HealthcareCaseStudy'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-zinc-800 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zinc-400 text-sm">Loading...</p>
    </div>
  </div>
)

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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/genai-platform" element={<GenAICaseStudy />} />
          <Route path="/case-study/kroger-platform" element={<KrogerCaseStudy />} />
          <Route path="/case-study/healthcare-samd" element={<HealthcareCaseStudy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
