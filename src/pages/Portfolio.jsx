import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GalleryItem from '../components/GalleryItem'
import VideoModal from '../components/VideoModal'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
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

  const projects = [
    {
      id: 1,
      title: 'BYD EV CAR - GLOBAL TVC',
      client: 'BYD',
      category: 'TVC',
      description: 'Global TVC Campaign',
      videoUrl: 'https://www.facebook.com/watch/?v=692763926316214&rdid=G9n5DKgV1i2AMXIC',
    },
    {
      id: 2,
      title: 'The Best One - TVC',
      client: 'The Best One',
      category: 'TVC',
      description: 'Commercial TVC Production',
      videoUrl: 'https://www.facebook.com/61550850055260/videos/1663108991188089/?rdid=7j94zOPUIj15KAuh#',
    },
    {
      id: 3,
      title: 'A BANK - TVC',
      client: 'A BANK',
      category: 'TVC',
      description: 'Banking TVC Campaign',
      videoUrl: 'https://www.youtube.com/watch?v=BUttiiJJnQA',
    },
    {
      id: 4,
      title: 'Prime Plus - EV Station TVC',
      client: 'Prime Plus',
      category: 'TVC',
      description: 'EV Station Commercial',
      videoUrl: 'https://www.facebook.com/61550850055260/videos/1615297825989084/?rdid=qwMKqPrblzOJobhM#',
    },
    {
      id: 5,
      title: 'PRIM E - Music Video',
      client: 'PRIM E',
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.facebook.com/PrimEMyanmarOfficial/videos/548490980871262/?rdid=XJD93SN6sbN3Cgaf#',
    },
    {
      id: 6,
      title: 'Fabrix',
      client: 'Fabrix',
      category: 'TVC',
      description: 'Commercial Production',
      videoUrl: 'https://www.facebook.com/fabrixmm/videos/998498504799332/?rdid=9ALEOCAKaEKHcRH4#',
    },
    {
      id: 7,
      title: 'OPPO GLOBAL',
      client: 'OPPO',
      category: 'TVC',
      description: 'Global Campaign',
      videoUrl: 'https://www.facebook.com/david.luu.376258/posts/pfbid025FNdN8qBPp16QNPuL3EyY4idkzJGxHNQcR8FPRaqK8Cbc5rhnhAadnp7fyhnYomcl?rdid=hVnQN0nnWYU8cvwq#',
    },
    {
      id: 8,
      title: 'OPPO Global Event Concept',
      client: 'OPPO',
      category: 'TVC',
      description: 'Global Event Concept Video',
      videoUrl: 'https://www.facebook.com/100076397719631/videos/603902335266693/?rdid=l5T4e79jncBa5EVj#',
    },
    {
      id: 9,
      title: 'BYD Global Event Concept',
      client: 'BYD',
      category: 'TVC',
      description: 'Global Event Concept Video',
      videoUrl: 'https://www.facebook.com/100076397719631/videos/1328532531070170/?rdid=MQdeDXBSDBKp0W8d#',
    },
    {
      id: 10,
      title: 'Ooredoo - Phone Operator',
      client: 'Ooredoo',
      category: 'TVC',
      description: 'Phone Operator Campaign',
      videoUrl: 'https://www.facebook.com/OoredooMyanmar/videos/1537529373644332/?rdid=s2d8Nj0ZZbbbTMoy#',
    },
  ]

  const filters = ['All', 'TVC', 'Music Video']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-black">
        <div className="container mx-auto max-w-7xl lg:max-w-full relative z-10">
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
              <span 
                className="text-deep-yellow"
                style={{
                  textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                }}
              >
                Projects
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
              Explore my creative work
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4">
        {/* Filter Tabs - Mobile: Horizontal Scrollable, Desktop: Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          {/* Mobile: Horizontal Scrollable Design */}
          <div className="md:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            <div className="inline-flex gap-3 min-w-max">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 font-light text-xs uppercase tracking-wider transition-all duration-300 overflow-hidden rounded-full whitespace-nowrap ${
                    activeFilter === filter
                      ? 'text-gray-900'
                      : 'text-[#9DA3AF]'
                  }`}
                >
                  {/* Active state background */}
                  {activeFilter === filter && (
                    <motion.div
                      layoutId="activeFilterMobile"
                      className="absolute inset-0 bg-deep-yellow rounded-full"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Inactive state background */}
                  {activeFilter !== filter && (
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full"></div>
                  )}
                  
                  {/* Text */}
                  <span className="relative z-10">
                    {filter}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop: Centered Design */}
          <div className="hidden md:flex justify-center">
            <div className="inline-flex bg-black/20 backdrop-blur-sm rounded-lg p-1">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-6 py-3 font-light text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                    activeFilter === filter
                      ? 'text-gray-900'
                      : 'text-[#9DA3AF] hover:text-deep-yellow'
                  }`}
                >
                  {/* Active state background */}
                  {activeFilter === filter && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-deep-yellow rounded-md"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Text */}
                  <span className="relative z-10 whitespace-nowrap">
                    {filter}
                  </span>
                  
                  {/* Shine effect on active */}
                  {activeFilter === filter && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-md"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: 'linear',
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <GalleryItem 
                key={project.id}
                project={project} 
                index={index}
                onVideoClick={handleVideoClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p style={{ color: '#9DA3AF' }} className="text-lg font-light">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl={selectedVideo?.videoUrl}
        title={selectedVideo?.title}
      />
    </div>
  )
}

export default Portfolio
