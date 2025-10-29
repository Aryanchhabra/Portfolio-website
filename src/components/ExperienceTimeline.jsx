import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    year: "2025",
    title: "Data Science Intern (Founder's Office)",
    company: "Primeloop AI",
    description: "Built and automated data collection workflows using n8n, reducing manual work by 40%. Analyzed campaign metrics and produced reports visualizing engagement rates and funnel efficiency.",
    skills: ["Python", "n8n", "Analytics", "SQL"]
  },
  {
    year: "2021-2025",
    title: "B.E. Artificial Intelligence & Data Science",
    company: "Savitribai Phule Pune University",
    description: "CGPA: 8.3 | Focused on machine learning, data analytics, and building data-driven solutions. Completed multiple real-world projects in predictive modeling and data visualization.",
    skills: ["ML", "Python", "Data Analysis", "Statistics"]
  },
  {
    year: "2024",
    title: "Certifications & Learning",
    company: "Google, NPTEL (IIT KGP)",
    description: "Completed Google's Data Analytics Foundations and NPTEL's Introduction to Machine Learning. Continuously learning through hands-on projects and real-world applications.",
    skills: ["Data Analytics", "ML", "Python", "SQL"]
  }
]

function TimelineItem({ experience, index, isLast }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: index * 0.2 }}
    >
      <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
        {/* Content */}
        <motion.div
          className={`${isEven ? 'md:text-right md:pr-8' : 'md:pl-8 md:col-start-2'}`}
          initial={{ x: isEven ? 100 : -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.2, duration: 0.8 }}
        >
          <motion.div
            className="relative p-8 rounded-xl bg-white/95 backdrop-blur-xl border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            whileHover={{ scale: 1.01, y: -6, boxShadow: "0 16px 50px rgb(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative z-10">
                {/* Year badge */}
                <motion.div
                  className="inline-block px-4 py-1 mb-6 bg-black rounded-full text-white font-bold text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {experience.year}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {experience.title}
                </h3>

              {/* Company */}
              <p className="text-lg text-gray-700 mb-3 font-medium">{experience.company}</p>

              {/* Description */}
              <p className="text-gray-600 mb-4">{experience.description}</p>

              {/* Skills */}
              <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                {experience.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-black/5 rounded-full text-xs text-gray-700 border border-black/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline node */}
        <div className={`hidden md:flex justify-center ${isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}>
          <div className="relative">
            {/* Vertical line */}
            {!isLast && (
              <motion.div
                className={`absolute top-12 left-1/2 w-0.5 h-32 bg-gradient-to-b ${experience.color}`}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                style={{ originY: 0 }}
              />
            )}

            {/* Node */}
            <motion.div
              className="relative w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.2, rotate: 180 }}
            >
              <div className="w-6 h-6 rounded-full bg-white" />
            </motion.div>

            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-black/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: index * 0.2
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false })
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="relative min-h-screen px-6 py-20">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-bold mb-6 text-black"
          >
            Experience Timeline
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in data science and analytics
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.year}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

