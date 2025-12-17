import { Link } from 'react-router-dom'
import { useState } from 'react'

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const baseClasses = 'px-8 py-3.5 text-sm font-light uppercase tracking-wider transition-all duration-300'
  
  // Always use rounded-full for pill shape
  const roundedClass = 'rounded-full'
  
  // All variants use background with reduced opacity and golden yellow text
  const buttonStyle = {
    background: isHovered 
      ? 'rgba(236, 184, 21, 0.2)' 
      : 'rgba(236, 184, 21, 0.08)', // #ECB815 with reduced opacity
    color: '#EDBB1C', // Golden yellow text
    backdropFilter: isHovered ? 'blur(10px)' : 'blur(0px)',
    WebkitBackdropFilter: isHovered ? 'blur(10px)' : 'blur(0px)',
    boxShadow: isHovered 
      ? '0 4px 20px rgba(236, 184, 21, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
      : 'none',
  }

  const classes = `${baseClasses} ${roundedClass} ${className}`

  if (to) {
    return (
      <Link 
        to={to} 
        className={classes}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        style={buttonStyle}
        target="_blank" 
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  )
}

export default Button

