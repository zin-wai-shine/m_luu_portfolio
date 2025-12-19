import { motion } from 'framer-motion'
import { useMemo, useState, useEffect, useRef } from 'react'
import { FaTh, FaBars } from 'react-icons/fa'
import Card from '../components/Card'
import experiencePersonImage from '../assets/images/experience_person.png'

const Experience = () => {
  const [showAll, setShowAll] = useState(false)
  const [centerIndex, setCenterIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  // Dynamically import all brand logos from collaborated_brands folder
  const brandLogos = import.meta.glob('../assets/images/collaborated_brands/**/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP,svg,SVG}', { eager: true })

  // Process brand logos into array
  const brands = useMemo(() => {
    const brandArray = []
    Object.entries(brandLogos).forEach(([path, module]) => {
      brandArray.push({
        id: path,
        logo: module.default,
        name: path.split('/').pop().replace(/\.[^/.]+$/, ''),
      })
    })
    return brandArray
  }, [])

  // Calculate center logo index based on scroll position
  useEffect(() => {
    if (!showAll && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const logoWidth = 120 + 24 // 120px width + 24px gap (gap-6 = 24px)
      
      const updateCenterIndex = () => {
        if (container) {
          const containerWidth = container.clientWidth
          const scrollLeft = container.scrollLeft
          const centerX = scrollLeft + containerWidth / 2
          
          // Calculate which logo is in the center (modulo for seamless loop)
          const centerIndex = Math.round((centerX - logoWidth / 2) / logoWidth)
          const clampedIndex = centerIndex % brands.length
          setCenterIndex(clampedIndex >= 0 ? clampedIndex : clampedIndex + brands.length)
        }
      }
      
      container.addEventListener('scroll', updateCenterIndex)
      updateCenterIndex() // Initial calculation
      
      return () => {
        container.removeEventListener('scroll', updateCenterIndex)
      }
    }
  }, [showAll, brands.length])

  // Auto-scroll effect for horizontal scrolling with seamless loop
  useEffect(() => {
    if (!showAll && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      let scrollPosition = 0
      const scrollSpeed = 0.5 // pixels per frame
      const logoWidth = 120 + 24 // 120px width + 24px gap
      const singleSetWidth = brands.length * logoWidth
      
      const scroll = () => {
        if (container) {
          scrollPosition += scrollSpeed
          
          // When we've scrolled past one full set, reset to beginning seamlessly
          if (scrollPosition >= singleSetWidth) {
            scrollPosition = scrollPosition - singleSetWidth
          }
          
          container.scrollLeft = scrollPosition
          
          // Update center index during auto-scroll
          const containerWidth = container.clientWidth
          const centerX = scrollPosition + containerWidth / 2
          const centerIndex = Math.round((centerX - logoWidth / 2) / logoWidth)
          const clampedIndex = centerIndex % brands.length
          setCenterIndex(clampedIndex >= 0 ? clampedIndex : clampedIndex + brands.length)
        }
        requestAnimationFrame(scroll)
      }
      
      const animationId = requestAnimationFrame(scroll)
      
      return () => {
        cancelAnimationFrame(animationId)
      }
    }
  }, [showAll, brands.length])

  const professionalRoles = [
    {
      title: 'Production Management',
      description: 'Overseeing and coordinating all aspects of production from pre-production planning to final delivery.',
    },
    {
      title: 'Dop & Editor',
      description: 'Creating compelling visual narratives through expert editing and cinematography.',
    },
    {
      title: 'Camera Steadicam Operator',
      description: 'Operating cameras for overseas projects, capturing cinematic footage with precision.',
    },
    {
      title: 'Director',
      description: 'Freelance Commercial TVC, Short film, Music Video Director, and Documentary maker.',
    },
  ]

  const awards = [
    {
      title: 'PSA Competition',
      description: 'Film "INSPIRATION" was selected as one of the TOPTEN PSA films (led by GIORANDO & MMDC).',
      icon: '🏆',
      year: '2023',
    },
    {
      title: 'Human Rights Human Dignity International Film Festival',
      description: 'Documentary "LIFELESS" was chosen as one of the National films at the Fifth edition of the festival.',
      icon: '🎖️',
      year: '2022',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-black">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Decorative accent line with glow */}
            <motion.div 
              className="w-20 h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow to-transparent mx-auto mb-10"
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                boxShadow: '0 0 10px rgba(237, 187, 28, 0.5)',
              }}
            ></motion.div>
            
            <h1 
              style={{ 
                color: '#9DA3AF',
                letterSpacing: '0.03em',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight"
            >
              Professional <br />
              <span 
                className="text-deep-yellow"
                style={{
                  textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                }}
              >
                Experience
              </span>
            </h1>
            <p 
              style={{ 
                color: '#9DA3AF',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                letterSpacing: '0.15em',
              }}
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
            >
              10 years of experience across various production roles in the filmmaking industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 px-4 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow to-transparent mb-10"
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  boxShadow: '0 0 10px rgba(237, 187, 28, 0.5)',
                }}
              ></motion.div>
              <h2 
                style={{ 
                  color: '#9DA3AF',
                  letterSpacing: '0.03em',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
              >
                My <span className="text-deep-yellow" style={{
                  textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                }}>Expertise</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
                className="space-y-6"
            >
              <p 
                style={{ 
                  color: '#9DA3AF',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                }}
                className="text-lg md:text-xl leading-relaxed font-light"
              >
                Works as a Production Management, Editor, Videographer & Camera Steadicam Operator for overseas projects. Currently a Freelance Commercial TVC, Short film, Music Video Director, and Documentary maker.
              </p>
              <p 
                style={{ color: '#9DA3AF' }}
                className="text-lg md:text-xl leading-relaxed font-light"
              >
                With extensive experience across various production roles, I bring a comprehensive understanding of the entire filmmaking process, from initial concept to final delivery.
              </p>
            </motion.div>
            </motion.div>

            {/* Right Column: Image with Filter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={experiencePersonImage}
                  alt="Professional Experience"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(100%) contrast(1.2) brightness(0.9)',
                  }}
                />
                {/* Black filter from bottom to top */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 20%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 80%, transparent 100%)',
                  }}
                ></div>
                {/* Additional subtle overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
              </div>
            </motion.div>
          </div>

            {/* Professional Roles Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {professionalRoles.map((role, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <Card className="p-6 lg:p-8 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-8 bg-deep-yellow"></div>
                        <h3 
                          style={{ color: '#9DA3AF' }}
                          className="text-xl md:text-2xl font-light"
                        >
                          {role.title}
                        </h3>
                      </div>
                      <p 
                        style={{ color: '#9DA3AF' }}
                        className="text-base md:text-lg leading-relaxed font-light"
                      >
                        {role.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </motion.div>

          {/* Awards & Recognition Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32"
          >
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12 text-right"
            >
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-transparent via-deep-yellow to-deep-yellow mb-10 ml-auto"
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  boxShadow: '0 0 10px rgba(237, 187, 28, 0.5)',
                }}
              ></motion.div>
              <h2 
                style={{ 
                  color: '#9DA3AF',
                  letterSpacing: '0.03em',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight"
              >
                Awards & <span 
                  className="text-deep-yellow"
                  style={{
                    textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                  }}
                >
                  Recognition
                </span>
              </h2>
              <p 
                style={{ color: '#9DA3AF' }}
                className="text-lg md:text-xl leading-relaxed font-light"
              >
                Received awards at the International Film Festival.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <Card className="p-6 lg:p-8 h-full">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-5xl flex-shrink-0">{award.icon}</div>
                          {award.year && (
                            <span 
                            className="text-deep-yellow font-light text-xl md:text-2xl flex-shrink-0"
                              style={{
                                textShadow: '0 0 20px rgba(237, 187, 28, 0.5)',
                              }}
                            >
                              {award.year}
                            </span>
                          )}
                        </div>
                      <div className="space-y-3">
                        <h3 
                          style={{ color: '#9DA3AF' }}
                          className="text-xl md:text-2xl font-light"
                        >
                          {award.title}
                        </h3>
                        <p 
                          style={{ color: '#9DA3AF' }}
                          className="text-base md:text-lg leading-relaxed font-light"
                        >
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brands I've Collaborated With Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow to-transparent mb-10"
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  boxShadow: '0 0 10px rgba(237, 187, 28, 0.5)',
                }}
              ></motion.div>
              <h2 
                style={{ 
                  color: '#9DA3AF',
                  letterSpacing: '0.03em',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight"
              >
                Brands I've <span 
                  className="text-deep-yellow"
                  style={{
                    textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                  }}
                >
                  Collaborated With
                </span>
              </h2>
              <div className="flex items-center justify-between">
                <p 
                  style={{ color: '#9DA3AF' }}
                  className="text-lg md:text-xl leading-relaxed font-light"
                >
                  Trusted by leading brands and organizations.
                </p>
                <motion.button
                  onClick={() => setShowAll(!showAll)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-2.5 bg-black text-deep-yellow font-light text-sm uppercase tracking-wider rounded-full hover:bg-black/90 transition-all duration-300"
                >
                  {showAll ? (
                    <>
                      <FaBars className="w-4 h-4 text-deep-yellow" />
                      <span>View Slide</span>
                    </>
                  ) : (
                    <>
                      <FaTh className="w-4 h-4 text-deep-yellow" />
                      <span>View Grid</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
            
            {/* Brands - Horizontal Scroll (Initial) or Grid (View All) */}
            {!showAll ? (
              <div className="relative">
                {/* Left gradient filter */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)',
                  }}
                ></div>
                
                {/* Right gradient filter */}
                <div 
                  className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)',
                  }}
                ></div>
                
                <div 
                  ref={scrollContainerRef}
                  className="flex gap-6 md:gap-8 overflow-x-auto overflow-y-visible scrollbar-hide py-8 relative"
                  style={{
                    scrollBehavior: 'auto',
                  }}
                >
                  {/* Duplicate brands for seamless loop */}
                  {[...brands, ...brands].map((brand, index) => {
                    const actualIndex = index % brands.length
                    return (
                      <motion.div
                        key={`${brand.id}-${index}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          opacity: { delay: actualIndex * 0.05, duration: 0.5 },
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{ minWidth: '120px', width: '120px' }}
                      >
                      <div className="relative w-full aspect-square bg-black/30 backdrop-blur-sm rounded-full p-3 border border-white/10 hover:border-deep-yellow/50 transition-all duration-300 group overflow-hidden">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-deep-yellow/0 via-deep-yellow/0 to-deep-yellow/0 group-hover:from-deep-yellow/10 group-hover:via-deep-yellow/5 group-hover:to-transparent transition-all duration-300 rounded-full"></div>
                        
                        {/* White circular background for logos */}
                        <div className="absolute inset-0 rounded-full bg-white m-2"></div>
                        
                        {/* Logo Image */}
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="relative z-10 w-full h-full object-contain rounded-full brightness-90 group-hover:brightness-110 transition-all duration-300"
                        />
                        
                        {/* Shine effect on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '200%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                    </motion.div>
                    )
                  })}
                </div>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
              >
                {brands.map((brand, index) => (
                  <motion.div
                    key={brand.id}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center justify-center"
                  >
                    <div className="relative w-4/5 aspect-square bg-black/30 backdrop-blur-sm rounded-full p-3 border border-white/10 hover:border-deep-yellow/50 transition-all duration-300 group overflow-hidden">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-deep-yellow/0 via-deep-yellow/0 to-deep-yellow/0 group-hover:from-deep-yellow/10 group-hover:via-deep-yellow/5 group-hover:to-transparent transition-all duration-300 rounded-full"></div>
                      
                      {/* White circular background for logos */}
                      <div className="absolute inset-0 rounded-full bg-white m-2"></div>
                      
                      {/* Logo Image */}
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="relative z-10 w-full h-full object-contain rounded-full brightness-90 group-hover:brightness-110 transition-all duration-300"
                      />
                      
                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
        
        {/* Black filter at base/bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-10"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)'
          }}
        ></div>
      </section>
    </div>
  )
}

export default Experience
