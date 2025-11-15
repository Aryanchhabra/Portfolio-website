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

  // Create trail effect with multiple delayed circles
  const trailCount = 8
  const trails = Array.from({ length: trailCount }, (_, i) => ({
    delay: i * 0.02,
    opacity: 1 - (i / trailCount) * 0.9,
    scale: 1 - (i / trailCount) * 0.5,
    size: 12 - i * 1
  }))

  return (
    <>
      {/* Trail effect */}
      {trails.map((trail, i) => (
        <motion.div
          key={i}
          className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9997] hidden md:block ${
            isOnSkillCard ? 'bg-white' : 'bg-black'
          }`}
          style={{
            width: trail.size,
            height: trail.size,
            opacity: trail.opacity * 0.3
          }}
          animate={{
            x: mousePosition.x - trail.size / 2,
            y: mousePosition.y - trail.size / 2,
            scale: isPointer ? trail.scale * 1.2 : trail.scale
          }}
          transition={{
            type: "spring",
            stiffness: 600 - i * 50,
            damping: 30 + i * 2,
            mass: 0.1 + i * 0.05
          }}
        />
      ))}

      {/* Main cursor dot */}
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block ${
          isOnSkillCard ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-black shadow-[0_0_10px_rgba(0,0,0,0.3)]'
        }`}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 1200,
          damping: 35,
          mass: 0.1
        }}
      />
    </>
  )
}

