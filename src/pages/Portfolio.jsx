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
      category: 'TVC & Campaign',
      description: 'Global TVC Campaign',
      videoUrl: 'https://www.facebook.com/watch/?v=692763926316214&rdid=G9n5DKgV1i2AMXIC',
    },
    {
      id: 2,
      title: 'The Best One - TVC',
      client: 'The Best One',
      category: 'TVC & Campaign',
      description: 'Commercial TVC Production',
      videoUrl: 'https://www.facebook.com/61550850055260/videos/1663108991188089/?rdid=7j94zOPUIj15KAuh#',
    },
    {
      id: 3,
      title: 'A BANK - TVC',
      client: 'A BANK',
      category: 'TVC & Campaign',
      description: 'Banking TVC Campaign',
      videoUrl: 'https://www.youtube.com/watch?v=BUttiiJJnQA',
    },
    {
      id: 4,
      title: 'Prime Plus - EV Station TVC',
      client: 'Prime Plus',
      category: 'TVC & Campaign',
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
      category: 'TVC & Campaign',
      description: 'Commercial Production',
      videoUrl: 'https://www.facebook.com/fabrixmm/videos/998498504799332/?rdid=9ALEOCAKaEKHcRH4#',
    },
    {
      id: 7,
      title: 'OPPO GLOBAL',
      client: 'OPPO',
      category: 'TVC & Campaign',
      description: 'Global Campaign',
      videoUrl: 'https://www.facebook.com/david.luu.376258/posts/pfbid025FNdN8qBPp16QNPuL3EyY4idkzJGxHNQcR8FPRaqK8Cbc5rhnhAadnp7fyhnYomcl?rdid=hVnQN0nnWYU8cvwq#',
    },
    {
      id: 8,
      title: 'OPPO Global Event Concept',
      client: 'OPPO',
      category: 'TVC & Campaign',
      description: 'Global Event Concept Video',
      videoUrl: 'https://www.facebook.com/100076397719631/videos/603902335266693/?rdid=l5T4e79jncBa5EVj#',
    },
    {
      id: 9,
      title: 'BYD Global Event Concept',
      client: 'BYD',
      category: 'TVC & Campaign',
      description: 'Global Event Concept Video',
      videoUrl: 'https://www.facebook.com/100076397719631/videos/1328532531070170/?rdid=MQdeDXBSDBKp0W8d#',
    },
    {
      id: 10,
      title: 'Ooredoo - Phone Operator',
      client: 'Ooredoo',
      category: 'TVC & Campaign',
      description: 'Phone Operator Campaign',
      videoUrl: 'https://www.facebook.com/OoredooMyanmar/videos/1537529373644332/?rdid=s2d8Nj0ZZbbbTMoy#',
    },
    {
      id: 11,
      title: '13THREE',
      client: 'Yuu Mike',
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=fkHz9s_oNgU',
    },
    {
      id: 12,
      title: 'ตัว Secret',
      client: "DE GIFT'",
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=7WYRco2eCCI&list=RD7WYRco2eCCI&start_radio=1',
    },
    {
      id: 13,
      title: 'JAK ZEUS ft. DJ SHADOWFACE',
      client: 'LAWA',
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=jFgcgZbAkCc',
    },
    {
      id: 14,
      title: 'နေရာဟောင်း Nay Yar Haung',
      client: 'Nay Yar Haung',
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=HwVD6Sl9ot8&list=RDHwVD6Sl9ot8&start_radio=1',
    },
    {
      id: 15,
      title: 'คำเตือน! เตรียมรับแรงกระแทกทางสายตา! ❤️‍🔥',
      client: 'SHINE BOYS',
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=Lg3T02HUj3Y',
    },
    {
      id: 16,
      title: 'FAKE',
      client: 'FAKE',
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.facebook.com/reel/1244029113086853',
    },
    {
      id: 17,
      title: 'A BANK thingyan festival',
      client: 'A BANK',
      category: 'Music Video',
      description: 'Thingyan Festival Music Video',
      videoUrl: 'https://www.facebook.com/reel/1116328368944624',
    },
    {
      id: 18,
      title: 'ပြေးထွက်',
      client: 'Triple A',
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.facebook.com/reel/124838396073437',
    },
    {
      id: 19,
      title: 'THE ICONIC Privilege Banking',
      client: 'A BANK',
      category: 'TVC & Campaign',
      description: 'Privilege Banking Campaign',
      videoUrl: 'https://www.facebook.com/reel/1522056438273429',
    },
    {
      id: 20,
      title: 'Where Trend Meets Tradition',
      client: 'Fabrix',
      category: 'TVC & Campaign',
      description: 'Commercial Production',
      videoUrl: 'https://www.facebook.com/fabrixmm/videos/998498504799332/',
    },
    {
      id: 21,
      title: 'A Tribute Film to Running',
      client: 'The Motion Code',
      category: 'TVC & Campaign',
      description: 'Tribute Film Production',
      videoUrl: 'https://www.facebook.com/reel/1125654749616719',
    },
    {
      id: 22,
      title: 'Celebrating Bespoke Artistry',
      client: 'New-ance × INGARI',
      category: 'TVC & Campaign',
      description: 'Bespoke Artistry Campaign',
      videoUrl: 'https://www.facebook.com/reel/25429713313333842',
    },
    {
      id: 23,
      title: 'ဧပြီလရွှေငါးကျပ်သား ကံထူးရှင် မေသဲပွင့်',
      client: 'ချွင်ချွင်ချွင်အစီအစဥ်',
      category: 'TVC & Campaign',
      description: 'TVC Production',
      videoUrl: 'https://www.youtube.com/watch?v=AA-bjlgEIro',
    },
    {
      id: 24,
      title: 'Watch Party - Special Episode | Share the love with BOGO Pack',
      client: 'ATOM',
      category: 'TVC & Campaign',
      description: 'TohToh Watch Party Series',
      videoUrl: 'https://www.youtube.com/watch?v=L-bzd0KmXl0',
    },
    {
      id: 25,
      title: 'Watch Party - Behind The Scenes On Set',
      client: 'ATOM',
      category: 'TVC & Campaign',
      description: 'TohToh Watch Party BTS',
      videoUrl: 'https://www.youtube.com/watch?v=V860XDQ67mU',
    },
    {
      id: 26,
      title: 'Watch Party - Episode 3 | KYAW who want good reputation at job',
      client: 'ATOM',
      category: 'TVC & Campaign',
      description: 'TohToh Watch Party Episode 3',
      videoUrl: 'https://www.youtube.com/watch?v=kONnpddgyzE',
    },
    {
      id: 27,
      title: 'Watch Party - Trailer',
      client: 'ATOM',
      category: 'TVC & Campaign',
      description: 'TohToh Watch Party Trailer',
      videoUrl: 'https://www.youtube.com/watch?v=MKLpzHG_LOQ',
    },
    {
      id: 28,
      title: 'အတူတူရှိနေမှာ အပိုင်း (၂)',
      client: 'MPT',
      category: 'TVC & Campaign',
      description: 'ရုံးတွင်းဇာတ်လမ်း Series',
      videoUrl: 'https://www.facebook.com/reel/1397223028791047',
    },
    {
      id: 29,
      title: 'MPT Office Story',
      client: 'MPT',
      category: 'TVC & Campaign',
      description: 'Office Story Series',
      videoUrl: 'https://www.facebook.com/reel/628524473115885',
    },
    {
      id: 30,
      title: 'THE NEW F45 ASOK IS HERE',
      client: 'F45',
      category: 'TVC & Campaign',
      description: 'F45 ASOK Launch',
      videoUrl: 'https://www.youtube.com/shorts/nrcUL7D_pMM',
    },
    {
      id: 31,
      title: 'ပျော်ရွှင်ခြင်းလက်ဆောင်',
      client: 'CANAL+',
      category: 'TVC & Campaign',
      description: 'Thadingyut Festival Campaign',
      videoUrl: 'https://www.facebook.com/reel/1549708609174563',
    },
    {
      id: 32,
      title: 'RESET & RECHARGE',
      client: 'Music Festival',
      category: 'TVC & Campaign',
      description: 'Music Festival Campaign',
      videoUrl: 'https://www.facebook.com/reel/1079991870621696',
    },
    {
      id: 33,
      title: 'Good Lady',
      client: 'Good Lady',
      category: 'TVC & Campaign',
      description: 'TVC Production',
      videoUrl: 'https://www.facebook.com/goodladymyanmar/videos/628524473115885/?fs=e&mibextid=wwXIfr&rdid=A5tw8hYrwpK2PTfM#',
    },
    {
      id: 34,
      title: 'Hold It Tight ft. LiTa PanPan',
      client: 'Awlele gugu',
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=sfb2qJZUuvI',
    },
    {
      id: 35,
      title: 'A Myu A Ga Hte Hip Hop - Awlele Gu Gu | feat- Ong Lar (Soul)',
      client: 'Awlele Gu Gu',
      category: 'Music Video',
      description: 'Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=U-VI4mmMVYE',
    },
    {
      id: 36,
      title: 'Makro x MILLI - LIVE LIKE A PRO',
      client: 'Makro × MILLI',
      category: 'Music Video',
      description: 'Official Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=MPePWnWx4IE',
    },
    {
      id: 37,
      title: 'QUEENS - FALL IN LOVE',
      client: 'QUEENS',
      category: 'Music Video',
      description: 'Official Music Video Production',
      videoUrl: 'https://www.youtube.com/watch?v=ApV3y-YzZxM',
    },
  ]

  const filters = ['All', 'TVC & Campaign', 'Music Video']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen pt-24 pb-20 bg-black overflow-x-hidden">
      {/* Header Section - Title on Left, Filter Selection Buttons on Right */}
      <section className="relative pt-12 pb-12 px-4 bg-black">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative accent line */}
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-deep-yellow via-deep-yellow to-transparent mb-6"
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  boxShadow: '0 0 10px rgba(216, 48, 48, 0.5)',
                }}
              ></motion.div>
              
              <h1 
                style={{ letterSpacing: '0.03em' }}
                className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 tracking-tight"
              >
                <motion.span 
                  style={{
                    background: 'linear-gradient(90deg, rgba(216, 48, 48, 0.4) 0%, rgba(216, 48, 48, 0.4) 40%, rgba(216, 48, 48, 1) 50%, rgba(216, 48, 48, 0.4) 60%, rgba(216, 48, 48, 0.4) 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  Projects
                </motion.span>
              </h1>
              <p 
                style={{ 
                  color: '#9DA3AF',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                  letterSpacing: '0.15em',
                }}
                className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
              >
                Explore my creative work
              </p>
            </motion.div>

            {/* Right Column: Filter Selection Buttons (Placed where camera image was) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="flex flex-wrap items-center gap-3">
                {filters.map((filter) => (
                  <motion.button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-6 py-3 font-light text-xs md:text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden rounded-full whitespace-nowrap border ${
                      activeFilter === filter
                        ? 'text-white border-[#D83030] shadow-[0_0_15px_rgba(216,48,48,0.4)]'
                        : 'text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                    style={{
                      background: activeFilter === filter ? 'rgba(216, 48, 48, 0.85)' : 'rgba(255, 255, 255, 0.03)',
                    }}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 pt-4">
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
