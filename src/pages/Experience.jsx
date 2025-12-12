import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const Experience = () => {
  const awards = [
    {
      title: 'PSA Competition',
      description: 'Film "INSPIRATION" was selected as one of the TOPTEN PSA films (led by GIORANDO & MMDC).',
      icon: '🏆',
    },
    {
      title: 'Human Rights Human Dignity International Film Festival',
      description: 'Documentary "LIFELESS" was chosen as one of the National films at the Fifth edition of the festival.',
      icon: '🎖️',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Experience" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Professional Experience */}
          <motion.div variants={itemVariants}>
            <Card>
              <h2 className="text-2xl font-semibold text-deep-yellow mb-4">Professional Experience</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Works as a Production Management, Editor, Videographer & Camera Operator for overseas projects. Currently a Freelance Commercial TVC, Short film, Music Video Director, and Documentary maker.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                With extensive experience across various production roles, I bring a comprehensive understanding of the entire filmmaking process, from initial concept to final delivery.
              </p>
            </Card>
          </motion.div>

          {/* Awards & Recognition */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-display mb-4 text-gray-900 dark:text-white">
                Awards & Recognition
              </h2>
              <div className="w-24 h-1 bg-deep-yellow mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Received awards at the International Film Festival.
              </p>
            </div>
            
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <Card className="border-l-4 border-l-deep-yellow">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{award.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {award.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{award.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
