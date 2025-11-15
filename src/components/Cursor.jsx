import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isOnSkillCard, setIsOnSkillCard] = useState(false)
  const magneticTarget = useRef(null)

  useEffect(() => {
    // Only show custom cursor on desktop
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    setIsVisible(isDesktop)

    if (!isDesktop) return

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Find nearest interactive element for magnetic effect
      const interactiveElements = document.querySelectorAll('a, button')
      let nearestElement = null
      let minDistance = 100 // magnetic range in pixels
      
      interactiveElements.forEach(element => {
        const rect = element.getBoundingClientRect()
        const elementCenterX = rect.left + rect.width / 2
        const elementCenterY = rect.top + rect.height / 2
        const distance = Math.sqrt(
          Math.pow(e.clientX - elementCenterX, 2) + 
          Math.pow(e.clientY - elementCenterY, 2)
        )
        
        if (distance < minDistance) {
          minDistance = distance
          nearestElement = { x: elementCenterX, y: elementCenterY, distance }
        }
      })
      
      // Apply magnetic pull
      if (nearestElement && nearestElement.distance < 80) {
        const pullStrength = 1 - (nearestElement.distance / 80)
        const pullX = (nearestElement.x - e.clientX) * pullStrength * 0.3
        const pullY = (nearestElement.y - e.clientY) * pullStrength * 0.3
        setCursorPosition({ 
          x: e.clientX + pullX, 
          y: e.clientY + pullY 
        })
        magneticTarget.current = nearestElement
      } else {
        setCursorPosition({ x: e.clientX, y: e.clientY })
        magneticTarget.current = null
      }
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
      {/* Outer glow ring with gradient */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          width: 40,
          height: 40,
          background: isOnSkillCard 
            ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)'
            : 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 70%)',
          filter: isOnSkillCard ? 'blur(8px)' : 'blur(10px)'
        }}
        animate={{
          x: cursorPosition.x - 20,
          y: cursorPosition.y - 20,
          scale: isPointer ? 1.3 : 1
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 20, mass: 0.3 },
          y: { type: "spring", stiffness: 300, damping: 20, mass: 0.3 },
          scale: { type: "spring", stiffness: 500, damping: 30 }
        }}
      />

      {/* Main cursor with gradient border */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          width: 24,
          height: 24,
          border: `2px solid ${isOnSkillCard ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'}`,
          boxShadow: isOnSkillCard 
            ? '0 0 20px rgba(255,255,255,0.3), inset 0 0 10px rgba(255,255,255,0.1)'
            : '0 0 20px rgba(0,0,0,0.15), inset 0 0 10px rgba(0,0,0,0.05)'
        }}
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: isPointer ? 1.4 : 1,
          rotate: magneticTarget.current ? 180 : 0
        }}
        transition={{
          x: { type: "spring", stiffness: 400, damping: 25, mass: 0.2 },
          y: { type: "spring", stiffness: 400, damping: 25, mass: 0.2 },
          scale: { type: "spring", stiffness: 500, damping: 30 },
          rotate: { type: "spring", stiffness: 200, damping: 20 }
        }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          width: 4,
          height: 4,
          backgroundColor: isOnSkillCard ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
          boxShadow: isOnSkillCard 
            ? '0 0 8px rgba(255,255,255,0.6)'
            : '0 0 8px rgba(0,0,0,0.4)'
        }}
        animate={{
          x: cursorPosition.x - 2,
          y: cursorPosition.y - 2,
          scale: isPointer ? 0 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.1
        }}
      />

      {/* Orbiting particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] hidden md:block"
          style={{
            width: 3,
            height: 3,
            backgroundColor: isOnSkillCard ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
          }}
          animate={{
            x: cursorPosition.x - 1.5 + Math.cos((Date.now() / 1000 + i * 2.1)) * (isPointer ? 16 : 12),
            y: cursorPosition.y - 1.5 + Math.sin((Date.now() / 1000 + i * 2.1)) * (isPointer ? 16 : 12),
            opacity: isPointer ? 1 : 0.6
          }}
          transition={{
            x: { type: "spring", stiffness: 200, damping: 20 },
            y: { type: "spring", stiffness: 200, damping: 20 },
            opacity: { duration: 0.3 }
          }}
        />
      ))}
    </>
  )
}

