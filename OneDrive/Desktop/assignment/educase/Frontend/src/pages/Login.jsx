import React, { useEffect, useState } from 'react'
import InputCard from '../components/InputCard'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allGet,setAllGet] = useState(false)
    useEffect(()=>{
        if(email!=="" && password!=="") setAllGet(true)
        else setAllGet(false);
    },[email,password])

    const handleLogin = () => {
        if(!email || !password){
            alert("fill all fields")
            return;
        }
        navigate('/user')
    }
    return (
        <div className='h-full w-full flex flex-col justify-between border-3 border-[#d9d7d7] py-6 px-4 '>
            <div>
                <h1 className='text-2xl font-semibold'>
                    Signin to your
                </h1>
                <h1 className='text-2xl font-medium'>
                    Popx account
                </h1>

                <p className='text-lg text-gray-700 font-sans m-0'>Lorem lorem lorem lorem lorem,</p>
                <p className='text-lg text-gray-700 font-sans m-0'>lorem lorem lorem lorem lorem,</p>


                <form className='w-full flex flex-col my-5 text-black '>
                    <InputCard title={"Email Address"} required={true} type={"email"} placeholder={"Enter email address"} value={email} onChange={setEmail} />
                    <InputCard title={"Password"} required={true} type={"password"} placeholder={"Enter password"} value={password} onChange={setPassword} />
                </form>
                <button className={`w-full  text-white font-semibold text-lg p-[10px] rounded-lg cursor-pointer ${allGet?"bg-[#6C25FF]":"bg-[#b4b1b1]"}`} onClick={handleLogin}>
                    Login
                </button>
            </div>

        </div>
    )
}

export default Login
