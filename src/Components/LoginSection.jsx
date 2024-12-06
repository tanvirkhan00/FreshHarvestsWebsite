import React from 'react';

// Icon
import { FaRegEyeSlash } from "react-icons/fa6";

// Image
import line from "../assets/line.png"
import { Link } from 'react-router';

const LoginSection = () => {
    return (
        <>

            <section>
                <div className="container">
                    <div className='flex items-center justify-center h-[100vh]'>
                        <div className='w-[478px] shadow-md shadow-black px-[32px] py-[24px]'>
                            <h1 className='font-semibold text-[32px] text-center'>Login</h1>
                            <form className='flex flex-col gap-[20px] mt-[24px]' action="">
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email">Email</label>
                                    <input className='w-full outline-none border-[1px] border-slate-400 p-[16px] rounded-[8px]' id='email' placeholder='Enter your email' type="text" />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="pass">Password</label>
                                    <div className='flex items-center border-[1px] border-slate-400 p-[16px] rounded-[8px]'>
                                        <input className='w-full outline-none ' id='pass' placeholder='Enter your password' type="text" />
                                        <span><FaRegEyeSlash /></span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <input id='Remember' type="checkBox" />
                                        <label htmlFor="Remember">Remember Me</label>
                                    </div>
                                    <div>
                                        <p className='border-b-2 border-slate-300 font-medium'>Forgot Password</p>
                                    </div>
                                </div>
                                <button className='w-full py-[16px] text-white bg-[#FF6A1A] rounded-[8px]'>Login</button>
                            </form>
                            <div className='flex items-center mt-[24px]'>
                                <img src={line} alt="" />
                                <p>Or</p>
                                <img src={line} alt="" />
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