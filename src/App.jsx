import { useState } from 'react'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import DarkMode from './components/DarkMode'
import './App.css'

function App() {
  return (
    <>
      <Info />
      <About />
      <Interests />
      <Footer />
      <DarkMode />
    </>
  )
}

export default App
