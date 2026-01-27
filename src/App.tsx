import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TechLeadingLadies from './pages/TechLeadingLadies'
import About from './pages/About'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'
import Meetup from './pages/Meetup'

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<TechLeadingLadies />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meetup" element={<Meetup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

function ScrollHandler() {
  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
  return null
}

export default App