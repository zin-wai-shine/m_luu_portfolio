import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import VideoModal from '../components/VideoModal'

// Import hero background image
import heroBackgroundImage from '../assets/images/hero-cinematic-bgs.png'
// Import about me image
import aboutMeImage from '../assets/images/about_me_img.png'

const Home = () => {
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
      title: 'BYD EV CAR - GLOBAL TVC',
      client: 'BYD',
      category: 'TVC',
      description: 'Global TVC Campaign',
      videoUrl: 'https://www.facebook.com/watch/?v=692763926316214&rdid=CLj7Ko9k3dci332V',
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
      <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
        {/* Background Image - Cool Dramatic Design */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Background Image - Dramatic Black & White with Enhanced Contrast */}
          <motion.div 
            className="hero-bg-motion absolute inset-0 w-full h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${heroBackgroundImage})`,
              minHeight: '100vh',
              filter: 'grayscale(100%) contrast(1.5) brightness(0.75) saturate(0.8)',
            }}
            animate={{
              // Slightly gentler motion
              scale: [1, 1.03, 1],
              x: [0, -12, 0],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          
          {/* Dark dramatic overlay - strong contrast */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.1) 100%)'
            }}
          ></div>
          
          {/* Deep shadow overlay for dramatic effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 20%, transparent 50%, rgba(0,0,0,0.25) 80%, rgba(0,0,0,0.4) 100%)'
            }}
          ></div>
          
          {/* Strong vignette - dramatic corners */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 100% at center, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)'
            }}
          ></div>
          
          {/* Text area protection - lighter on left for readability */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 50% 120% at left center, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%)'
            }}
          ></div>
          
          {/* Subtle texture overlay for depth */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              backgroundSize: '200px 200px',
              mixBlendMode: 'multiply',
            }}
          ></div>
          
          {/* Top/bottom dramatic fades */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent"></div>
          
          {/* Black filter at base/bottom */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-40"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)'
            }}
          ></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 md:px-8 lg:px-12 xl:px-16 pt-24 pb-20 max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-sans mb-8 tracking-tight"
        >
          <span 
            style={{ color: '#9DA3AF' }}
            className="font-light drop-shadow-[0_4px_20px_rgba(0,0,0,0.9),0_0_40px_rgba(0,0,0,0.5)]"
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.15)',
              letterSpacing: '0.05em',
            }}
          >
            M
          </span>
          <span 
            className="mx-2 md:mx-3 text-gradient font-light tracking-wider"
            style={{
              textShadow: '0 0 40px rgba(237,187,28,0.6), 0 0 80px rgba(237,187,28,0.3)',
              letterSpacing: '0.08em',
            }}
          >
            LUU
          </span>
        </motion.h1>
          
        {/* Modern decorative line with glow */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-deep-yellow to-transparent mb-8 rounded-full shadow-[0_0_20px_rgba(237,187,28,0.6)] mx-auto"
        ></motion.div>
      
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ color: '#9DA3AF' }}
          className="text-lg md:text-xl lg:text-2xl mb-6 font-light tracking-wide uppercase drop-shadow-[0_3px_15px_rgba(0,0,0,0.8),0_0_30px_rgba(0,0,0,0.4)]"
          style={{ 
            letterSpacing: '0.15em',
            textShadow: '0 0 20px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1)',
          }}
        >
          Creative Director <span className="text-deep-yellow mx-2">/</span> Director of Photography
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ color: '#9DA3AF' }}
          className="text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.7),0_0_25px_rgba(0,0,0,0.3)]"
          style={{ 
            letterSpacing: '0.05em',
            textShadow: '0 0 15px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.08)',
          }}
        >
          I'm an artist, and branding expert with over <span className="text-deep-yellow font-normal text-lg md:text-xl drop-shadow-[0_0_15px_rgba(237,187,28,0.6)]">8 years</span> of professional experience in the film and video production industry.
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
            style={{ color: '#9DA3AF' }}
            className="hover:text-deep-yellow transition-colors drop-shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Preview Section - Black & White Theme */}
      <section className="px-4 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-start text-left h-full py-12 relative"
            >
              {/* Decorative accent line with glow */}
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
                style={{ color: '#9DA3AF' }}
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight relative"
                style={{
                  letterSpacing: '0.03em',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                }}
              >
                <span className="relative z-10">About </span>
                <span 
                  className="text-deep-yellow relative z-10"
                  style={{
                    textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                  }}
                >
                  Me
                </span>
              </h2>
              
              <div className="space-y-7 mb-12 max-w-2xl relative z-10">
                <motion.p 
                  className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                  }}
                >
                  8 years of experience in filmmaking with a passion for visual storytelling. My background is in advertising production, TVC production, social media production, and food vlog production.
                </motion.p>
                <motion.p 
                  className="text-base md:text-lg text-gray-400 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Seeking new challenges, collaborations, and opportunities. I am passionate about contributing with my skills and bringing ideas to life.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button to="/about" variant="primary">
                  Learn More
                </Button>
              </motion.div>
              
              {/* Subtle background glow effect */}
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(237, 187, 28, 0.3) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
              ></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* About Me Image - Black & White Cool Design */}
              <div className="relative overflow-hidden rounded-lg h-full">
                <img
                  src={aboutMeImage}
                  alt="About Me"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(100%) contrast(1.3) brightness(0.9)',
                  }}
                />
                {/* Cool overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                {/* Subtle glow effect */}
                <div 
                  className="absolute inset-0"
                  style={{
                    boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.5)',
                  }}
                ></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Black filter at base/bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-10"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)'
          }}
        ></div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-black">
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-end text-right mb-12 relative"
          >
            {/* Decorative accent line with glow */}
            <motion.div 
              className="w-20 h-0.5 bg-gradient-to-l from-deep-yellow via-deep-yellow to-transparent mb-10"
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                boxShadow: '0 0 10px rgba(237, 187, 28, 0.5)',
              }}
            ></motion.div>
            
            <h2 
              style={{ color: '#9DA3AF' }}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight relative"
              style={{
                letterSpacing: '0.03em',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
              }}
            >
              <span className="relative z-10">Featured </span>
              <span 
                className="text-deep-yellow relative z-10"
                style={{
                  textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                }}
              >
                Projects
              </span>
            </h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-4 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
              }}
            >
              A selection of recent work
            </motion.p>
            
            {/* Subtle background glow effect */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(237, 187, 28, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            ></div>
          </motion.div>

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
                  <Card hover={false} className="cursor-pointer overflow-hidden" onClick={() => project.videoUrl && handleVideoClick(project)}>
                    {/* Video Preview Area */}
                    <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
                            }}
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
                      
                      {/* Gradient Overlay - Cool Design */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-deep-yellow/80 backdrop-blur-sm text-gray-900 text-xs font-light uppercase tracking-wider rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Video Indicator */}
                      {project.videoUrl && (
                        <div className="absolute top-4 right-4">
                          <div style={{ color: '#9DA3AF' }} className="px-3 py-1.5 bg-black/40 backdrop-blur-sm text-xs font-light rounded-full flex items-center gap-2">
                            <div className="w-2 h-2 bg-deep-yellow rounded-full animate-pulse"></div>
                            <span>VIDEO</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Text Content Group with Padding */}
                    <div className="p-6 bg-black/20 backdrop-blur-sm">
                      <h3 style={{ color: '#9DA3AF' }} className="text-2xl font-sans font-light mb-3 group-hover:text-deep-yellow transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-0.5 w-8 bg-deep-yellow"></div>
                        <p className="text-deep-yellow font-light text-sm uppercase tracking-wider">
                          {project.client}
                        </p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="text-center">
            <Button to="/portfolio" variant="primary">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* Video Modal - Outside sections to avoid z-index issues */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl={selectedVideo?.videoUrl}
        title={selectedVideo?.title}
      />

      {/* Cinematic Highlight Strip */}
      <section className="py-16 px-4 relative overflow-hidden bg-black">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              style={{ color: '#9DA3AF' }}
              className="text-3xl md:text-5xl font-light mb-6 tracking-tight"
              style={{
                letterSpacing: '0.03em',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.15)',
              }}
            >
              Bringing <span className="text-deep-yellow" style={{
                textShadow: '0 0 40px rgba(237, 187, 28, 0.8), 0 0 80px rgba(237, 187, 28, 0.4)',
              }}>Creative Visions</span> to Life
            </h2>
            <p 
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed"
              style={{
                textShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              Specializing in commercial TVC production, short films, music videos, and documentaries. 
              From concept to delivery, I transform ideas into cinematic experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider space */}
      <div className="h-4 bg-black"></div>

    </div>
  )
}

export default Home
