import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'px-6 py-2.5 text-sm font-semibold transition-all duration-300 transform hover:scale-105'
  
  // Check if rounded-none is in className to remove border radius
  const roundedClass = className.includes('rounded-none') ? 'rounded-none' : 'rounded-lg'
  
  const variants = {
    primary: 'bg-deep-yellow text-gray-900 hover:bg-deep-yellow-alt shadow-lg shadow-deep-yellow/50',
    secondary: 'border-2 border-deep-yellow text-deep-yellow dark:text-deep-yellow hover:bg-deep-yellow hover:text-gray-900 dark:hover:text-gray-900',
    outline: 'border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900'
  }

  const classes = `${baseClasses} ${roundedClass} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  )
}

export default Button

