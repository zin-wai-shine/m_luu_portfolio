import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

const Activity = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Dynamically import all images from activity folder using import.meta.glob
  const activityImages = import.meta.glob('../assets/images/activity/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}', { eager: true })
  const highlightImages = import.meta.glob('../assets/images/activity/hight_light/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}', { eager: true })

  // Process images into activities array
  const allActivities = useMemo(() => {
    const highlights = []
    const regulars = []
    let id = 1

    // Add highlight images
    Object.entries(highlightImages).forEach(([path, module]) => {
      highlights.push({
        id: `highlight-${id++}`,
        title: 'Highlight Activity',
        image: module.default,
        description: 'Behind the scenes moment',
        isHighlight: true,
      })
    })

    // Add regular activity images
    Object.entries(activityImages).forEach(([path, module]) => {
      // Skip highlight folder images as they're already added
      if (!path.includes('hight_light')) {
        regulars.push({
          id: `activity-${id++}`,
          title: 'Activity',
          image: module.default,
          description: 'Behind the scenes',
          isHighlight: false,
        })
      }
    })

    return { highlights, regulars }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              <span 
                className="text-deep-yellow"
                style={{
                  textShadow: '0 0 40px rgba(237, 187, 28, 0.6), 0 0 80px rgba(237, 187, 28, 0.3)',
                }}
              >
                Activity
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
              Behind the scenes and personal moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activity Gallery Section */}
      <section className="py-20 px-4 bg-black relative">
        <div className="container mx-auto max-w-7xl">
          {/* All Activity Images (Highlights first) - Masonry-style 4 Column Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="columns-2 md:columns-3 lg:columns-4 gap-6 max-w-7xl mx-auto"
          >
            {[...allActivities.highlights, ...allActivities.regulars].map((activity) => (
              <motion.div
                key={activity.id}
                variants={itemVariants}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-[#050505] border border-white/5 shadow-lg shadow-black/40 mb-6 break-inside-avoid"
                onClick={() => setSelectedImage(activity)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 block"
                    style={{
                      display: 'block',
                      margin: 0,
                      padding: 0,
                    }}
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none'
                    }}
                  />
                  
                  {/* Gradient Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Title overlay on hover */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div>
                      <h3 
                        style={{ color: '#9DA3AF' }}
                        className="text-xl font-light mb-2"
                      >
                        {activity.title}
                      </h3>
                      <p 
                        style={{ color: '#9DA3AF' }}
                        className="text-sm font-light"
                      >
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh]"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-deep-yellow transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 
                style={{ color: '#9DA3AF' }}
                className="text-2xl font-light mb-2"
              >
                {selectedImage.title}
              </h3>
              <p 
                style={{ color: '#9DA3AF' }}
                className="text-base font-light"
              >
                {selectedImage.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Activity

