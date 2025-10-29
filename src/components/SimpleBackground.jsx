// Optimized abstract background - performance focused
import { motion } from 'framer-motion'

export default function SimpleBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Premium gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-slate-50" />
      
      {/* Static refined grid pattern - no animation for better performance */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, #94a3b8 1px, transparent 1px),
          linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />
      
      {/* Reduced diagonal lines - only 4 instead of 12 */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`diag-${i}`}
          className="absolute h-full origin-top will-change-transform"
          style={{ 
            left: `${15 + i * 20}%`,
            width: '1.5px',
            transform: `rotate(${-15 + i * 10}deg)`,
            transformOrigin: 'top',
            background: `linear-gradient(to bottom, transparent, #cbd5e1, transparent)`,
            opacity: 0.12
          }}
          animate={{
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
            delay: i * 2
          }}
        />
      ))}
      
      {/* Reduced horizontal lines - only 3 instead of 8 */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`horiz-${i}`}
          className="absolute w-full will-change-transform"
          style={{ 
            top: `${20 + i * 30}%`, 
            height: '1.5px',
            background: `linear-gradient(to right, transparent, #cbd5e1, transparent)`,
            opacity: 0.1
          }}
          animate={{
            opacity: [0.06, 0.14, 0.06]
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: i * 3
          }}
        />
      ))}
      
      {/* Reduced orbs - only 2 instead of 5 */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            width: '200px',
            height: '200px',
            top: i === 0 ? '20%' : '60%',
            left: i === 0 ? '10%' : '70%',
            background: `radial-gradient(circle, rgba(148, 163, 184, 0.12), transparent)`
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            delay: i * 5
          }}
        />
      ))}
    </div>
  )
}

