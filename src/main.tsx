import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ServiceDetail from './pages/ServiceDetail.tsx'
import ResourceDetail from './pages/ResourceDetail.tsx'
import TermsOfService from './pages/TermsOfService.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import { DarkModeProvider } from './lib/DarkModeContext'
import Header from './components/Header'
import Footer from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-950">
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/resources/:resourceId" element={<ResourceDetail />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>,
)
