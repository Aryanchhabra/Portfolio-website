import { motion, useScroll } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Destinations with themed visuals
const destinations = [
  { name: 'Welcome', icon: '○', description: 'Start' },
  { name: 'About', icon: '◆', description: 'Who I Am' },
  { name: 'Journey', icon: '▲', description: 'Experience' },
  { name: 'Work', icon: '■', description: 'Projects' },
  { name: 'Skills', icon: '●', description: 'Expertise' },
  { name: 'Connect', icon: '★', description: 'Contact' }
]

// Journey Road with Destinations
function JourneyRoad({ progress }) {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-40 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Road */}
        <div className="relative h-1 bg-black/20 rounded-full">
          {/* Progress indicator */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-black rounded-full"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        
        {/* Destination markers */}
        <div className="absolute top-0 left-0 right-0 flex justify-between -mt-3">
          {destinations.map((dest, i) => {
            const destProgress = i / (destinations.length - 1)
            const isReached = progress >= destProgress - 0.05
            const isCurrent = progress >= destProgress - 0.08 && progress < destProgress + 0.15
            
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Location marker */}
                <motion.div
                  className="relative mb-2"
                  animate={isCurrent ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {/* Icon container */}
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-xl
                    border-2 transition-all duration-300
                    ${isReached 
                      ? 'bg-black border-black text-white' 
                      : 'bg-white border-black/30 text-black/40'
                    }
                  `}>
                    {dest.icon}
                  </div>
                  
                  {/* Pulse effect for current */}
                  {isCurrent && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-black"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0.5, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2
                      }}
                    />
                  )}
                </motion.div>
                
                {/* Location name */}
                <div className="text-center">
                  <div className={`text-sm font-bold transition-colors duration-300 ${
                    isReached ? 'text-black' : 'text-gray-400'
                  }`}>
                    {dest.name}
                  </div>
                  <div className="text-xs text-gray-500 hidden md:block">
                    {dest.description}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function InteractiveWorld({ children }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setScrollProgress(v)
    })
    return () => unsubscribe()
  }, [scrollYProgress])
  
  return (
    <div ref={containerRef} className="relative">
      {children}
      
      {/* Journey road with destinations */}
      <JourneyRoad progress={scrollProgress} />
    </div>
  )
}

