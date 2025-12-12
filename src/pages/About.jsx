import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="About Me" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column: Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                8 years of experience in filmmaking with a passion for visual storytelling. My background is in advertising production, TVC production, social media production, and food vlog production. Seeking new challenges, collaborations, and opportunities. I am passionate about contributing with my skills and bringing ideas to life.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-deep-yellow mb-4">Professional Focus</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Specializing in commercial TVC production, short films, music videos, and documentaries. With expertise spanning from pre-production to post-production, I bring creative visions to life through cinematic storytelling.
              </p>
            </Card>
          </motion.div>

          {/* Right Column: Portrait/SVG */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <Card className="p-0 overflow-hidden">
              {/* Stylish Portrait / Silhouette / Abstract SVG */}
              <div className="aspect-square bg-gradient-to-br from-deep-yellow/20 via-deep-yellow/10 to-gray-100 dark:from-deep-yellow/10 dark:via-deep-yellow/5 dark:to-gray-800 flex items-center justify-center p-12">
                <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Abstract creative director silhouette */}
                  <circle cx="150" cy="100" r="50" fill="currentColor" className="text-deep-yellow/30 dark:text-deep-yellow/20" />
                  <rect x="100" y="150" width="100" height="120" rx="50" fill="currentColor" className="text-deep-yellow/30 dark:text-deep-yellow/20" />
                  
                  {/* Camera/Videography elements */}
                  <g transform="translate(150, 200)">
                    <rect x="-20" y="-15" width="40" height="30" rx="5" fill="none" stroke="currentColor" strokeWidth="3" className="text-deep-yellow" />
                    <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="3" className="text-deep-yellow" />
                    <circle cx="0" cy="0" r="6" fill="currentColor" className="text-deep-yellow" />
                  </g>
                  
                  {/* Film strip decoration */}
                  <g transform="translate(50, 250)">
                    <rect x="0" y="0" width="200" height="30" rx="5" fill="none" stroke="currentColor" strokeWidth="2" className="text-deep-yellow/40" />
                    <line x1="20" y1="10" x2="180" y2="10" stroke="currentColor" strokeWidth="1" className="text-deep-yellow/30" />
                    <line x1="20" y1="20" x2="180" y2="20" stroke="currentColor" strokeWidth="1" className="text-deep-yellow/30" />
                  </g>
                </svg>
              </div>
            </Card>

            {/* Personal Details Card */}
            <Card className="mt-6">
              <h3 className="text-xl font-semibold text-deep-yellow mb-4">Personal Details</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Date of Birth:</span> 5.5.1995
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Nationality:</span> Burma
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Languages:</span> English, Thai (Basic)
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Position:</span> Director, Cinematographer & Editor
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

