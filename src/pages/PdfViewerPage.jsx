import { motion } from 'framer-motion'
import { useParams, useLocation } from 'react-router-dom'
import dopPdf from '../assets/pdf/DOP.pdf'
import steadicamPdf from '../assets/pdf/Steadicam_Operator.pdf'

const PdfViewerPage = () => {
  const { type } = useParams()
  const location = useLocation()

  const activeKey = type || (location.pathname.includes('steadicam') ? 'steadicam-operator' : 'dop')

  const pdfData = {
    dop: {
      title: 'DOP (Director of Photography)',
      shortTitle: 'DOP Portfolio',
      url: dopPdf,
    },
    'steadicam-operator': {
      title: 'Steadicam Operator',
      shortTitle: 'Steadicam Operator',
      url: steadicamPdf,
    },
  }

  const currentPdf = pdfData[activeKey] || pdfData['dop']

  return (
    <div className="min-h-screen pt-24 pb-8 bg-black text-white overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        {/* Mobile Header Title (Visible ONLY on Mobile < sm) */}
        <div className="sm:hidden mb-3 text-center">
          <h1 className="text-lg font-light text-white tracking-wide">
            {currentPdf.title}
          </h1>
          <a
            href={currentPdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1.5 text-xs text-[#D83030] hover:text-red-400 font-medium transition-colors underline tracking-wide"
          >
            Open Full PDF in Phone Reader
          </a>
        </div>

        {/* PDF Frame Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-stretch gap-2 sm:gap-4 w-full h-[80vh] sm:h-[88vh]"
        >
          {/* 90-Degree Side Label - Desktop & Tablet ONLY (>= sm) */}
          <div className="hidden sm:flex items-center justify-center w-8 md:w-10 flex-shrink-0 h-full select-none">
            <div className="transform -rotate-90 whitespace-nowrap origin-center">
              <span className="text-xs font-light text-gray-300 tracking-[0.2em] uppercase">
                {currentPdf.shortTitle || currentPdf.title}
              </span>
            </div>
          </div>

          {/* PDF Frame Display - Mobile & Desktop Renderer */}
          <div className="flex-1 h-full bg-gray-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl relative min-w-0 touch-pan-y overflow-y-auto -webkit-overflow-scrolling-touch">
            <object
              data={`${currentPdf.url}#navpanes=0&toolbar=1`}
              type="application/pdf"
              className="w-full h-full"
            >
              <embed
                src={`${currentPdf.url}#navpanes=0&toolbar=1`}
                type="application/pdf"
                className="w-full h-full"
              />
              <iframe
                src={`${currentPdf.url}#navpanes=0&toolbar=1`}
                title={currentPdf.title}
                className="w-full h-full border-none"
              >
                <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-300">
                  <p className="mb-4 text-base">Your browser requires direct opening for this PDF:</p>
                  <a
                    href={currentPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#D83030] text-white rounded-full font-medium shadow-lg hover:bg-red-600 transition-all"
                  >
                    Open PDF Document
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PdfViewerPage
