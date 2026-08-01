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
  
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 rounded-full border border-[#D83030]/80 shadow-[0_0_15px_rgba(216,48,48,0.4)]'
  
  const buttonStyle = {
    background: isHovered ? 'rgba(230, 45, 45, 1)' : 'rgba(216, 48, 48, 0.85)',
    color: '#FFFFFF',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    boxShadow: isHovered 
      ? '0 0 25px rgba(216, 48, 48, 0.75), 0 4px 20px rgba(216, 48, 48, 0.4)' 
      : '0 0 15px rgba(216, 48, 48, 0.4)',
    transform: isHovered ? 'translateY(-1px)' : 'translateY(0px)',
  }

  const classes = `${baseClasses} ${className}`

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

