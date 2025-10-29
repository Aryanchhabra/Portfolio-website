import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Resume = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-semibold text-xs tracking-[0.12em] uppercase text-accent-cyan mb-3">
            Resume
          </span>
          <h2 className="font-serif font-bold text-[clamp(28px,5vw,54px)] leading-[1.1] tracking-tight mb-8">
            Full overview
          </h2>

          <div className="grid gap-4">
            <object
              data="resume/aryan-chhabra-resume.pdf"
              type="application/pdf"
              className="w-full h-[min(80vh,900px)] border-0 rounded-2xl bg-[#1a1028]"
            >
              <iframe
                src="resume/aryan-chhabra-resume.pdf"
                className="w-full h-[min(80vh,900px)] border-0 rounded-2xl"
                title="Resume"
              />
            </object>

            <div className="flex gap-3">
              <a
                href="resume/aryan-chhabra-resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold no-underline transition-all duration-200 bg-gradient-to-br from-accent-violet to-accent-pink text-white shadow-[0_8px_24px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(139,92,246,0.5)]"
              >
                Open PDF
              </a>
              <a
                href="resume/aryan-chhabra-resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold no-underline transition-all duration-200 bg-white/[0.08] text-text backdrop-blur-lg border border-white/15 hover:-translate-y-0.5 hover:bg-white/[0.12]"
              >
                Download
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume

