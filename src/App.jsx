import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowToApply from './components/HowToApply'
import WhatIsGS from './components/WhatIsGS'
import HowItWorks from './components/HowItWorks'
import Positions from './components/Positions'
import WeekTimeline from './components/WeekTimeline'
import DormLife from './components/DormLife'
import PackingList from './components/PackingList'
import RunningForOffice from './components/RunningForOffice'
import FilingProcess from './components/FilingProcess'
import WritingYourBill from './components/WritingYourBill'
import SocialGuide from './components/SocialGuide'
import Traditions from './components/Traditions'
import GirlsNation from './components/GirlsNation'
import AfterGS from './components/AfterGS'
import ParentGuide from './components/ParentGuide'
import FromTheDelegates from './components/FromTheDelegates'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import SectionDivider from './components/SectionDivider'
import SectionIndicator from './components/SectionIndicator'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: '#1B2A4A' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-wide text-center px-6"
              style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
            >
              CA Girls State Guide
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="font-sans bg-cream text-charcoal">
        <Navbar />
        <Hero />
        <SectionDivider />
        <HowToApply />
        <SectionDivider />
        <WhatIsGS />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <Positions />
        <SectionDivider />
        <WeekTimeline />
        <SectionDivider />
        <DormLife />
        <SectionDivider />
        <PackingList />
        <SectionDivider />
        <RunningForOffice />
        <SectionDivider />
        <FilingProcess />
        <SectionDivider />
        <WritingYourBill />
        <SectionDivider />
        <SocialGuide />
        <SectionDivider />
        <Traditions />
        <SectionDivider />
        <GirlsNation />
        <SectionDivider />
        <AfterGS />
        <SectionDivider />
        <ParentGuide />
        <SectionDivider />
        <FromTheDelegates />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Footer />
        <SectionIndicator />
        <BackToTop />
      </div>
    </>
  )
}

export default App
