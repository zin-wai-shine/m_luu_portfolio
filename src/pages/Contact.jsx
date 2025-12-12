import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! Your message has been received.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📞',
      label: 'Phone',
      value: '0807965360 / +66951711711',
      link: 'tel:+66951711711',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'thantzaw5595@gmail.com',
      link: 'mailto:thantzaw5595@gmail.com',
    },
    {
      icon: '📍',
      label: 'Address',
      value: '89 Soi Thanom Chit, Ratchadaphisek, Din Daeng, Bangkok 10400',
      link: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Contact" subtitle="Get in touch with me" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Left Side: Contact Form */}
          <motion.div variants={itemVariants}>
            <Card>
              <h2 className="text-2xl font-semibold text-deep-yellow mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-deep-yellow transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-deep-yellow transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-deep-yellow transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Right Side: Contact Details */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-deep-yellow mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {info.label}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-700 dark:text-gray-300 hover:text-deep-yellow transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Thank You Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Card className="text-center">
            <h3 className="text-2xl font-display text-deep-yellow mb-2">Thank You</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Thank you for your interest in my work. I look forward to hearing from you and discussing potential collaborations.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
