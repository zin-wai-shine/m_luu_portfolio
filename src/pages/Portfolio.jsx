import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
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
    {
      id: 4,
      title: 'BYD EV Car',
      client: 'BYD',
      category: 'TVC',
      description: 'Global TVC',
      videoUrl: 'https://www.facebook.com/100076397719631/videos/1328532531070170/',
    },
    {
      id: 5,
      title: 'Rural Solid Waste Management',
      client: 'NGO/Social',
      category: 'Documentary',
      description: 'European Union\'s SWITCH-Asia Prevent Plastics project',
    },
    {
      id: 6,
      title: 'Music Video Project',
      client: 'Various Artists',
      category: 'Music Video',
      description: 'Creative music video production',
    },
    {
      id: 7,
      title: 'Short Film',
      client: 'Independent',
      category: 'Short Film',
      description: 'Award-winning short film production',
    },
  ]

  const filters = ['All', 'TVC', 'Documentary', 'Music Video', 'Short Film']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-white dark:bg-gray-900 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader title="Project Portfolio" subtitle="Explore my creative work" />

        {/* Filter Tabs - Clean Connected Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex">
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                  activeFilter === filter
                    ? 'text-gray-900'
                    : 'text-gray-400 dark:text-gray-400 hover:text-white'
                }`}
              >
                {/* Active state background */}
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-deep-yellow"
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
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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
            <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found in this category.</p>
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
