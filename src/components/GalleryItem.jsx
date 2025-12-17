import { motion } from 'framer-motion'
import Card from './Card'

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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card hover={false} className="cursor-pointer overflow-hidden" onClick={handleClick}>
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
}

export default GalleryItem

