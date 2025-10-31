import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AboutPortal() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
    >
      <div ref={ref} className="relative max-w-7xl mx-auto w-full">
        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Profile Image */}
          <motion.div
            className="relative flex justify-center order-first md:order-first"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_40px_rgb(0,0,0,0.1)]">
                  <img 
                    src="/linkedinimage.jpeg" 
                    alt="Aryan Chhabra"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-last md:order-last"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-black">
              About Me
            </h2>

            <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6 leading-relaxed font-medium">
              I'm Aryan Chhabra, an AI & Data Science engineer passionate about building intelligent 
              systems that solve real problems. I work at the intersection of data, machine learning, 
              and user experience to create tools that make decision-making smarter and more intuitive.
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              My projects span from adaptive testing platforms to fraud detection models and AI research 
              systems. I love working with Python, building interactive dashboards with Streamlit, and 
              creating modern web experiences with React. Each project teaches me something new about 
              how data and design can work together seamlessly.
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              I'm constantly learning and experimenting with new technologies. When I'm not coding, 
              you'll find me sketching app concepts, diving into research papers, or thinking about 
              the next big idea I want to build.
            </p>

            <p className="text-sm sm:text-base text-gray-800 font-semibold leading-relaxed mb-8">
              I believe great AI should feel human: adaptive, transparent, and built to create real impact.
            </p>

            {/* Focus Areas - Minimalist */}
            <div className="space-y-3 sm:space-y-4">
              {[
                "Machine Learning & AI Development",
                "Data Analysis & Visualization", 
                "Full Stack Web Applications",
                "Predictive Modeling & Analytics"
              ].map((area, i) => (
                <motion.div
                  key={i}
                  className="group flex items-center gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-black transition-colors">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

