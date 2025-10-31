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
  const [currentSection, setCurrentSection] = useState('home')
  
  // Track scroll position for section changes
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      // Find which section we're in
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
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

