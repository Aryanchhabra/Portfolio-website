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
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24"
    >
      <div ref={ref} className="relative max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-black mx-auto mt-6" />
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_20px_80px_rgb(0,0,0,0.08)] border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            {/* Introduction */}
            <motion.p
              className="text-lg sm:text-xl text-gray-800 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              I'm an AI and Data Science engineer 
              passionate about building intelligent systems that solve real problems. I work at the intersection 
              of data, machine learning, and user experience to create tools that make decision-making smarter 
              and more intuitive.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              My projects span from adaptive testing platforms to fraud detection models and AI research systems. 
              I love working with Python, building interactive dashboards with Streamlit, and creating modern web 
              experiences with React. Each project teaches me something new about how data and design can work 
              together seamlessly.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              I'm constantly learning and experimenting with new technologies. When I'm not coding, you'll find me 
              sketching app concepts, diving into research papers, or thinking about the next big idea I want to build.
            </motion.p>

            {/* Divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-10"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            />

            {/* Focus Areas Title */}
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              What I Do
            </motion.h3>

            {/* Focus Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: "Machine Learning & AI",
                  description: "Building intelligent systems with TensorFlow, scikit-learn, and custom ML pipelines"
                },
                {
                  title: "Data Analysis & Visualization",
                  description: "Transforming complex data into actionable insights with Python and Power BI"
                },
                {
                  title: "Full Stack Development",
                  description: "Creating seamless web experiences with React, Streamlit, and modern frameworks"
                },
                {
                  title: "Predictive Modeling",
                  description: "Developing models that forecast trends and drive data-driven decisions"
                }
              ].map((area, i) => (
                <motion.div
                  key={i}
                  className="group p-6 rounded-2xl bg-gray-50 hover:bg-black transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white mt-2 transition-colors" />
                    <h4 className="text-lg sm:text-xl font-bold text-black group-hover:text-white transition-colors">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed pl-5">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Closing Statement */}
            <motion.div
              className="mt-10 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
            >
              <p className="text-lg sm:text-xl text-center text-gray-800 font-semibold italic">
                "Great AI should feel human: adaptive, transparent, and built to create real impact."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

