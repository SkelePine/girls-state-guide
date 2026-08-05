import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import YearVerifiedBanner from './components/YearVerifiedBanner'
import PhotoBand from './components/PhotoBand'
import BackToTop from './components/BackToTop'
import SectionDivider from './components/SectionDivider'
import SectionIndicator from './components/SectionIndicator'
import MobileJumpMenu from './components/MobileJumpMenu'
import DecorSparkles from './components/DecorSparkles'

const AboutThisSite = lazy(() => import('./components/AboutThisSite'))
const HowToApply = lazy(() => import('./components/HowToApply'))
const WhatIsGS = lazy(() => import('./components/WhatIsGS'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Positions = lazy(() => import('./components/Positions'))
const WeekTimeline = lazy(() => import('./components/WeekTimeline'))
const PrepareToGo = lazy(() => import('./components/PrepareToGo'))
const RunningForOffice = lazy(() => import('./components/RunningForOffice'))
const FilingProcess = lazy(() => import('./components/FilingProcess'))
const WritingYourBill = lazy(() => import('./components/WritingYourBill'))
const TheExperience = lazy(() => import('./components/TheExperience'))
const WhatsNext = lazy(() => import('./components/WhatsNext'))
const ForParents = lazy(() => import('./components/ForParents'))
const FromTheDelegates = lazy(() => import('./components/FromTheDelegates'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="py-16" aria-hidden="true" />
}

function App() {
  const [loading, setLoading] = useState(() => {
    try {
      return sessionStorage.getItem('gs-splash-seen') !== '1'
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!loading) return
    const timer = setTimeout(() => {
      setLoading(false)
      try {
        sessionStorage.setItem('gs-splash-seen', '1')
      } catch {
        // ignore
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [loading])

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
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: '#1B2A4A' }}
          >
            <div className="relative px-10 py-4">
              <DecorSparkles
                sparkles={[
                  { className: 'absolute -top-4 left-0', size: 14, delay: 0 },
                  { className: 'absolute -top-2 -right-2', size: 18, delay: 0.5 },
                  { className: 'absolute bottom-0 -left-4', size: 11, delay: 1 },
                  { className: 'absolute -bottom-3 right-4', size: 13, delay: 1.4 },
                  { className: 'absolute top-1/2 -right-8 hidden sm:block', size: 10, delay: 0.8 },
                  { className: 'absolute top-0 left-1/3', size: 9, delay: 1.8 },
                ]}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                className="relative text-3xl md:text-5xl font-bold tracking-wide text-center"
                style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
              >
                CA Girls State Guide
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="font-sans bg-cream text-charcoal">
        <Navbar />
        <YearVerifiedBanner />
        <Hero />
        <SectionDivider bg="#FAF7F2" />
        <Suspense fallback={<SectionFallback />}>
          <AboutThisSite />
          <SectionDivider bg="#FAF7F2" />
          <HowToApply />
          <SectionDivider bg="#1B2A4A" />
          <WhatIsGS />
          <SectionDivider bg="#FAF7F2" />
          <HowItWorks />
        </Suspense>

        <PhotoBand imageKey="campus" />

        <Suspense fallback={<SectionFallback />}>
          <SectionDivider bg="#1B2A4A" />
          <Positions />
          <SectionDivider bg="#FAF7F2" />
          <WeekTimeline />
          <SectionDivider bg="#FAF7F2" />
          <PrepareToGo />
          <SectionDivider bg="#FAF7F2" />
          <RunningForOffice />
          <SectionDivider bg="#1B2A4A" />
          <FilingProcess />
          <SectionDivider bg="#FAF7F2" />
          <WritingYourBill />
        </Suspense>

        <PhotoBand imageKey="community" />

        <Suspense fallback={<SectionFallback />}>
          <SectionDivider bg="#FAF7F2" />
          <TheExperience />
        </Suspense>

        <PhotoBand imageKey="ceremony" />

        <Suspense fallback={<SectionFallback />}>
          <SectionDivider bg="#FAF7F2" />
          <WhatsNext />
          <SectionDivider bg="#FAF7F2" />
          <ForParents />
          <SectionDivider bg="#FAF7F2" />
          <FromTheDelegates />
          <SectionDivider bg="#FAF7F2" />
          <FAQ />
          <SectionDivider bg="#1B2A4A" />
          <Footer />
        </Suspense>

        <BackToTop />
        <MobileJumpMenu />
        <SectionIndicator />
      </div>
    </>
  )
}

export default App
