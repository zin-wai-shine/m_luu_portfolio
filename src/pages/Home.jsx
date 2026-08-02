import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import VideoModal from '../components/VideoModal'

// Import hero background image
import heroBackgroundImage from '../assets/images/hero-cinematic-bgs.png'
import mobileHeroBackgroundImage from '../assets/images/mobile-hero-cinematic-bg.png'
// Import about me background image
import aboutMeBgImage from '../assets/images/about_me_bg_img.png'
import mobileAboutMeBgImage from '../assets/images/mobile_about_me_bg.png'

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'QUEENS - FALL IN LOVE',
      client: 'QUEENS',
      category: 'Music Video',
      description: 'Official Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=ApV3y-YzZxM',
    },
    {
      id: 2,
      title: 'Makro x MILLI - LIVE LIKE A PRO',
      client: 'Makro × MILLI',
      category: 'Music Video',
      description: 'Official Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=MPePWnWx4IE',
    },
    {
      id: 3,
      title: 'Ooredoo Campaign',
      client: 'Ooredoo',
      category: 'TVC & Campaign',
      description: 'UPGRADE YOUR WORLD',
      videoUrl: 'https://www.facebook.com/OoredooMyanmar/videos/1537529373644332/',
    },
    {
      id: 4,
      title: 'OPPO Global Launch',
      client: 'OPPO',
      category: 'TVC & Campaign',
      description: 'Find N3 Flip, Reno 11, A78',
      videoUrl: 'https://www.facebook.com/100076397719631/videos/603902335266693/',
    },
    {
      id: 5,
      title: 'BYD EV CAR - GLOBAL TVC',
      client: 'BYD',
      category: 'TVC & Campaign',
      description: 'Global TVC Campaign',
      videoUrl: 'https://www.facebook.com/watch/?v=692763926316214&rdid=CLj7Ko9k3dci332V',
    },
  ]

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [unavailableVideos, setUnavailableVideos] = useState(new Set())

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

  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
    ]
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        return match[1]
      }
    }
    return null
  }

  // Get video embed URL for thumbnail preview
  const getFacebookEmbedUrl = (url) => {
    if (!url) return null
    
    // Check if it's a YouTube URL
    const youtubeId = getYouTubeVideoId(url)
    if (youtubeId) {
      // Return YouTube thumbnail image URL for preview
      return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    }
    
    // Check if it's a Facebook URL - use iframe embed for working videos
    if (url.includes('facebook.com') || url.includes('fb.com')) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500&height=281`
    }
    
    return null
  }

  return (
    <div className="min-h-screen">
      {/* Fullscreen Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
        {/* Background Image - Mobile & Desktop versions */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Mobile Background Image (Centered) */}
          <div className="md:hidden absolute inset-0 w-full h-full [transform:scaleX(-1)]">
            <motion.div 
              className="hero-bg-motion absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${mobileHeroBackgroundImage})`,
                minHeight: '100vh',
              }}
              animate={{
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
          </div>

          {/* Desktop Background Image */}
          <div className="hidden md:block absolute inset-0 w-full h-full [transform:scaleX(-1)]">
            <motion.div 
              className="hero-bg-motion absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${heroBackgroundImage})`,
                minHeight: '100vh',
              }}
              animate={{
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
          </div>
        </div>
          
          {/* Enhanced dark overlay for text contrast and cinematic depth */}
          <div className="absolute inset-0 bg-black/15 md:bg-black/30 pointer-events-none z-0"></div>
          
          {/* Left-side dark gradient shadow protection (Strong shadow on left for mobile) */}
          <div 
            className="md:hidden absolute inset-y-0 left-0 w-full pointer-events-none z-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.4) 65%, transparent 100%)'
            }}
          ></div>
          <div 
            className="hidden md:block absolute inset-y-0 left-0 w-4/5 lg:w-3/4 pointer-events-none z-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.4) 70%, transparent 100%)'
            }}
          ></div>
          
          {/* Top/bottom dark fades and cinematic edge vignette shadow */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 md:from-black/80 via-black/30 md:via-black/40 to-transparent pointer-events-none z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-52 md:h-44 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-0"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)] md:shadow-[inset_0_0_120px_rgba(0,0,0,0.8)] pointer-events-none z-0"></div>

      {/* Hero Content - Left Aligned */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-left px-5 sm:px-8 md:px-12 lg:px-16 pt-24 md:pt-24 pb-16 md:pb-20 max-w-3xl ml-1 sm:ml-4 md:ml-12 lg:ml-16 mr-auto"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-sans mb-4 md:mb-8 tracking-tight text-left"
        >
          <span 
            className="font-light"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 35px rgba(255, 255, 255, 0.4), 0 4px 20px rgba(0, 0, 0, 0.95)',
              letterSpacing: '0.05em',
            }}
          >
            M
          </span>
          <span 
            className="mx-2 md:mx-3 font-light tracking-wider"
            style={{
              background: 'linear-gradient(90deg, #FF4D4D 0%, #D83030 50%, #FF1A1A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 25px rgba(216, 48, 48, 0.95)) drop-shadow(0 4px 15px rgba(0, 0, 0, 0.9))',
              letterSpacing: '0.08em',
            }}
          >
            Luu
          </span>
        </motion.h1>
          
        {/* Modern decorative line with glow - aligned left */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow to-transparent mb-7 md:mb-8 rounded-full shadow-[0_0_25px_rgba(216,48,48,0.9)] ml-0 mr-auto"
        ></motion.div>
      
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ 
            letterSpacing: '0.15em',
            color: '#FFFFFF',
            textShadow: '0 4px 25px rgba(0, 0, 0, 0.95), 0 0 10px rgba(0, 0, 0, 0.8)'
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 md:mt-0 mb-4 md:mb-8 font-light tracking-wide uppercase drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] text-left flex flex-col md:flex-row md:flex-wrap space-y-4 md:space-y-0 leading-normal"
        >
          <span className="block md:inline py-1 md:py-0">Creative Director</span>
          <span className="hidden md:inline text-deep-yellow mx-2">/</span>
          <span className="block md:inline py-1 md:py-0">Director of Photography</span>
          <span className="hidden md:inline text-deep-yellow mx-2">/</span>
          <span className="block md:inline py-1 md:py-0">Steadicam Operator</span>
        </motion.p>

        {/* Small Bio Text - Base Positioned on Mobile */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ 
            letterSpacing: '0.05em',
            color: '#F3F4F6',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.95), 0 0 10px rgba(0, 0, 0, 0.8)'
          }}
          className="text-sm sm:text-base md:text-lg max-w-2xl mt-44 sm:mt-48 md:mt-10 mb-2 md:mb-10 leading-relaxed font-light drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] ml-0 mr-auto text-left"
        >
          I'm an artist, and branding expert with over <span className="text-deep-yellow font-medium text-base sm:text-lg md:text-xl drop-shadow-[0_0_20px_rgba(216,48,48,0.9)]">10 years</span> of professional experience in the film and video production industry. <span className="text-deep-yellow font-medium text-base sm:text-lg md:text-xl drop-shadow-[0_0_20px_rgba(216,48,48,0.9)]">Based in Thailand 🇹🇭 Myanmar 🇲🇲</span>.
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
            style={{ color: '#FFFFFF' }}
            className="hover:text-deep-yellow transition-colors drop-shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Preview Section with Full Background Image */}
      <section className="relative py-24 overflow-hidden min-h-[600px] flex items-center">
        {/* Mobile Background Image */}
        <div 
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${mobileAboutMeBgImage})`,
          }}
        ></div>

        {/* Desktop Background Image */}
        <div 
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${aboutMeBgImage})`,
          }}
        ></div>
        {/* Soft dark overlay for text readability - reduced opacity */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-0"></div>
        
        {/* Left-side dark gradient protection - lighter touch */}
        <div 
          className="absolute inset-y-0 left-0 w-full md:w-3/4 lg:w-2/3 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.1) 75%, transparent 100%)'
          }}
        ></div>
        
        {/* Top/bottom dark fades */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-0"></div>

        <div className="relative z-10 text-left px-5 sm:px-8 md:px-12 lg:px-16 max-w-3xl ml-1 sm:ml-4 md:ml-12 lg:ml-16 mr-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-start text-left max-w-2xl py-6"
          >
            {/* Decorative accent line with glow - aligned exactly like hero page */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow to-transparent mb-8 rounded-full shadow-[0_0_20px_rgba(216,48,48,0.6)] ml-0 mr-auto"
            ></motion.div>
            
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight relative"
              style={{
                letterSpacing: '0.03em',
              }}
            >
              <span
                className="relative z-10"
                style={{
                  color: '#FFFFFF',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                }}
              >
                About{' '}
              </span>
              <span 
                className="relative z-10"
                style={{
                  background: 'linear-gradient(90deg, #FF4D4D 0%, #D83030 50%, #FF1A1A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 16px rgba(216, 48, 48, 0.75))',
                }}
              >
                Me
              </span>
            </h2>
            
            <div className="space-y-7 mb-12 max-w-2xl relative z-10">
              <motion.p 
                className="text-lg md:text-xl text-gray-200 leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                10 years of experience in filmmaking with a passion for visual storytelling. My background is in advertising production, TVC production, social media production, and food vlog production.
              </motion.p>
              <motion.p 
                className="text-base md:text-lg text-gray-300 leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
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
          </motion.div>
        </div>
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
                boxShadow: '0 0 10px rgba(216, 48, 48, 0.5)',
              }}
            ></motion.div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight relative"
              style={{
                letterSpacing: '0.03em',
              }}
            >
              <span
                className="relative z-10"
                style={{
                  color: '#FFFFFF',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                }}
              >
                Featured{' '}
              </span>
              <span 
                className="relative z-10"
                style={{
                  background: 'linear-gradient(90deg, #FF4D4D 0%, #D83030 50%, #FF1A1A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 16px rgba(216, 48, 48, 0.75))',
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
                background: 'radial-gradient(circle, rgba(216, 48, 48, 0.3) 0%, transparent 70%)',
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
              const isYouTube = project.videoUrl ? getYouTubeVideoId(project.videoUrl) !== null : false
              const isUnavailable = unavailableVideos.has(project.id)
              
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
                      {/* Video Thumbnail Preview */}
                      {embedUrl ? (
                        isYouTube ? (
                          <div className="absolute inset-0">
                            <img
                              src={embedUrl}
                              alt={`${project.title} thumbnail`}
                              className="w-full h-full object-cover"
                            />
                            {/* Dark blurred overlay */}
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                            {/* Play button overlay for YouTube */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-[38px] h-[38px] border-2 border-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                                <FaPlay className="w-4 h-4 text-white ml-1" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            {!isUnavailable ? (
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
                                  onError={() => {
                                    setUnavailableVideos(prev => new Set([...prev, project.id]))
                                  }}
                          />
                        </div>
                            ) : (
                              <>
                                {/* Simple video camera icon for unavailable videos */}
                                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                  <svg 
                                    className="w-24 h-24 text-gray-500 opacity-50" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={1.5} 
                                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
                                    />
                                  </svg>
                                </div>
                              </>
                            )}
                          </>
                        )
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
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 bg-[#D83030]/90 backdrop-blur-md text-white text-[11px] font-medium uppercase tracking-wider rounded-full shadow-[0_2px_10px_rgba(216,48,48,0.5)] border border-red-400/30">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Video Indicator */}
                      {project.videoUrl && (
                        <div className="absolute top-4 right-4 z-10">
                          <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium rounded-full flex items-center gap-2 border border-white/20 shadow-md">
                            <div className="w-2 h-2 bg-[#D83030] rounded-full animate-pulse shadow-[0_0_8px_rgba(216,48,48,0.9)]"></div>
                            <span className="tracking-wider text-white">VIDEO</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Text Content Group with Padding */}
                    <div className="p-6 bg-black/20 backdrop-blur-sm">
                      <h3 style={{ color: '#FFFFFF' }} className="text-2xl font-sans font-medium mb-3 group-hover:text-red-500 transition-colors">
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
              className="text-3xl md:text-5xl font-light mb-6 tracking-tight"
              style={{
                color: '#FFFFFF',
                letterSpacing: '0.03em',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.4)',
              }}
            >
              Bringing <span style={{
                color: '#FF3333',
                textShadow: '0 0 30px rgba(255, 51, 51, 0.9), 0 0 60px rgba(216, 48, 48, 0.5)',
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
