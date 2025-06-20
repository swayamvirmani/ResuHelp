import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnalyseUpload from './Pages/AnalyseUpload.jsx'
import Compare from './Pages/Compare.jsx'
import Navbar from './Components/Navabr.jsx'
import Creater from './Pages/Creater.jsx'
import Home from './Pages/Home.jsx'
import { Analytics } from '@vercel/analytics/react' // ✅ Import Analytics

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/analyse' element={<AnalyseUpload />} />
          <Route path='/compare' element={<Compare />} />
          {/* <Route path='/create' element={<Creater />} /> */}
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* ✅ Add Analytics component outside BrowserRouter */}
      <Analytics />
    </>
  )
}

export default App
