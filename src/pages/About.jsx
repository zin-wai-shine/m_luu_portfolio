import { motion } from 'framer-motion'
import aboutAminPageImage from '../assets/images/about_amin_page.png'

const About = () => {
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

  const stats = [
    { label: 'Years Experience', value: '8+' },
    { label: 'Projects Completed', value: '100+' },
    { label: 'Awards Won', value: '5+' },
  ]

  const expertise = [
    { icon: '🎬', title: 'TVC Production', desc: 'Commercial advertising' },
    { icon: '📹', title: 'Documentaries', desc: 'Real stories, real impact' },
    { icon: '🎵', title: 'Music Videos', desc: 'Visual storytelling' },
    { icon: '🎞️', title: 'Short Films', desc: 'Creative narratives' },
  ]

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
              Creative Director &<br />
              <span 
                className="text-deep-yellow"
                style={{
                  textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                }}
              >
                Filmmaker
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
              8 years of experience in filmmaking with a passion for visual storytelling
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div 
                  className="text-4xl md:text-5xl font-light text-deep-yellow mb-2"
                  style={{
                    textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* My Story and Image Section */}
      <section className="py-20 px-4 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column: My Story */}
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
                className="mb-8"
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
                  }}>Story</span>
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6 mb-10"
              >
                <p 
                  style={{ 
                    color: '#9DA3AF',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                  }}
                  className="text-lg md:text-xl leading-relaxed font-light"
                >
                  My background is in advertising production, TVC production, social media production, and food vlog production. Seeking new challenges, collaborations, and opportunities. I am passionate about contributing with my skills and bringing ideas to life.
                </p>
                <p 
                  style={{ color: '#9DA3AF' }}
                  className="text-lg md:text-xl leading-relaxed font-light"
                >
                  Specializing in commercial TVC production, short films, music videos, and documentaries. With expertise spanning from pre-production to post-production, I bring creative visions to life through cinematic storytelling.
                </p>
              </motion.div>

              {/* Expertise as badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2"
              >
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="rounded-lg flex items-center gap-2 sm:gap-2 transition-all cursor-default"
                  >
                    <span 
                      className="text-deep-yellow text-lg sm:text-xl rounded-full w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#1a1a1a' }}
                    >
                      {item.icon}
                    </span>
                    <span style={{ color: '#9DA3AF' }} className="text-xs sm:text-sm font-light uppercase tracking-wider">
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full"
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* About Amin Page Image - Black & White Design */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative"
                >
                  <img
                    src={aboutAminPageImage}
                    alt="About"
                    className="w-full h-full object-cover mx-auto"
                    style={{
                      filter: 'grayscale(100%) contrast(1.3) brightness(1.5)',
                    }}
                  />
                  {/* Black filter from left side - stronger */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.1) 90%, transparent 100%)'
                    }}
                  ></div>
                  {/* Additional dark overlay for button-like effect */}
                  <div 
                    className="absolute inset-0 bg-black/30"
                  ></div>
                  {/* Cool overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                  {/* Subtle glow effect */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.5)',
                    }}
                  ></div>
                </motion.div>
              </div>
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

      {/* Section 3: Personal Details */}
      <section className="py-20 px-4 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-8 text-center"
            >
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow to-transparent mb-6 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                  boxShadow: '0 0 10px rgba(237, 187, 28, 0.5)',
                }}
              ></motion.div>
              <h3 
                style={{ 
                  color: '#9DA3AF',
                  letterSpacing: '0.03em',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
              >
                Personal <span className="text-deep-yellow" style={{
                  textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                }}>Details</span>
              </h3>
            </motion.div>
            <div className="flex flex-wrap gap-4 w-full">
              {[
                { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Date of Birth', value: '5.5.1995' },
                { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Nationality', value: 'Burma' },
                { icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129', label: 'Languages', value: 'English, Thai (Basic)' },
                { icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Position', value: 'Director, Cinematographer & Editor' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex-1 min-w-[200px] p-5 bg-black/20 backdrop-blur-sm rounded-lg text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-deep-yellow/20 flex items-center justify-center mx-auto mb-3"
                  >
                    <svg className="w-6 h-6 text-deep-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </motion.div>
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-light">
                    {item.label}
                  </div>
                  <div style={{ color: '#9DA3AF' }} className="text-sm font-light leading-relaxed whitespace-pre-line">
                    {item.value}
                  </div>
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

export default About

