import { motion } from 'framer-motion'

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-deep-yellow mx-auto"></div>
    </motion.div>
  )
}

export default SectionHeader

