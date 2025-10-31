import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function HeroSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-tl from-gray-100 to-transparent rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-black/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 border-2 border-black/20"
          animate={{
            rotate: [0, 360],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
          }}
        >
          {/* Massive Name Display with Enhanced Animation */}
          <motion.h1
            className="relative mb-6 sm:mb-8"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            <motion.span 
              className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tight leading-[0.9]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-gradient-to-br from-black via-gray-900 to-gray-700 bg-clip-text text-transparent">
                Aryan
              </span>
            </motion.span>
            <motion.span 
              className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tight leading-[0.9] mt-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-block bg-gradient-to-br from-gray-700 via-gray-900 to-black bg-clip-text text-transparent">
                Chhabra
              </span>
            </motion.span>
            
            {/* Decorative line accent */}
            <motion.div
              className="h-1 bg-black mt-6 sm:mt-8 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.h1>

          {/* Dynamic Role Display - Enhanced */}
          <motion.div
            className="mb-10 sm:mb-12"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } }
            }}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <motion.span 
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white text-sm sm:text-base lg:text-lg font-bold rounded-full shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
                transition={{ duration: 0.2 }}
              >
                Data Scientist
              </motion.span>
              <span className="text-3xl sm:text-4xl text-gray-300 font-thin">×</span>
              <motion.span 
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white text-sm sm:text-base lg:text-lg font-bold rounded-full shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
                transition={{ duration: 0.2 }}
              >
                ML Engineer
              </motion.span>
            </div>
          </motion.div>

          {/* Tagline - Enhanced */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto mb-14 sm:mb-20 px-4 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
            }}
          >
            <span className="font-light">Building </span>
            <span className="font-bold text-black">intelligent systems</span>
            <span className="font-light"> that transform data into </span>
            <span className="font-bold text-black">actionable insights</span>
            <span className="font-light"> and </span>
            <span className="font-bold text-black">measurable impact</span>
          </motion.p>

          {/* CTA Buttons - Enhanced */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
            }}
          >
            <motion.a 
              href="#projects"
              className="group relative px-10 py-5 bg-black text-white rounded-full font-semibold text-base sm:text-lg overflow-hidden inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group px-10 py-5 border-2 border-black text-black rounded-full font-semibold text-base sm:text-lg inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.03)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                Let's Connect
                <motion.span
                  className="inline-block"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: -45 }}
                  transition={{ duration: 0.3 }}
                >
                  ↗
                </motion.span>
              </span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

