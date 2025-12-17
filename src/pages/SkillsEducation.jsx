import { motion } from 'framer-motion'
import skillBannerImage from '../assets/images/skill_banner.png'

const SkillsEducation = () => {
  const education = [
    {
      year: '2018',
      institution: 'Myanmar Media Development Center',
      degree: 'Diploma',
      description: 'Studied Film Media from Pre-Production to Post-Production.',
    },
    {
      year: '2020',
      institution: 'Vision Creative Academy',
      description: 'Taught film-related concepts, proper film workflows, and working with film production centers.',
    },
  ]

  const skills = [
    {
      title: 'Cinema/Videography',
      level: 'Expert',
      description: 'Expert level in managing workflows from pre-production to post-production. Proficient in camera operation and lighting distinction.',
      icon: '🎬',
    },
    {
      title: 'Concept Development',
      level: 'Skilled',
      description: 'Skilled in planning marketing, selecting social media target audiences, developing campaigns, ideas, concepts, scripts, and creating clear mood boards.',
      icon: '💡',
    },
    {
      title: 'Post-Production',
      level: 'Experienced',
      description: 'Experienced in video editing, sound editing, color correction, color grading, and VFX (in film).',
      icon: '✂️',
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

      {/* Education Section */}
      <section className="py-20 px-4 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Left Column: Education Title */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
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
                  <span className="text-deep-yellow" style={{
                    textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                  }}>Education</span>
                </h2>
              </motion.div>

              {/* Right Column: Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-end items-center"
              >
                <motion.img
                  src={skillBannerImage}
                  alt="Education"
                  className="max-w-full h-auto"
                  style={{
                    filter: 'grayscale(100%) contrast(1.2) brightness(0.9)',
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                />
              </motion.div>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 p-6 lg:p-8 bg-black/10 backdrop-blur-sm rounded-lg hover:bg-black/20 transition-all">
                    <div className="flex-1 space-y-3">
                      <h3 
                        style={{ color: '#9DA3AF' }}
                        className="text-2xl md:text-3xl font-light"
                      >
                        {edu.institution}
                      </h3>
                      {edu.degree && (
                        <p 
                          className="text-deep-yellow font-light text-lg md:text-xl"
                          style={{
                            textShadow: '0 0 20px rgba(237, 187, 28, 0.5)',
                          }}
                        >
                          {edu.degree}
                        </p>
                      )}
                      <p 
                        style={{ color: '#9DA3AF' }}
                        className="text-lg md:text-xl leading-relaxed font-light"
                      >
                        {edu.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span 
                        className="text-deep-yellow font-light text-3xl md:text-4xl block"
                        style={{
                          textShadow: '0 0 20px rgba(237, 187, 28, 0.5)',
                        }}
                      >
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
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
                Personal <span 
                  className="text-deep-yellow"
                  style={{
                    textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                  }}
                >
                  Skills
                </span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="p-6 lg:p-8 bg-black/10 backdrop-blur-sm rounded-lg hover:bg-black/20 transition-all space-y-5"
                >
                  <div className="text-5xl mb-4 text-center">{skill.icon}</div>
                  <h3 
                    style={{ color: '#9DA3AF' }}
                    className="text-xl md:text-2xl font-light text-center"
                  >
                    {skill.title}
                  </h3>
                  <div className="text-center">
                    <span 
                      className="inline-block px-6 py-3 bg-black/20 rounded-lg text-sm font-light uppercase tracking-wider"
                      style={{ 
                        color: '#EDBB1C',
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <p 
                    style={{ color: '#9DA3AF' }}
                    className="text-base md:text-lg leading-relaxed font-light text-center"
                  >
                    {skill.description}
                  </p>
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

export default SkillsEducation
