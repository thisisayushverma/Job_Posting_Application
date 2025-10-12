import React from 'react'

function InputCard({ title, required,type,placeholder,value,onChange }) {
    
    return (
        <div className='w-full border-2 border-[#a2a1a1] rounded-lg relative my-3'>
            <h1 className='absolute bg-white top-[-12px] left-3 px-2 font-medium text-[#6C25FF]'>
                {title}
                {" "}
                <span className='text-red-700'>{required ? "*" : ""}</span>
            </h1>
            <input type={type} placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)} className='w-full outline-none p-2 text-lg ' />
        </div>
    )
}

export default InputCard
