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
    {
      year: '2025',
      institution: 'Visualize Unwritten Workshop ( JOKER , HANGOVER )',
      description: 'Hollywood DP - Lawrence Shar',
    },
  ]

  const skills = [
    {
      title: 'Cinematography / Steadicam Operator',
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
                  className="w-20 h-0.5 bg-gradient-to-r from-[#D83030] via-[#D83030] to-transparent mb-10"
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  style={{
                    boxShadow: '0 0 10px rgba(216, 48, 48, 0.5)',
                  }}
                ></motion.div>
                <h2 
                  style={{ 
                    letterSpacing: '0.03em',
                  }}
                  className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
                >
                  <span 
                    style={{
                      background: 'linear-gradient(90deg, #FF4D4D 0%, #D83030 50%, #FF1A1A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 20px rgba(216, 48, 48, 0.75))',
                    }}
                  >
                    Education
                  </span>
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="relative overflow-hidden"
                >
                  <img
                    src={skillBannerImage}
                    alt="Education"
                    className="max-w-full h-auto"
                    style={{
                      filter: 'grayscale(100%) contrast(1.2) brightness(0.6)',
                    }}
                  />
                  {/* Glass shimmer wave effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                      mixBlendMode: 'overlay',
                    }}
                    animate={{
                      backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Additional 3D depth effect with wave */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(120deg, transparent 25%, rgba(255, 255, 255, 0.15) 45%, transparent 65%)',
                      backgroundSize: '250% 250%',
                      mixBlendMode: 'soft-light',
                    }}
                    animate={{
                      backgroundPosition: ['-250% 0', '250% 0'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col h-full p-6 lg:p-8 bg-black/10 backdrop-blur-sm rounded-lg hover:bg-black/20 transition-all">
                    <div className="flex-1 space-y-3 mb-4">
                      <h3 
                        style={{ color: '#FFFFFF' }}
                        className="text-xl md:text-2xl font-medium"
                      >
                        {edu.institution}
                      </h3>
                      {edu.degree && (
                        <p 
                          className="text-deep-yellow font-light text-base md:text-lg"
                          style={{
                            textShadow: '0 0 20px rgba(216, 48, 48, 0.5)',
                          }}
                        >
                          {edu.degree}
                        </p>
                      )}
                      <p 
                        style={{ color: '#E2E8F0' }}
                        className="text-sm md:text-base leading-relaxed font-normal"
                      >
                        {edu.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <span 
                        className="text-deep-yellow font-light text-2xl md:text-3xl block text-right"
                        style={{
                          textShadow: '0 0 20px rgba(216, 48, 48, 0.5)',
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
                  boxShadow: '0 0 10px rgba(216, 48, 48, 0.5)',
                }}
              ></motion.div>
              <h2 
                style={{ 
                  letterSpacing: '0.03em',
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight"
              >
                <span
                  style={{
                    color: '#FFFFFF',
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  Personal{' '}
                </span>
                <span 
                  style={{
                    background: 'linear-gradient(90deg, #FF4D4D 0%, #D83030 50%, #FF1A1A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 16px rgba(216, 48, 48, 0.75))',
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
                    style={{ color: '#FFFFFF' }}
                    className="text-xl md:text-2xl font-medium text-center"
                  >
                    {skill.title}
                  </h3>
                  <div className="text-center">
                    <span className="inline-block px-4 py-1.5 bg-[#D83030]/20 border border-[#D83030]/40 rounded-full text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm shadow-[0_0_12px_rgba(216,48,48,0.3)]">
                      {skill.level}
                    </span>
                  </div>
                  <p 
                    style={{ color: '#E2E8F0' }}
                    className="text-base md:text-lg leading-relaxed font-normal text-center"
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
