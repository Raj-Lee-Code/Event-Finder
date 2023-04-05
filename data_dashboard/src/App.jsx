import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import DetailPage from './Pages/DetailPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detailPage" element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
