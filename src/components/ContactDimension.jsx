import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ContactDimension() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const socials = [
    { name: 'Email', link: 'mailto:aryanchhabra13.ac@gmail.com' },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/aryanchhabraai' },
    { name: 'GitHub', link: 'https://github.com/aryanchhabra' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section ref={ref} className="relative min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-bold mb-6 text-black"
          >
            Let's Connect
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss opportunities and create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
              <div className="relative p-8 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200 overflow-hidden shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Name</label>
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/20 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-all"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/20 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-all"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <motion.textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/20 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-all resize-none"
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-black text-white font-bold text-lg overflow-hidden relative group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Send Message</span>
                  <motion.div
                    className="absolute inset-0 bg-gray-800"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="p-8 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <h3 className="text-2xl font-bold text-black mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                I'm actively seeking Data Scientist / Product Analytics roles where I can own 
                data pipelines, run experiments, and move quickly from insight to impact. 
                Let's connect if you're building something exciting!
              </p>

                  {/* Contact details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-gray-700">
                      <div className="w-1 h-1 bg-black rounded-full mt-2"></div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Location</div>
                        <span>Pune, Maharashtra, India</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <div className="w-1 h-1 bg-black rounded-full mt-2"></div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Email</div>
                        <span>aryanchhabra13.ac@gmail.com</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <div className="w-1 h-1 bg-black rounded-full mt-2"></div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Phone</div>
                        <span>+91 95794 85737</span>
                      </div>
                    </div>
                  </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <h3 className="text-2xl font-bold text-black mb-6">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => (
                  <motion.a
                        key={social.name}
                        href={social.link}
                        className="relative p-6 rounded-xl bg-white border border-gray-200 text-center overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -4, boxShadow: "0 12px 40px rgb(0,0,0,0.08)" }}
                        onMouseEnter={() => setHoveredSocial(social.name)}
                        onMouseLeave={() => setHoveredSocial(null)}
                      >
                        <div className="relative z-10">
                          <div className="font-semibold text-black text-lg">
                            {social.name}
                          </div>
                          <motion.div
                            className="mt-2 w-8 h-0.5 bg-black mx-auto"
                            animate={hoveredSocial === social.name ? { width: '100%' } : { width: '2rem' }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>

          {/* Footer */}
          <motion.div
            className="text-center mt-20 pb-32"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
          >
            <p className="text-gray-500 text-sm">
              © 2025 Aryan Chhabra
            </p>
          </motion.div>
    </section>
  )
}

