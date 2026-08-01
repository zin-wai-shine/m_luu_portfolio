import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { FaExternalLinkAlt, FaDownload, FaTimes, FaFilePdf } from 'react-icons/fa'

const PdfModal = ({ isOpen, onClose, pdfUrl, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !pdfUrl) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md">
        {/* Backdrop overlay click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-5xl h-[90vh] bg-gray-950 border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-black/60 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#D83030]/20 rounded-lg border border-[#D83030]/40 text-[#D83030]">
                <FaFilePdf className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-wide">
                  {title}
                </h3>
                <p className="text-xs text-gray-400 font-light">PDF Document Preview</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* External Open Button for Mobile/Desktop */}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#D83030] hover:bg-red-600 text-white text-xs sm:text-sm font-medium rounded-full transition-all shadow-[0_0_12px_rgba(216,48,48,0.5)]"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span className="hidden sm:inline">Open Fullscreen</span>
                <span className="sm:hidden">Open</span>
              </a>

              {/* Download Link */}
              <a
                href={pdfUrl}
                download
                className="p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Download PDF"
              >
                <FaDownload className="text-sm" />
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="text-base" />
              </button>
            </div>
          </div>

          {/* Mobile Phone Banner Tip */}
          <div className="sm:hidden bg-[#D83030]/15 border-b border-[#D83030]/30 px-4 py-2 flex items-center justify-between text-xs text-gray-200">
            <span>Reading on mobile phone?</span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium underline flex items-center gap-1"
            >
              Tap to View Full PDF <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>

          {/* PDF Frame Viewer */}
          <div className="flex-1 w-full h-full bg-gray-900 relative overflow-hidden">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
              title={title}
              className="w-full h-full border-none"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default PdfModal
