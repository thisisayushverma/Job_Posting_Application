import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SplashScreen from './pages/SplashScreen'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import User from './pages/User'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='h-full w-full'>
        <Outlet/>
      </div>
    </>
  )
}

export default App
