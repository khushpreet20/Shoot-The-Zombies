import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

import { Outlet } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContextProvider'

function App() {
  return (
    <ThemeContextProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </ThemeContextProvider>
  )
}

export default App
