import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './page/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// bg-gradient-to-br  from-[#e5d714] from-[20%]   via-[white] via-[10%]

function App() {

  return (
<>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
