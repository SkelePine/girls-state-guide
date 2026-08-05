import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const links = [
    { name: 'Apply', id: 'apply' },
    { name: 'What Is It', id: 'what' },
    { name: 'The Week', id: 'week' },
    { name: 'Packing', id: 'packing' },
    { name: 'Run for Office', id: 'office' },
    { name: 'For Parents', id: 'parents' },
    { name: 'FAQ', id: 'faq' },
  ]

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: '#1B2A4A',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ color: '#C9A84C' }}
          className="text-xl font-bold tracking-wide"
          style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
        >
          CA Girls State Guide
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-white text-sm hover:opacity-75 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: '#1B2A4A' }}
        >
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-white text-sm hover:opacity-75 text-left bg-transparent border-none cursor-pointer py-1"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}