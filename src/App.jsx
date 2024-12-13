import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<AdminPage />}/>
      </Routes>
    </>
  )
}

export default App
