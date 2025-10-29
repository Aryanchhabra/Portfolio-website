import { useEffect, useRef, useState } from 'react'
import { useScroll } from 'framer-motion'
import SimpleBackground from './components/SimpleBackground'
import HeroSection from './components/HeroSection'
import AboutPortal from './components/AboutPortal'
import ProjectsGalaxy from './components/ProjectsGalaxy'
import SkillsMatrix from './components/SkillsMatrix'
import ExperienceTimeline from './components/ExperienceTimeline'
import ContactDimension from './components/ContactDimension'
import Navigation from './components/Navigation'
import Cursor from './components/Cursor'

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const [currentSection, setCurrentSection] = useState(0)
  
  // Track scroll position for section changes
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const section = Math.floor(scrollPosition / windowHeight)
      setCurrentSection(section)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Custom Cursor */}
      <Cursor />
      
      {/* Navigation */}
      <Navigation currentSection={currentSection} />
      
          {/* Animated Background (2D) */}
          <SimpleBackground />
          
          {/* Content Sections */}
          <div className="relative z-10">
            <HeroSection />
            <AboutPortal />
            <ExperienceTimeline />
            <ProjectsGalaxy />
            <SkillsMatrix />
            <ContactDimension />
          </div>
    </div>
  )
}

export default App

