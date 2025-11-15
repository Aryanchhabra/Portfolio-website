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
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
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
      </div>

      {/* Content - Side by Side Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Side - Profile Picture */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-1"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-[0_20px_60px_rgb(0,0,0,0.12)]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/linkedinimage.jpeg" 
                  alt="Aryan Chhabra"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </motion.div>

              {/* Floating accent ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-black/10"
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-2"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            {/* Greeting */}
            <motion.p
              className="text-2xl sm:text-3xl text-gray-500 mb-4 font-light"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } }
              }}
            >
              <span className="bg-gradient-to-br from-black via-gray-900 to-gray-700 bg-clip-text text-transparent">
                Aryan Chhabra
              </span>
            </motion.h1>

            {/* Role Pills */}
            <motion.div
              className="mb-8 flex flex-wrap gap-3 justify-center lg:justify-start"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
            >
              <span className="px-5 py-2.5 bg-black text-white text-sm sm:text-base font-bold rounded-full shadow-md">
                Data Scientist
              </span>
              <span className="px-5 py-2.5 bg-black text-white text-sm sm:text-base font-bold rounded-full shadow-md">
                ML Engineer
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } }
              }}
            >
              Building <span className="font-bold text-black">intelligent systems</span> that transform data into{' '}
              <span className="font-bold text-black">actionable insights</span> and{' '}
              <span className="font-bold text-black">measurable impact</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
            >
              <motion.a 
                href="#projects"
                className="group relative px-8 py-4 bg-black text-white rounded-full font-semibold text-base overflow-hidden inline-block"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group px-8 py-4 border-2 border-black text-black rounded-full font-semibold text-base inline-block hover:bg-black hover:text-white transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Let&apos;s Connect
                  <span className="inline-block group-hover:rotate-45 transition-transform">↗</span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

