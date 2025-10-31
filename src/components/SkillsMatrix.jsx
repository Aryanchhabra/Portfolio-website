import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "R"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "TensorFlow", "scikit-learn", "AI Agents", "LLMs", "Deep Learning"]
  },
  {
    title: "Data Science & Analytics",
    skills: ["Pandas", "NumPy", "Plotly", "Power BI", "Data Visualization", "Statistical Analysis"]
  },
  {
    title: "Web & Frameworks",
    skills: ["React", "Streamlit", "Flask", "Vite", "Tailwind CSS", "API Development"]
  },
  {
    title: "AI Development Tools",
    skills: ["Cursor AI", "Vibe Coding", "Lovable", "n8n", "LangChain"]
  },
  {
    title: "Version Control & Collaboration",
    skills: ["Git", "GitHub"]
  }
]

function CategorySection({ category, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Category Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-black"></span>
        {category.title}
      </h3>
      
      {/* Skills Grid */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            className="group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.3 }}
          >
            <motion.div
              className="px-5 py-3 rounded-full bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-black transition-colors">
                {skill}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsMatrix() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="relative min-h-screen px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-black"
          >
            Technical Skills
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, data-driven solutions
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-8 sm:space-y-10">
          {skillCategories.map((category, index) => (
            <CategorySection key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/5 border-2 border-black/10">
            <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              Always exploring new tools and technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

