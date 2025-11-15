import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isOnSkillCard, setIsOnSkillCard] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    setIsVisible(isDesktop)

    if (!isDesktop) return

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = (e) => {
      const target = e.target
      
      // Check if hovering over skill card
      const skillCard = target.closest('[data-skill-card]')
      setIsOnSkillCard(!!skillCard)
      
      setIsPointer(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      )
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', updateCursorType)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', updateCursorType)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor - fast and responsive */}
      <motion.div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] hidden md:block transition-colors duration-200 ${
          isOnSkillCard ? 'bg-white' : 'bg-black'
        }`}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 1.3 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 30,
          mass: 0.2
        }}
      />

      {/* Subtle outer ring - minimal lag */}
      <motion.div
        className={`fixed top-0 left-0 w-7 h-7 border rounded-full pointer-events-none z-[9998] hidden md:block transition-all duration-200 ${
          isOnSkillCard ? 'border-white/30' : 'border-black/20'
        }`}
        animate={{
          x: mousePosition.x - 14,
          y: mousePosition.y - 14,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.3
        }}
      />
    </>
  )
}

