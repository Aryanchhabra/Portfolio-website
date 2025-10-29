import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const skills = [
    {
      icon: '💻',
      title: 'Programming',
      items: 'Python, SQL',
    },
    {
      icon: '🤖',
      title: 'Data Science',
      items:
        'Pandas, NumPy, scikit-learn, TensorFlow, PyTorch, Predictive Modeling, Cohort/RFM Analysis',
    },
    {
      icon: '📊',
      title: 'Visualization',
      items: 'Power BI, Tableau, Matplotlib, Seaborn, Plotly',
    },
    {
      icon: '⚡',
      title: 'AI & Automation',
      items: 'LangChain, LangGraph, Hugging Face, APIs, n8n, Web Crawling',
    },
    {
      icon: '🛠️',
      title: 'Tools',
      items: 'Cursor, Git, GitHub, Flask, Streamlit, Jupyter, Colab',
    },
    {
      icon: '🌍',
      title: 'Languages',
      items: 'English (Full Professional), Hindi (Native), Marathi (Limited Working)',
    },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-semibold text-xs tracking-[0.12em] uppercase text-accent-cyan mb-3">
            Skills
          </span>
          <h2 className="font-serif font-bold text-[clamp(28px,5vw,54px)] leading-[1.1] tracking-tight mb-8">
            Technical arsenal
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.05 }}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="text-[32px] mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-base mb-2">{skill.title}</h3>
                <p className="text-sm text-text-muted">{skill.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

