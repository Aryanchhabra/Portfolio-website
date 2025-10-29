import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FloatingCard3D({ children, delay = 0, float = true }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateXValue = (y - centerY) / 10
    const rotateYValue = (centerX - x) / 10
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }
  
  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }
  
  return (
    <motion.div
      className="relative"
      style={{
        perspective: '1000px',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay, duration: 0.6 }}
    >
      <motion.div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
        animate={float ? {
          y: [0, -15, 0],
          rotateZ: [0, 2, 0, -2, 0],
        } : {}}
        transition={float ? {
          y: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          },
          rotateZ: {
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }
        } : {}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Shadow layer */}
        <div
          className="absolute inset-0 bg-black/20 rounded-3xl blur-2xl"
          style={{
            transform: 'translateZ(-50px) scale(0.9)',
            transformStyle: 'preserve-3d',
          }}
        />
        
        {/* Card content */}
        <div
          className="relative"
          style={{
            transform: 'translateZ(20px)',
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
        
        {/* 3D边框效果 */}
        <div
          className="absolute inset-0 border-2 border-black/10 rounded-3xl pointer-events-none"
          style={{
            transform: 'translateZ(10px)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

