// Optimized abstract background with wavy lines
import { motion } from 'framer-motion'

export default function SimpleBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Clean white base */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Wavy lines - Abstract art style */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0" />
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="1" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0" />
            <stop offset="50%" stopColor="#cbd5e1" stopOpacity="1" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Wave paths */}
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100 L1000,102 Q750,52 500,102 T0,102 Z"
          fill="url(#waveGrad1)"
          animate={{ d: [
            "M0,100 Q250,50 500,100 T1000,100 L1000,102 Q750,52 500,102 T0,102 Z",
            "M0,100 Q250,150 500,100 T1000,100 L1000,102 Q750,148 500,102 T0,102 Z",
            "M0,100 Q250,50 500,100 T1000,100 L1000,102 Q750,52 500,102 T0,102 Z"
          ]}}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M0,300 Q300,250 600,300 T1200,300 L1200,302 Q900,248 600,302 T0,302 Z"
          fill="url(#waveGrad2)"
          animate={{ d: [
            "M0,300 Q300,250 600,300 T1200,300 L1200,302 Q900,248 600,302 T0,302 Z",
            "M0,300 Q300,350 600,300 T1200,300 L1200,302 Q900,352 600,302 T0,302 Z",
            "M0,300 Q300,250 600,300 T1200,300 L1200,302 Q900,248 600,302 T0,302 Z"
          ]}}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", delay: 2 }}
        />
        
        <motion.path
          d="M0,500 Q200,450 400,500 T800,500 L800,502 Q600,448 400,502 T0,502 Z"
          fill="url(#waveGrad1)"
          animate={{ d: [
            "M0,500 Q200,450 400,500 T800,500 L800,502 Q600,448 400,502 T0,502 Z",
            "M0,500 Q200,550 400,500 T800,500 L800,502 Q600,548 400,502 T0,502 Z",
            "M0,500 Q200,450 400,500 T800,500 L800,502 Q600,448 400,502 T0,502 Z"
          ]}}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut", delay: 4 }}
        />
        
        <motion.path
          d="M0,700 Q350,650 700,700 T1400,700 L1400,702 Q1050,648 700,702 T0,702 Z"
          fill="url(#waveGrad2)"
          animate={{ d: [
            "M0,700 Q350,650 700,700 T1400,700 L1400,702 Q1050,648 700,702 T0,702 Z",
            "M0,700 Q350,750 700,700 T1400,700 L1400,702 Q1050,752 700,702 T0,702 Z",
            "M0,700 Q350,650 700,700 T1400,700 L1400,702 Q1050,648 700,702 T0,702 Z"
          ]}}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut", delay: 1 }}
        />
      </svg>
      
      {/* Subtle floating gradient orbs for depth */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            width: '250px',
            height: '250px',
            top: i === 0 ? '15%' : '65%',
            left: i === 0 ? '5%' : '75%',
            background: `radial-gradient(circle, rgba(148, 163, 184, 0.08), transparent)`
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
            delay: i * 6
          }}
        />
      ))}
    </div>
  )
}

