import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

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
    <div className="min-h-screen pt-24 pb-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Skills & Education" />

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-sans mb-4 text-gray-900 dark:text-white">
              Education
            </h2>
            <div className="w-24 h-1 bg-deep-yellow mb-6"></div>
          </motion.div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                    <span className="text-deep-yellow font-semibold">{edu.year}</span>
                </div>
                {edu.degree && (
                    <p className="text-deep-yellow mb-2 font-medium">{edu.degree}</p>
                )}
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-sans mb-4 text-gray-900 dark:text-white">
              Personal Skills
            </h2>
            <div className="w-24 h-1 bg-deep-yellow mb-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card hover>
                  <div className="text-5xl mb-4 text-center">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    {skill.title}
                  </h3>
                  <div className="text-center mb-3">
                    <span className="inline-block px-3 py-1 bg-deep-yellow/20 dark:bg-deep-yellow/10 text-deep-yellow rounded-full text-sm font-semibold">
                  {skill.level}
                </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center">
                    {skill.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsEducation
