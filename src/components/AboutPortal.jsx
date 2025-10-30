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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              {[
                { number: "15+", label: "Projects" },
                { number: "8.3", label: "CGPA" },
                { number: "2025", label: "Graduate" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-3 sm:p-4 md:p-6 text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                  whileHover={{ y: -2, boxShadow: "0 8px 30px rgb(0,0,0,0.08)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

