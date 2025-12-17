import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills-education', label: 'Skills & Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/portfolio', label: 'Portfolio' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent"
    >
      {/* Filter overlay that blends with background - only when scrolled */}
      {isScrolled && (
        <>
          {/* Light mode filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 backdrop-blur-xl dark:hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2))',
              filter: 'saturate(1.1) brightness(1.05)',
            }}
          />
          {/* Dark mode filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 backdrop-blur-xl hidden dark:block"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
              filter: 'saturate(1.1) brightness(0.95)',
            }}
          />
        </>
      )}
      
      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-3 text-xl font-sans text-deep-yellow tracking-wider hover:text-deep-yellow-alt transition-colors group"
          >
            {/* Logo Design - LUU */}
            <div className="relative flex items-center">
              {/* LUU Text with enhanced styling */}
              <span 
                className="font-sans font-light uppercase tracking-[0.2em] text-2xl relative"
                style={{
                  textShadow: '0 0 20px rgba(237, 187, 28, 0.4), 0 0 40px rgba(237, 187, 28, 0.2)',
                  letterSpacing: '0.15em',
                }}
              >
                LUU
              </span>
              {/* Decorative line accent */}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                    className={`transition-colors duration-300 relative font-light ${
                    location.pathname === link.path
                        ? 'text-deep-yellow drop-shadow-sm'
                        : 'text-gray-800 dark:text-gray-200 hover:text-deep-yellow dark:hover:text-deep-yellow'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
              
          </ul>
          
          {/* Contact Button with Pill Design */}
          <button
            onClick={() => navigate('/contact')}
            className="hidden md:flex items-center justify-center px-8 py-3.5 rounded-full font-light text-sm uppercase tracking-wider transition-all duration-300 ml-8 contact-button-glass"
            style={{
              background: 'rgba(236, 184, 21, 0.08)', // #ECB815 with reduced opacity
              color: '#EDBB1C', // Golden yellow text
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(236, 184, 21, 0.2)'
              e.target.style.backdropFilter = 'blur(10px)'
              e.target.style.WebkitBackdropFilter = 'blur(10px)'
              e.target.style.boxShadow = '0 4px 20px rgba(236, 184, 21, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(236, 184, 21, 0.08)'
              e.target.style.backdropFilter = 'blur(0px)'
              e.target.style.WebkitBackdropFilter = 'blur(0px)'
              e.target.style.boxShadow = 'none'
            }}
          >
            Contact
          </button>

          {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-deep-yellow dark:hover:text-deep-yellow focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl border-t border-gray-200/30 dark:border-gray-700/30"
          >
            <ul className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`block py-2 transition-colors duration-300 font-light ${
                      location.pathname === link.path
                        ? 'text-deep-yellow'
                        : 'text-gray-800 dark:text-gray-200 hover:text-deep-yellow dark:hover:text-deep-yellow'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
