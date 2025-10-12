import React from 'react'
import Header from '../components/Header'
import userImage from "../../public/imp.webp"
import camIcon from "../../public/cam.png"

function User({ name, email, about, img }) {
    return (
        <div className='w-full h-full border-3 border-[#d9d7d7]  bg-[#f2f0f8]'>
            <Header />
            <div className='flex gap-2 px-6 pt-10'>
                <div className='relative'>
                    <div className='h-25 w-25 border rounded-full overflow-hidden relative'>
                        <img className='object-cover h-full w-full scale-120 ' src={userImage} />
                    </div>
                    <div className='h-7 w-7 absolute right-[-1px] bottom-0 bg-blue-700 p-[3px] rounded-full'>
                        <img src={camIcon} className='w-full h-full'/>
                    </div>
                </div>
                <div className='mx-5'>
                    <h1 className='font-semibold text-xl'>{name ? name : "Marry Doe"}</h1>
                    <h2 className='text-lg ]'>{email ? email : "Mary@gmail.com"}</h2>
                </div>
            </div>
            <div className=' px-6 text-lg border-b-1  py-5  [border-image:repeating-linear-gradient(to_right,#b8b7b7_0_8px,transparent_8px_16px)_1] '>
                {
                    about ? about : "For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity."
                }

            </div>
        </div>
    )
}

export default User
