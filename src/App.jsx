import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuidePage from './pages/GuidePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import CookieConsent from './components/CookieConsent'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuidePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  )
}
