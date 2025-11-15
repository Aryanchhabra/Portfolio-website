import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isOnSkillCard, setIsOnSkillCard] = useState(false)
  const [ripples, setRipples] = useState([])

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

    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        isOnDark: isOnSkillCard
      }
      setRipples(prev => [...prev, newRipple])
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
      }, 600)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', updateCursorType)
    window.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', updateCursorType)
      window.removeEventListener('mousedown', handleClick)
    }
  }, [isOnSkillCard])

  if (!isVisible) return null

  return (
    <>
      {/* Clean minimalist cursor */}
      <motion.div
        className={`fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference`}
        style={{
          border: '1.5px solid white'
        }}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{
          x: { type: "spring", stiffness: 2000, damping: 50, mass: 0.1 },
          y: { type: "spring", stiffness: 2000, damping: 50, mass: 0.1 },
          scale: { type: "spring", stiffness: 400, damping: 25 }
        }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] hidden md:block bg-white mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isPointer ? 0 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 2000,
          damping: 50,
          mass: 0.05
        }}
      />

      {/* Click ripples */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:block ${
              ripple.isOnDark ? 'border-white' : 'border-black'
            }`}
            style={{
              x: ripple.x - 20,
              y: ripple.y - 20,
              width: 40,
              height: 40,
              borderWidth: 2
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </>
  )
}

