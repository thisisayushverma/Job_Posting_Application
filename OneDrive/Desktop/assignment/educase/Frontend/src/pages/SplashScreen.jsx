import React from 'react'
import { useNavigate } from 'react-router-dom'

function SplashScreen() {
    const navigate = useNavigate();

    return (
        <div className='h-full w-full border-3 border-[#d9d7d7] flex items-end bg-[#F7F8F9] pb-5'>
            <div className='w-full flex flex-col mb-5 px-3 gap-3'>
                <div className='mb-2'>
                    <h1 className='font-medium text-2xl my-1'>Welcome  to Popx</h1>
                    <p className='text-lg text-gray-700 font-sans m-0'>Lorem lorem lorem lorem lorem,</p>
                    <p className='text-lg text-gray-700 font-sans m-0'>lorem lorem lorem lorem lorem,</p>
                </div>
                <button className='w-full bg-[#6C25FF] text-white font-semibold text-lg p-3 rounded-lg cursor-pointer' onClick={()=> navigate('/signup')} >
                    Create Account
                </button>
                <button className='w-full bg-[#CEBAFB]  font-semibold text-lg p-3 rounded-lg cursor-pointer' onClick={()=> navigate('/login')}>
                    Already Registered? Login
                </button>
            </div>
        </div>
    )
}

export default SplashScreen
