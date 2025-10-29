import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import FloatingCard3D from './FloatingCard3D'

const projects = [
  {
    id: 1,
    title: "India Olympic Medal Prediction",
    description: "Analyzed historical Olympic data (1948-2016) and trained regression models to predict India's medal performance. Built an interactive Streamlit dashboard with MAE < 3 medals.",
    tags: ["Python", "Random Forest", "Streamlit", "Plotly"],
    link: "https://github.com/Aryanchhabra/India-at-the-Olympics"
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description: "Processed 7K+ customer entries to identify churn risks. Trained Logistic Regression and Random Forest models achieving AUC = 0.85 with SHAP explainability.",
    tags: ["scikit-learn", "SHAP", "Pandas", "ML"],
    link: "https://github.com/Aryanchhabra/customer-churn-analysis"
  },
  {
    id: 3,
    title: "E-commerce Analytics Dashboard",
    description: "Analyzed 540K+ transactions using SQL and Pandas. Conducted RFM segmentation and cohort analysis to identify high-value users and retention trends.",
    tags: ["SQL", "Pandas", "Plotly", "Analytics"],
    link: "https://github.com/Aryanchhabra/ecommerce-customer-analytics"
  },
  {
    id: 4,
    title: "Deep Research AI",
    description: "Automated multi-agent system for conducting comprehensive web research and generating fact-checked answers. Employs specialized components working together to gather, analyze, and synthesize information intelligently.",
    tags: ["AI Agents", "LLMs", "Python", "Research"],
    link: "https://github.com/Aryanchhabra/DeepResearchAI"
  }
]

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false })

  return (
    <div ref={ref}>
      <FloatingCard3D delay={index * 0.1}>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card */}
          <motion.div
            className="relative min-h-[360px] sm:h-96 rounded-2xl overflow-hidden cursor-pointer bg-white/95 backdrop-blur-xl border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
            whileHover={{ scale: 1.01, y: -4, boxShadow: "0 12px 40px rgb(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Content */}
            <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between">
              {/* Project number indicator */}
              <motion.div
                className="text-6xl sm:text-7xl font-bold text-black/[0.03] mb-3 sm:mb-4 tracking-tighter"
                animate={isHovered ? { opacity: 0.06 } : { opacity: 0.03 }}
                transition={{ duration: 0.3 }}
              >
                {String(project.id).padStart(2, '0')}
              </motion.div>

              <div>
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black">
                  {project.title}
                </h3>

            {/* Description */}
            <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-1 bg-black/5 rounded-full text-xs text-gray-700 border border-black/10"
                >
                  {tag}
                </span>
              ))}
            </div>

                {/* CTA */}
                <motion.div
                  className="block w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-gray-900 to-black text-white font-semibold text-center text-sm sm:text-base shadow-lg"
                  whileHover={{ scale: 1.01, boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.99 }}
                >
                  View Project →
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 border-2 border-black/30 rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
  </FloatingCard3D>
</div>
  )
}

export default function ProjectsGalaxy() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false })

  return (
    <section ref={ref} className="relative min-h-screen px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-black px-4"
          >
            Projects Gallery
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explore my data science projects, each solving real-world problems with analytics and ML
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/Aryanchhabra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-black/30 rounded-full font-semibold text-black backdrop-blur-xl hover:bg-black/5 hover:border-black/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

