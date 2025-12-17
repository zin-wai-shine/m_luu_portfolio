import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        rounded-lg 
        bg-black/20 
        backdrop-blur-sm 
        border border-black/40
        transition-all duration-300
        ${hover ? 'hover:bg-black/30 hover:border-black/60' : ''}
        ${className}
      `}
      style={{
        boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card

