import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function HeroSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false })

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
              {/* Badge */}
              <motion.div
                className="inline-block mb-4 sm:mb-6"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <span className="px-6 py-2 bg-black/5 border border-black/20 rounded-full text-gray-700 text-sm font-medium backdrop-blur-xl">
                  Data-Driven Problem Solver
                </span>
              </motion.div>

          {/* Main heading with gradient */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent leading-tight px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Aryan Chhabra
          </motion.h1>

          {/* Subtitle with typewriter effect look */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 sm:mb-8 font-light px-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-gray-900 font-medium">Data Scientist</span> &{' '}
            <span className="text-gray-900 font-medium">ML Engineer</span>
          </motion.p>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Transforming messy data into measurable impact through analytics, experimentation, and machine learning
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a 
              href="#projects"
              className="group relative px-8 py-4 bg-black rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30 inline-block"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-black/30 rounded-full font-semibold text-gray-900 backdrop-blur-xl hover:bg-black/5 hover:border-black/50 transition-all duration-300 hover:scale-105 inline-block"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

