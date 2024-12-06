import React, { useState } from 'react';
import { Link } from 'react-router';

// Icon
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

// Image
import line from "../assets/line.png"


const SignIn = () => {

    let [passShow, setPassShow] = useState(false)
    let handleEye =() =>{
        setPassShow(!passShow) 
    }
    let handlePass = (e) => {
        setPassWord(e.target.value)
        setPassWordErr('')
    }
    return (
        <>

            <section>
                <div className="container">
                    <div className='lg:flex lg:items-center lg:justify-center h-[100vh]'>
                        <div className='lg:w-[478px] shadow-md shadow-black px-[32px] py-[24px]'>
                            <h1 className='font-semibold text-[32px] text-center'>Register</h1>
                            <form className='flex flex-col gap-[20px] mt-[24px]' action="">
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="name">Full Name</label>
                                    <input className='w-full outline-none border-[1px] border-slate-400 p-[16px] rounded-[8px] ' id='name' placeholder='Enter Your Name' type="text" />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email">Email</label>
                                    <input className='w-full outline-none border-[1px] border-slate-400 p-[16px] rounded-[8px]' id='email' placeholder='Enter your email' type="text" />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="pass">Password</label>
                                    <div className='flex items-center border-[1px] border-slate-400 p-[16px] rounded-[8px]'>
                                        <input onChange={handlePass} className='w-full outline-none ' id='pass' placeholder='Enter your password' type={passShow ? 'text' : 'password'} />
                                        <span onClick={handleEye}>{passShow ? <FaEyeSlash /> : <FaRegEye />
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
                                <button className='w-full py-[16px] text-white bg-[#FF6A1A] rounded-[8px]'>Sign In</button>
                            </form>
                            <div className='flex items-center mt-[24px]'>
                                <img className='w-[45%]' src={line} alt="" />
                                <p>Or</p>
                                <img className='w-[45%]' src={line} alt="" />
                            </div>
                            <p className='mt-[24px] font-semibold'>Have an Account ? <span className='text-[#FF6A1A]'><Link to="/login">Login</Link></span></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default SignIn;