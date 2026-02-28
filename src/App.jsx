import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import GenAICaseStudy from './pages/GenAICaseStudy'
import KrogerCaseStudy from './pages/KrogerCaseStudy'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/genai-platform" element={<GenAICaseStudy />} />
        <Route path="/case-study/kroger-platform" element={<KrogerCaseStudy />} />
      </Routes>
    </div>
  )
}

export default App
