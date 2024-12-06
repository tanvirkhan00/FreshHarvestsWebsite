import React, { useState } from 'react';

// Icon
import { MdErrorOutline } from "react-icons/md";
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

// Image
import line from "../assets/line.png"
import { Link } from 'react-router';

const LoginSection = () => {

    let [passShow, setPassShow] = useState(false)
    let [email, setEmail] = useState('')
    let [emailErr, setEmailErr] = useState('')

    let handleEye =() =>{
        setPassShow(!passShow) 
    }
    let handlePass = (e) => {
        setPassWord(e.target.value)
        setPassWordErr('')
    }

    let handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailErr('')
    }

    let handleLogin =(e) => {
        e.preventDefault()
        if (!email) {
            setEmailErr('Please Input Your Email')
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailErr('Please Input Valid Email Address')
            }
        }
    }

    return (
        <>

            <section>
                <div className="container">
                    <div className='flex items-center justify-center h-[100vh]'>
                        <div className='lg:w-[478px] shadow-md shadow-black px-[32px] py-[24px]'>
                            <h1 className='font-semibold text-[32px] text-center'>Login</h1>
                            <form className='flex flex-col gap-[20px] mt-[24px]' action="">
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email">Email</label>
                                    <input onChange={handleEmail} className='w-full outline-none border-[1px] border-slate-400 p-[16px] rounded-[8px]' id='email' placeholder='Enter your email' type="text" />
                                    {emailErr &&
                                        <p className='flex items-center gap-1'><span className='text-red-500'><MdErrorOutline /></span> {emailErr}</p>
                                    }
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="pass">Password</label>
                                    <div className='flex items-center border-[1px] border-slate-400 p-[16px] rounded-[8px]'>
                                        <input onChange={handlePass} className='w-full outline-none ' id='pass' placeholder='Enter your password' type={passShow ? 'text' : 'password'}/>
                                        <span onClick={handleEye}>{passShow ? <FaEyeSlash/> :  <FaRegEye/>
                                     }</span>
                                    </div>
                                </div>
                                <div className='flex flex-wrap items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <input id='Remember' type="checkBox" />
                                        <label htmlFor="Remember">Remember Me</label>
                                    </div>
                                    <div>
                                        <p className='border-b-2 border-slate-300 font-medium'>Forgot Password</p>
                                    </div>
                                </div>
                                <button onClick={handleLogin} className='w-full py-[16px] text-white bg-[#FF6A1A] rounded-[8px]'>Login</button>
                            </form>
                            <div className='flex items-center mt-[24px]'>
                                <img className='w-[45%]' src={line} alt="" />
                                <p>Or</p>
                                <img className='w-[45%]' src={line} alt="" />
                            </div>
                            <p className='mt-[24px] font-semibold'>Don,t have an Account ? <span className='text-[#FF6A1A]'><Link to="/signIn">Sign In</Link></span></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default LoginSection;