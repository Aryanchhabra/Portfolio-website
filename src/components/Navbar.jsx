import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const sections = ['top', 'about', 'experience', 'projects', 'skills', 'resume', 'contact']
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact', isCta: true },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-6 px-5 py-2.5 rounded-full glass-effect shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      aria-label="Primary"
    >
      <a
        href="#top"
        className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-accent-violet to-accent-pink font-black text-white no-underline"
      >
        <span className="logo-mark">AC</span>
      </a>
      <div className="hidden md:flex gap-4">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`
              text-sm font-medium no-underline transition-colors duration-200
              ${link.isCta 
                ? 'px-3.5 py-2 bg-gradient-to-br from-accent-violet to-accent-pink text-white rounded-full' 
                : activeSection === link.href.slice(1) 
                  ? 'text-text' 
                  : 'text-text-muted hover:text-text'
              }
            `}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar

