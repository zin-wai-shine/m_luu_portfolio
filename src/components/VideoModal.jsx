import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  const [videoUnavailable, setVideoUnavailable] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Reset unavailable state when modal opens
      setVideoUnavailable(false)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, videoUrl])

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

  // Get video embed URL for playback
  const getVideoEmbedUrl = (url) => {
    if (!url) return null
    
    // Check if it's a YouTube URL
    const youtubeId = getYouTubeVideoId(url)
    if (youtubeId) {
      return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
    }
    
    // Check if it's a Facebook URL
    if (url.includes('facebook.com') || url.includes('fb.com')) {
      // Extract video ID from Facebook URL
      const match = url.match(/videos\/(\d+)/) || url.match(/reel\/(\d+)/)
      if (match && match[1]) {
        return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=734&autoplay=true`
      }
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=734&autoplay=true`
    }
    
    return null
  }

  const isYouTube = videoUrl ? getYouTubeVideoId(videoUrl) !== null : false
  const embedUrl = getVideoEmbedUrl(videoUrl)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden z-[10000]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-[#9DA3AF]">
                  {title}
                </h3>
                <div className="flex items-center gap-2">
                  {!isYouTube && embedUrl && !videoUnavailable && (
                    <button
                      onClick={() => setVideoUnavailable(true)}
                      className="px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-deep-yellow dark:hover:text-deep-yellow transition-colors"
                      title="Video unavailable? Click here"
                    >
                      Video unavailable?
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Video Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {embedUrl ? (
                  <>
                    <iframe
                      src={embedUrl}
                      width="100%"
                      height="100%"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        filter: videoUnavailable ? 'blur(4px) grayscale(50%) brightness(0.5)' : 'none',
                        transition: 'filter 0.3s ease',
                      }}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      title={title}
                      onError={() => setVideoUnavailable(true)}
                    />
                    {/* Play button overlay when video unavailable */}
                    {videoUnavailable && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                        onClick={() => window.open(videoUrl, '_blank', 'noopener,noreferrer')}
                      >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                        {/* Play button with pulse effect */}
                        <motion.div 
                          className="relative"
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="w-[38px] h-[38px] border-2 border-white rounded-full flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                            <FaPlay className="w-4 h-4 text-white ml-1" />
                          </div>
                          {/* Pulsing ring effect */}
                          <motion.div
                            className="absolute inset-0 border-2 border-white rounded-full"
                            animate={{
                              scale: [1, 1.5],
                              opacity: [0.6, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 dark:bg-gray-800">
                    <div className="text-center">
                      <p className="text-gray-400 dark:text-gray-500">Unable to load video</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-deep-yellow hover:text-deep-yellow-alt flex items-center gap-2"
                >
                  <span>Watch on {isYouTube ? 'YouTube' : 'Facebook'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default VideoModal

