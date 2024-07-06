import React from 'react'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App