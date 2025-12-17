import { motion } from 'framer-motion'
import Card from '../components/Card'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { SiLine, SiTiktok, SiFacebook } from 'react-icons/si'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Phone Number',
      value: '0807965360',
      link: 'tel:0807965360',
    },
    {
      icon: FaEnvelope,
      label: 'Email Address',
      value: 'thantzaw5595@gmail.com',
      link: 'mailto:thantzaw5595@gmail.com',
    },
  ]

  const socialMedia = [
    {
      platform: 'Line',
      username: 'mluutz5595',
      icon: SiLine,
      link: 'https://line.me/ti/p/~mluutz5595',
    },
    {
      platform: 'TikTok',
      username: 'MLuutz',
      icon: SiTiktok,
      link: 'https://www.tiktok.com/@MLuutz',
    },
  ]

  const facebookInfo = {
    platform: 'Facebook',
    username: 'M Luu TZ',
    icon: SiFacebook,
    link: 'https://www.facebook.com/david.luu.376258',
  }

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
    <div className="min-h-screen pt-24 pb-20 bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-black">
        <div className="container mx-auto max-w-7xl lg:max-w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Decorative accent line with glow */}
            <motion.div 
              className="w-20 h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow to-transparent mx-auto mb-10"
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                boxShadow: '0 0 10px rgba(237, 187, 28, 0.5)',
              }}
            ></motion.div>
            
            <h1 
              style={{ 
                color: '#9DA3AF',
                letterSpacing: '0.03em',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight"
            >
              Get in <br />
              <span 
                className="text-deep-yellow"
                style={{
                  textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                }}
              >
                Touch
              </span>
            </h1>
            <p 
              style={{ 
                color: '#9DA3AF',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                letterSpacing: '0.15em',
              }}
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
            >
              Let's discuss your next project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-4 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          {/* Three Column Layout: Contact Info, Social Media, Facebook */}
          <div className="grid md:grid-cols-3 gap-8 mx-auto">
            {/* First Column: Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div style={{ color: '#9DA3AF' }} className="flex-shrink-0">
                          <info.icon className="text-2xl" />
                        </div>
                        <div className="flex-1">
                          <h3 
                            style={{ color: '#9DA3AF' }}
                            className="text-sm font-light uppercase tracking-wider mb-2"
                          >
                            {info.label}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              style={{ color: '#9DA3AF' }}
                              className="text-base font-light hover:text-deep-yellow transition-colors break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p 
                              style={{ color: '#9DA3AF' }}
                              className="text-base font-light leading-relaxed"
                            >
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Second Column: Social Media Section (Line & TikTok) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 gap-6">
                {socialMedia.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4">
                        <div style={{ color: '#9DA3AF' }} className="flex-shrink-0">
                          <social.icon className="text-2xl" />
                        </div>
                        <div className="flex-1">
                          <h4 
                            style={{ color: '#9DA3AF' }}
                            className="text-sm font-light uppercase tracking-wider mb-2"
                          >
                            {social.platform}
                          </h4>
                          <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#9DA3AF' }}
                            className="text-base font-light hover:text-deep-yellow transition-colors break-all"
                          >
                            {social.username}
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Third Column: Facebook */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center gap-4">
                  <div style={{ color: '#9DA3AF' }} className="flex-shrink-0">
                    <facebookInfo.icon className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 
                      style={{ color: '#9DA3AF' }}
                      className="text-sm font-light uppercase tracking-wider mb-2"
                    >
                      {facebookInfo.platform}
                    </h4>
                    <a
                      href={facebookInfo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#9DA3AF' }}
                      className="text-base font-light hover:text-deep-yellow transition-colors break-all"
                    >
                      {facebookInfo.username}
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
        
        {/* Black filter at base/bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-10"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)'
          }}
        ></div>
      </section>
    </div>
  )
}

export default Contact
