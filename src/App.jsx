import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuidePage from './pages/GuidePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import PrivacyNotice from './components/PrivacyNotice'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuidePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <PrivacyNotice />
    </BrowserRouter>
  )
}
