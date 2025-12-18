import { motion } from 'framer-motion'
import Card from '../components/Card'
import experiencePersonImage from '../assets/images/experience_person.png'

const Experience = () => {
  const professionalRoles = [
    {
      title: 'Production Management',
      description: 'Overseeing and coordinating all aspects of production from pre-production planning to final delivery.',
    },
    {
      title: 'Editor & Videographer',
      description: 'Creating compelling visual narratives through expert editing and cinematography.',
    },
    {
      title: 'Camera Operator',
      description: 'Operating cameras for overseas projects, capturing cinematic footage with precision.',
    },
    {
      title: 'Director',
      description: 'Freelance Commercial TVC, Short film, Music Video Director, and Documentary maker.',
    },
  ]

  const awards = [
    {
      title: 'PSA Competition',
      description: 'Film "INSPIRATION" was selected as one of the TOPTEN PSA films (led by GIORANDO & MMDC).',
      icon: '🏆',
      year: '2023',
    },
    {
      title: 'Human Rights Human Dignity International Film Festival',
      description: 'Documentary "LIFELESS" was chosen as one of the National films at the Fifth edition of the festival.',
      icon: '🎖️',
      year: '2022',
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-black">
        <div className="container mx-auto max-w-7xl relative z-10">
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
              Professional <br />
              <span 
                className="text-deep-yellow"
                style={{
                  textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                }}
              >
                Experience
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
              10 years of experience across various production roles in the filmmaking industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 px-4 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <motion.div 
                  className="w-20 h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow to-transparent mb-10"
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  style={{
                    boxShadow: '0 0 10px rgba(237, 187, 28, 0.5)',
                  }}
                ></motion.div>
                <h2 
                  style={{ 
                    color: '#9DA3AF',
                    letterSpacing: '0.03em',
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                  }}
                  className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
                >
                  My <span className="text-deep-yellow" style={{
                    textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                  }}>Expertise</span>
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <p 
                  style={{ 
                    color: '#9DA3AF',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                  }}
                  className="text-lg md:text-xl leading-relaxed font-light"
                >
                  Works as a Production Management, Editor, Videographer & Camera Operator for overseas projects. Currently a Freelance Commercial TVC, Short film, Music Video Director, and Documentary maker.
                </p>
                <p 
                  style={{ color: '#9DA3AF' }}
                  className="text-lg md:text-xl leading-relaxed font-light"
                >
                  With extensive experience across various production roles, I bring a comprehensive understanding of the entire filmmaking process, from initial concept to final delivery.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column: Image with Filter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={experiencePersonImage}
                  alt="Professional Experience"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(100%) contrast(1.2) brightness(0.9)',
                  }}
                />
                {/* Black filter from bottom to top */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 20%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 80%, transparent 100%)',
                  }}
                ></div>
                {/* Additional subtle overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
              </div>
            </motion.div>
          </div>

            {/* Professional Roles Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {professionalRoles.map((role, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <Card className="p-6 lg:p-8 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-8 bg-deep-yellow"></div>
                        <h3 
                          style={{ color: '#9DA3AF' }}
                          className="text-xl md:text-2xl font-light"
                        >
                          {role.title}
                        </h3>
                      </div>
                      <p 
                        style={{ color: '#9DA3AF' }}
                        className="text-base md:text-lg leading-relaxed font-light"
                      >
                        {role.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

          {/* Awards & Recognition Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32"
          >
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12 text-right"
            >
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-transparent via-deep-yellow to-deep-yellow mb-10 ml-auto"
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  boxShadow: '0 0 10px rgba(237, 187, 28, 0.5)',
                }}
              ></motion.div>
              <h2 
                style={{ 
                  color: '#9DA3AF',
                  letterSpacing: '0.03em',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight"
              >
                Awards & <span 
                  className="text-deep-yellow"
                  style={{
                    textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                  }}
                >
                  Recognition
                </span>
              </h2>
              <p 
                style={{ color: '#9DA3AF' }}
                className="text-lg md:text-xl leading-relaxed font-light"
              >
                Received awards at the International Film Festival.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <Card className="p-6 lg:p-8 h-full">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-5xl flex-shrink-0">{award.icon}</div>
                        {award.year && (
                          <span 
                            className="text-deep-yellow font-light text-xl md:text-2xl flex-shrink-0"
                            style={{
                              textShadow: '0 0 20px rgba(237, 187, 28, 0.5)',
                            }}
                          >
                            {award.year}
                          </span>
                        )}
                      </div>
                      <div className="space-y-3">
                        <h3 
                          style={{ color: '#9DA3AF' }}
                          className="text-xl md:text-2xl font-light"
                        >
                          {award.title}
                        </h3>
                        <p 
                          style={{ color: '#9DA3AF' }}
                          className="text-base md:text-lg leading-relaxed font-light"
                        >
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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

export default Experience
