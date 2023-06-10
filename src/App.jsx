import React from 'react'
import Main from './Main'
import './App.css'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/practice' element={<Main />} />
      </Routes>
    </div>
  )
}
