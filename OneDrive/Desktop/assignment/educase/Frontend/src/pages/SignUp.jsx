import React, { useEffect, useState } from 'react'
import InputCard from '../components/InputCard'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("yes")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [company,setCompany] = useState("")
    const [allGet,setAllGet] = useState(false)

    const handleCreate = ()=>{
        if(!name.trim("") || !phone || !email || !password){
            alert("All fields are mandatory")
            return;
        }

        const obj = {
            name,
            phone,
            email,
            password,
            company,
            isAgency:selected==="yes"?true:false
        }

        navigate('/user')
        console.log(obj);
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setCompany("");

    }


    useEffect(()=>{
        if(name.trim(" ")!=="" && email!=="" && password!=="" && phone!=="") setAllGet(true);
        else setAllGet(false);
    },[name,email,password,phone])

    return (
        <div className='h-full w-full flex flex-col border-3 border-[#d9d7d7] justify-between py-6 px-4 '>
            <div>
                <h1 className='text-2xl font-semibold'>
                    Create your
                </h1>
                <h1 className='text-2xl font-medium'>
                    Popx account
                </h1>


                <form className='w-full flex flex-col my-5 text-black '>
                    <InputCard title={"Full Name"} required={true} type={"text"} placeholder={"Sam Simon"} value={name} onChange={setName} />
                    <InputCard title={"Phone Number"} required={true} type={""} placeholder={"1234567890"} value={phone} onChange={setPhone} />
                    <InputCard title={"Email Address"} required={true} type={"email"} placeholder={"abc@xyz.com"} value={email} onChange={setEmail}/>
                    <InputCard title={"Password"} required={true} type={"password"} placeholder={"********"} value={password} onChange={setPassword}/>
                    <InputCard title={"Company Name"} required={false} type={"text"} placeholder={"Nutrabay"} value={company} onChange={setCompany}/>
                    <div>
                        <p className='text-[15px]'>Are you an Agency?<span className='text-red-700'>*</span></p>
                        <div className='flex gap-3'>
                            {["yes", "no"].map((option) => (
                                <label key={option} className="flex items-center cursor-pointer space-x-2">
                                    <span
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selected === option ? "border-blue-600" : "border-gray-400"
                                            }`}
                                    >
                                        {selected === option && (
                                            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                                        )}
                                    </span>
                                    <input
                                        type="radio"
                                        name="agree"
                                        value={option}
                                        checked={selected === option}
                                        onChange={(e) => setSelected(e.target.value)}
                                        className="hidden"
                                    />
                                    <span className="capitalize text-gray-700">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
            <button className={`w-full bg-[#6C25FF] text-white font-semibold text-lg p-[10px] rounded-lg cursor-pointer ${allGet?"bg-[#6C25FF]":"bg-[#b4b1b1]"}`} onClick={handleCreate}>
                Create Account
            </button>

        </div>
    )
}

export default SignUp
