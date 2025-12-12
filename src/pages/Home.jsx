import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import VideoModal from '../components/VideoModal'

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowScrollTop(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const featuredProjects = [
    {
      id: 1,
      title: 'Ooredoo Campaign',
      client: 'Ooredoo',
      category: 'TVC',
      description: 'UPGRADE YOUR WORLD',
      videoUrl: 'https://www.facebook.com/OoredooMyanmar/videos/1537529373644332/',
    },
    {
      id: 2,
      title: 'OPPO Global Launch',
      client: 'OPPO',
      category: 'TVC',
      description: 'Find N3 Flip, Reno 11, A78',
      videoUrl: 'https://www.facebook.com/100076397719631/videos/603902335266693/',
    },
    {
      id: 3,
      title: 'CANAL+ Champions League',
      client: 'CANAL+',
      category: 'TVC',
      description: 'Champions League Campaign',
    },
  ]

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleVideoClick = (project) => {
    if (project.videoUrl) {
      setSelectedVideo(project)
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  // Get Facebook video embed URL for thumbnail preview
  const getFacebookEmbedUrl = (url) => {
    if (!url) return null
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500&height=281`
  }

  return (
    <div className="min-h-screen">
      {/* Fullscreen Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image - Black and White */}
        <div className="absolute inset-0 w-full h-full">
          {/* Background Image - Original */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://i.pinimg.com/1200x/eb/25/1d/eb251d5b140742ae713698d15cdaa181.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '100vh',
            }}
          ></div>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
          
          {/* Deep Yellow theme blend overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-deep-yellow/10 via-transparent to-deep-yellow/5"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 pt-24 pb-20 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display mb-8 tracking-tight"
          >
            <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] font-bold">M</span>
            <span className="text-deep-yellow drop-shadow-[0_4px_20px_rgba(246,198,0,0.6)] font-black mx-2 tracking-wider">LUU</span>
            <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] font-bold">(TZ)</span>
          </motion.h1>
          
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-0.5 bg-deep-yellow mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-white mb-6 font-light tracking-wide uppercase letter-spacing-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            style={{ letterSpacing: '0.15em' }}
          >
            Creative Director <span className="text-deep-yellow">/</span> Director of Photography
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] font-light"
            style={{ letterSpacing: '0.05em' }}
          >
            I'm an artist, and branding expert with over <span className="text-deep-yellow font-semibold">8 years</span> of professional experience in the film and video production industry.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white hover:text-deep-yellow transition-colors drop-shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader title="Featured Projects" subtitle="A selection of recent work" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {featuredProjects.map((project, index) => {
              const embedUrl = project.videoUrl ? getFacebookEmbedUrl(project.videoUrl) : null
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="cursor-pointer" onClick={() => project.videoUrl && handleVideoClick(project)}>
                    {/* Video Preview Area */}
                    <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden mb-4 rounded-lg">
                      {/* Facebook Video Embed for Thumbnail Preview */}
                      {embedUrl ? (
                        <div className="absolute inset-0">
                          <iframe
                            src={embedUrl}
                            width="100%"
                            height="100%"
                            style={{
                              border: 'none',
                              overflow: 'hidden',
                              pointerEvents: 'none',
                              transform: 'scale(1.05)',
                              transition: 'transform 0.5s ease',
                            }}
                            className="group-hover:scale-110"
                            scrolling="no"
                            allow="encrypted-media"
                            title={`${project.title} preview`}
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-gray-600 dark:text-gray-500 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      
                      {/* Play Icon - Cinematic Style */}
                      {project.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="bg-deep-yellow rounded-full p-5 shadow-2xl shadow-deep-yellow/50 border-4 border-white/20"
                          >
                            <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </motion.div>
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-deep-yellow text-gray-900 text-xs font-bold uppercase tracking-wider rounded-md shadow-lg">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Video Indicator */}
                      {project.videoUrl && (
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1.5 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold rounded-md flex items-center gap-2 border border-white/20">
                            <div className="w-2 h-2 bg-deep-yellow rounded-full animate-pulse"></div>
                            <span>VIDEO</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-0.5 w-8 bg-deep-yellow"></div>
                      <p className="text-deep-yellow font-semibold text-sm uppercase tracking-wider">{project.client}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">{project.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="text-center">
            <Button to="/portfolio" variant="primary" className="rounded-none">
              View All Projects
            </Button>
          </div>
          
          {/* Video Modal */}
          <VideoModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            videoUrl={selectedVideo?.videoUrl}
            title={selectedVideo?.title}
          />
        </div>
      </section>

      {/* About Me Preview Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6 text-gray-900 dark:text-white">
                About <span className="text-deep-yellow">Me</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                8 years of experience in filmmaking with a passion for visual storytelling. My background is in advertising production, TVC production, social media production, and food vlog production.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Seeking new challenges, collaborations, and opportunities. I am passionate about contributing with my skills and bringing ideas to life.
              </p>
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Abstract Portrait/Silhouette SVG */}
              <div className="aspect-square bg-gradient-to-br from-deep-yellow/20 to-deep-yellow/5 dark:from-deep-yellow/10 dark:to-deep-yellow/5 rounded-lg flex items-center justify-center p-12">
                <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Abstract silhouette */}
                  <circle cx="100" cy="80" r="40" fill="currentColor" className="text-deep-yellow/30 dark:text-deep-yellow/20" />
                  <rect x="70" y="120" width="60" height="80" rx="30" fill="currentColor" className="text-deep-yellow/30 dark:text-deep-yellow/20" />
                  {/* Camera icon overlay */}
                  <g transform="translate(100, 100)">
                    <rect x="-15" y="-10" width="30" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" className="text-deep-yellow" />
                    <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-deep-yellow" />
                  </g>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Highlight Strip */}
      <section className="py-16 px-4 bg-deep-yellow">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display mb-4 text-gray-900">
              Bringing Creative Visions to Life
            </h2>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              Specializing in commercial TVC production, short films, music videos, and documentaries. 
              From concept to delivery, I transform ideas into cinematic experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader title="Testimonials" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 dark:text-gray-400"
          >
            <p className="text-lg">Testimonials section - Coming soon</p>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-deep-yellow text-gray-900 rounded-full shadow-lg shadow-deep-yellow/50 hover:bg-deep-yellow-alt transition-all duration-300"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
