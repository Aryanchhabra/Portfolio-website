import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="py-24 px-6 text-center">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif font-bold text-[clamp(32px,6vw,60px)] leading-[1.1] gradient-text mb-4">
            Let's build something remarkable
          </h2>
          <p className="text-lg text-text-muted mb-8 max-w-[60ch] mx-auto">
            Open to full-time roles across data, AI, and growth. Whether you're hiring or just want
            to chat about tech, reach out.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:aryanchhabra13.ac@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold no-underline text-lg transition-all duration-200 bg-gradient-to-br from-accent-violet to-accent-pink text-white shadow-[0_8px_24px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(139,92,246,0.5)]"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/aryanchhabraai"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold no-underline text-lg transition-all duration-200 bg-white/[0.08] text-text backdrop-blur-lg border border-white/15 hover:-translate-y-0.5 hover:bg-white/[0.12]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Aryanchhabra"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold no-underline text-lg transition-all duration-200 bg-transparent text-text-muted border border-white/20 hover:text-text hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

