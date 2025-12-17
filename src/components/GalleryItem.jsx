import { motion } from 'framer-motion'

const GalleryItem = ({ project, index, onVideoClick }) => {

  const handleClick = () => {
    if (project.videoUrl && onVideoClick) {
      onVideoClick(project)
    }
  }

  // Get Facebook video embed URL for thumbnail preview
  const getFacebookEmbedUrl = (url) => {
    if (!url) return null
    // Use Facebook's video embed plugin which shows thumbnail
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500&height=281`
  }

  const embedUrl = project.videoUrl ? getFacebookEmbedUrl(project.videoUrl) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={handleClick}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-deep-yellow/20 transition-all duration-500 cursor-pointer border border-gray-200/50 dark:border-gray-800/50"
    >
      {/* Video Preview Area */}
      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
            <motion.svg
              className="w-24 h-24 text-gray-600 dark:text-gray-500 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </motion.svg>
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
        
        {/* Category Badge - Top Left */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-deep-yellow text-gray-900 text-xs font-bold uppercase tracking-wider rounded-md shadow-lg">
            {project.category}
          </span>
        </div>
        
        {/* Video Indicator - Top Right */}
        {project.videoUrl && (
          <div className="absolute top-4 right-4">
            <div style={{ color: '#9DA3AF' }} className="px-3 py-1.5 bg-black/80 backdrop-blur-sm text-xs font-semibold rounded-md flex items-center gap-2 border border-white/20">
              <div className="w-2 h-2 bg-deep-yellow rounded-full animate-pulse"></div>
              <span>VIDEO</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Content Section - Modern Design */}
      <div className="p-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        {/* Title */}
        <h3 className="text-2xl font-sans font-bold text-gray-900 dark:text-[#9DA3AF] mb-3 group-hover:text-deep-yellow transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Client - Accent Color */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-0.5 w-8 bg-deep-yellow"></div>
          <p className="text-deep-yellow font-semibold text-sm uppercase tracking-wider">
            {project.client}
          </p>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
          {project.description}
        </p>
        
        {/* Hover Indicator */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-deep-yellow text-xs font-semibold uppercase tracking-wider">
            <span>View Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default GalleryItem

