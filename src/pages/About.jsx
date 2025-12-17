import { motion } from 'framer-motion'

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
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-yellow/10 via-transparent to-deep-yellow/5"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
        <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-deep-yellow text-gray-900 text-sm font-bold uppercase tracking-wider">
                About Me
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-gray-900 dark:text-white mb-6">
              Creative Director &<br />
              <span className="text-deep-yellow">Filmmaker</span>
            </h1>
            <div className="w-32 h-1 bg-deep-yellow mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                <div className="text-4xl md:text-5xl font-sans font-bold text-deep-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start"
          >
            {/* Left Column: Story & Expertise */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
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
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="h-1 w-16 bg-deep-yellow"></div>
                  <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 dark:text-white">
                    My Story
                  </h2>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6 mb-10"
                >
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    My background is in advertising production, TVC production, social media production, and food vlog production. Seeking new challenges, collaborations, and opportunities. I am passionate about contributing with my skills and bringing ideas to life.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    Specializing in commercial TVC production, short films, music videos, and documentaries. With expertise spanning from pre-production to post-production, I bring creative visions to life through cinematic storytelling.
                  </p>
                </motion.div>

                {/* Expertise as badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  {expertise.map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-5 py-2.5 bg-deep-yellow text-gray-900 rounded-md text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-default"
                    >
                      {item.icon} {item.title}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column: Visual & Details */}
            <motion.div 
              variants={itemVariants}
              className="space-y-10"
            >
              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square bg-transparent relative">
                  {/* Cinematic Camera/Videography Illustration */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center p-12"
                  >
                    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Camera Body */}
                      <motion.rect 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        x="100" y="120" width="200" height="160" rx="20" fill="none" stroke="currentColor" strokeWidth="4" className="text-deep-yellow" 
                      />
                      <rect x="120" y="140" width="160" height="120" rx="10" fill="rgba(237, 187, 28, 0.1)" stroke="currentColor" strokeWidth="2" className="text-deep-yellow/50" />
                      
                      {/* Lens */}
                      <motion.circle 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                        cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="4" className="text-deep-yellow" 
                      />
                      <circle cx="200" cy="200" r="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-deep-yellow/50" />
                      <circle cx="200" cy="200" r="20" fill="rgba(237, 187, 28, 0.2)" />
                      
                      {/* Viewfinder */}
                      <motion.rect 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 }}
                        x="150" y="100" width="100" height="30" rx="5" fill="none" stroke="currentColor" strokeWidth="3" className="text-deep-yellow" 
                      />
                      
                      {/* Film Strip Decoration */}
                      <motion.g 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.1 }}
                        transform="translate(50, 300)"
                      >
                        <rect x="0" y="0" width="300" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" className="text-deep-yellow/30" />
                        <line x1="30" y1="15" x2="270" y2="15" stroke="currentColor" strokeWidth="1" className="text-deep-yellow/20" />
                        <line x1="30" y1="25" x2="270" y2="25" stroke="currentColor" strokeWidth="1" className="text-deep-yellow/20" />
                        {/* Perforations */}
                        <circle cx="20" cy="10" r="2" fill="currentColor" className="text-deep-yellow/40" />
                        <circle cx="20" cy="20" r="2" fill="currentColor" className="text-deep-yellow/40" />
                        <circle cx="20" cy="30" r="2" fill="currentColor" className="text-deep-yellow/40" />
                        <circle cx="280" cy="10" r="2" fill="currentColor" className="text-deep-yellow/40" />
                        <circle cx="280" cy="20" r="2" fill="currentColor" className="text-deep-yellow/40" />
                        <circle cx="280" cy="30" r="2" fill="currentColor" className="text-deep-yellow/40" />
                      </motion.g>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Personal Details */}
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
                  className="flex items-center gap-3 mb-8 justify-end"
                >
                  <div className="h-1 w-12 bg-deep-yellow"></div>
                  <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-white">
                    Personal Details
                  </h3>
                </motion.div>
                <div className="flex gap-4 w-full">
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
                      className="flex-1 p-5 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 text-center"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-full bg-deep-yellow/20 flex items-center justify-center mx-auto mb-3"
                      >
                        <svg className="w-6 h-6 text-deep-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </motion.div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        {item.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
          </motion.div>
        </motion.div>
      </div>
      </section>
    </div>
  )
}

export default About

