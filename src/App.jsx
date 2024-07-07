import React from 'react'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Installation from './Pages/Installation'
import Overview from './Pages/Overview'

function App() {
  return (
    <>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation name={'Installation'} />} />
          <Route path="/overview" element={<Overview name={'Overview'} />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App