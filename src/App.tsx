import { useState } from 'react'
import './App.css'
import { AltiusChat } from './Chat'
import { Home } from './components/Home'
import { CountrySelection } from './components/CountrySelection'

type ViewType = 'home' | 'country-selection' | 'chat';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home')
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const handleGetStarted = () => {
    setCurrentView('country-selection')
  }

  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country)
    setCurrentView('chat')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedCountry(null)
  }

  return (
    <>
      {currentView === 'home' && (
        <Home onGetStarted={handleGetStarted} />
      )}
      
      {currentView === 'country-selection' && (
        <CountrySelection onSelectCountry={handleSelectCountry} />
      )}
      
      {currentView === 'chat' && (
        <AltiusChat 
          onBackToHome={handleBackToHome}
          selectedCountry={selectedCountry}
        />
      )}
    </>
  )
}

export default App
