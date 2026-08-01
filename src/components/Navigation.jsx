import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoImage from '../assets/images/logo/logo.png'

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
    { path: '/dop', label: 'DOP' },
    { path: '/steadicam-operator', label: 'Steadicam Operator' },
    { path: '/skills-education', label: 'Skills & Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/portfolio', label: 'Projects' },
    { path: '/activity', label: 'Activity' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isMobileMenuOpen ? 'bg-[#222222]' : ''
      }`}
      style={{
        backgroundColor: isMobileMenuOpen ? '#222222' : undefined,
      }}
    >
      {/* Filter overlay that blends with background - only when scrolled & menu closed */}
      {isScrolled && !isMobileMenuOpen && (
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
      
      <div className="relative container mx-auto px-4 py-3 h-20 flex items-center justify-between z-10">
        {/* Logo Container - sleek navbar height preserved */}
        <div className="relative h-12 flex items-center">
          <Link 
            to="/" 
            className="flex items-center transition-transform hover:scale-105"
          >
            {/* Logo Image */}
            <img 
              src={logoImage} 
              alt="M LUU Logo" 
              className="h-20 sm:h-24 md:h-28 w-auto max-w-[180px] md:max-w-[240px] object-contain drop-shadow-[0_0_18px_rgba(216,48,48,0.5)] transform -translate-y-1"
            />
          </Link>
        </div>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <ul className="hidden xl:flex items-center space-x-5 lg:space-x-6 text-xs lg:text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                    className={`transition-colors duration-300 relative font-light whitespace-nowrap ${
                    location.pathname === link.path
                        ? 'text-deep-yellow drop-shadow-sm font-normal'
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
            className="hidden xl:flex items-center justify-center px-7 py-3 rounded-full font-medium text-xs uppercase tracking-[0.15em] transition-all duration-300 ml-4 border border-[#D83030]/80 shadow-[0_0_15px_rgba(216,48,48,0.4)] hover:shadow-[0_0_25px_rgba(216,48,48,0.7)]"
            style={{
              background: 'rgba(216, 48, 48, 0.85)',
              color: '#FFFFFF',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(230, 45, 45, 1)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(216, 48, 48, 0.85)'
              e.currentTarget.style.transform = 'translateY(0px)'
            }}
          >
            Contact
          </button>

          {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden p-2 rounded-lg text-white hover:text-deep-yellow focus:outline-none"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-white/10 bg-[#222222]"
            style={{ backgroundColor: '#222222' }}
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4 mb-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={`block py-2 transition-colors duration-300 font-light ${
                        location.pathname === link.path
                          ? 'text-[#D83030] font-medium'
                          : 'text-gray-200 hover:text-[#D83030]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Contact Button in Mobile Menu */}
              <button
                onClick={() => {
                  navigate('/contact')
                  closeMobileMenu()
                }}
                className="w-full flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 bg-[#D83030] text-white border border-[#D83030] shadow-[0_0_15px_rgba(216,48,48,0.4)]"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
