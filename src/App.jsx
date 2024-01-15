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
<div className='dark:bg-gradient-to-t  dark:from-[#e5d71498] dark:from-[2%] dark:to-[#14181fec] dark:to-[55%] max-sm:h-[100vh] flex flex-col justify-center'  >
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
