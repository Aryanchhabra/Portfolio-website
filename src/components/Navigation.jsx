import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const sections = [
  { id: 'home', name: 'Home', icon: '🏠' },
  { id: 'about', name: 'About', icon: '👋' },
  { id: 'experience', name: 'Experience', icon: '💼' },
  { id: 'projects', name: 'Projects', icon: '🚀' },
  { id: 'skills', name: 'Skills', icon: '⚡' },
  { id: 'contact', name: 'Contact', icon: '✉️' }
]

export default function Navigation({ currentSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  // Show logo only when scrolled past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Show logo after scrolling 80% of viewport height
      setShowLogo(scrollPosition > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // 80px offset for better alignment
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation - Dots */}
      <motion.nav
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Dot */}
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSection === section.id
                    ? 'bg-black scale-150'
                    : 'bg-gray-400 group-hover:bg-gray-600'
                }`}
              />

              {/* Tooltip */}
              <motion.div
                className="absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-white/90 backdrop-blur-xl border border-black/20 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg"
                initial={{ x: 10 }}
                whileHover={{ x: 0 }}
              >
                <span className="text-gray-900 text-sm font-medium">{section.name}</span>
              </motion.div>

              {/* Active indicator glow */}
              {currentSection === section.id && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-black/30 blur-md"
                  initial={{ scale: 0 }}
                  animate={{ scale: 2 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <motion.div
        className="fixed top-6 right-6 z-50 lg:hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg text-white"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? '✕' : '☰'}
          </motion.div>
        </motion.button>

        {/* Menu */}
        <motion.div
          className="absolute top-16 right-0 w-48 p-4 bg-white/95 backdrop-blur-xl border border-black/20 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={
            isOpen
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.8, y: -20 }
          }
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          <div className="space-y-2">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full px-4 py-3 rounded-xl text-left transition-all ${
                  currentSection === section.id
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-black/5'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{section.icon}</span>
                {section.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Logo / Brand - Simple "a" (only visible when scrolled) */}
      <motion.div
        className="fixed top-5 left-5 z-50"
        initial={{ opacity: 0, scale: 0, y: -20 }}
        animate={{ 
          opacity: showLogo ? 1 : 0, 
          scale: showLogo ? 1 : 0,
          y: showLogo ? 0 : -20
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ pointerEvents: showLogo ? 'auto' : 'none' }}
      >
        <motion.button
          onClick={() => scrollToSection('home')}
          className="w-11 h-11 bg-white rounded-full cursor-pointer flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: '0 2px 8px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.08)'
          }}
        >
          <span className="text-black font-bold text-2xl">
            a
          </span>
        </motion.button>
      </motion.div>
    </>
  )
}

