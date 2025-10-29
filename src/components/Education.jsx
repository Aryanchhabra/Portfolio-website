import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const certifications = [
    'Complete Data Analyst Bootcamp — Udemy (2025)',
    'Foundations: Data, Data, Everywhere — Google (2024)',
    'Introduction to Machine Learning — NPTEL IIT KGP (2024)',
    'Develop GenAI Apps with Gemini and Streamlit',
    'Inspect Rich Documents with Gemini',
    'Multimodality and Multimodal RAG',
    'Data Analytics Essentials',
  ]

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-semibold text-xs tracking-[0.12em] uppercase text-accent-cyan mb-3">
            Education & Certifications
          </span>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 mb-6">
            <h3 className="font-serif font-semibold text-xl mb-2">
              B.E. — Artificial Intelligence & Data Science
            </h3>
            <div className="text-sm text-text-muted">
              Savitribai Phule Pune University · 2021 — 2025 · CGPA 8.3
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="p-3.5 px-4.5 rounded-2xl bg-white/[0.04] border border-dashed border-white/15 text-sm text-text-muted"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

