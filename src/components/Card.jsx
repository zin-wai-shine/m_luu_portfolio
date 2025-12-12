import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        rounded-lg 
        bg-white/80 dark:bg-gray-900/80 
        backdrop-blur-sm 
        border border-gray-200 dark:border-gray-700
        shadow-lg
        transition-all duration-300
        ${hover ? 'hover:border-deep-yellow hover:shadow-deep-yellow/20' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

