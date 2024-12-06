import React from 'react';

// Image
import logo from "../assets/Logo.png";
import visa from "../assets/Visa.png";
import payple from "../assets/Paypal.png";
import Applepay from "../assets/ApplePay.png";
import appStore from "../assets/appleStore.png"
import googlePlay from "../assets/googleplay.png"

// Icons
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <>

            <footer>
                <div className="container mt-[120px] bg-slate-200 pt-[64px] border-b-2 border-slate-300 pb-[32px] px-[20px]">
                    <div className='w-full lg:hidden'>
                        <img className='w-[230px]' src={logo} alt="" />
                    </div>
                    <div className='flex flex-wrap lg:justify-between gap-x-2 gap-y-[24px] mt-[24px]'>
                        <div className='basis-[25%] lg:flex-col lg:justify-between lg:h-full hidden lg:block'>
                            <img className='w-[230px]' src={logo} alt="" />
                            <div className=''>
                                <h2 className='text-[14px] text-slate-600'>Download App:</h2>
                                <div className='flex items-center gap-[19px] mt-2'>
                                    <div>
                                        <img src={appStore} alt="" />
                                    </div>
                                    <div>
                                        <img src={googlePlay} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='basis-[20%]'>
                            <h1 className='font-medium text-[14px] lg:text-[18px]'>Quick Links 1</h1>
                            <ul className='flex flex-col gap-[12px] text-[14px] text-slate-500 mt-[12px]'>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Detail Blog</li>
                            </ul>
                        </div>
                        <div className='basis-[20%]'>
                            <h1 className='font-medium text-[14px] lg:text-[18px]'>Quick Links 2</h1>
                            <ul className='flex flex-col gap-[12px] text-[14px] text-slate-500 mt-[12px]'>
                                <li>Favourites</li>
                                <li>Cart</li>
                                <li>Sign in</li>
                                <li>Register</li>
                            </ul>
                        </div>
                        <div className='basis-[25%]'>
                            <h1 className='font-medium text-[14px] lg:text-[18px]'>Contact us</h1>
                            <div className='flex flex-col gap-[12px] text-[12px] lg:text-[14px] text-slate-500 mt-[12px]'>
                                <div className='flex items-center gap-[4px]'>
                                    <span className='text-green-500'><IoCallOutline /></span>
                                    <p>1234 5678 90</p>
                                </div>
                                <div className='flex items-center gap-[4px]'>
                                    <span className='text-green-500'><MdOutlineMail /></span>
                                    <p>Freshharvests@gmail.com</p>
                                </div>
                                <div className='flex items-center gap-[4px]'>
                                    <span className='text-green-500'><IoLocationOutline /></span>
                                    <p>Tanjung Sari Street, Pontianak, Indonesia</p>
                                </div>
                                <div className='hidden lg:block'>
                                    <p className='font-medium text-slate-700'>Accpted Payment Methods: </p>
                                    <div className='flex items-center gap-[10px] mt-[12px]'>
                                        <img src={visa} alt="" />
                                        <img src={payple} alt="" />
                                        <img src={Applepay} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='basis-[30%]'>
                            <div className='lg:hidden'>
                                <p className='font-medium text-slate-700'>Accpted Payment Methods: </p>
                                <div className='flex items-center gap-[10px] mt-[12px]'>
                                    <img src={visa} alt="" />
                                    <img src={payple} alt="" />
                                    <img src={Applepay} alt="" />
                                </div>
                            </div>
                            <div className='lg:hidden flex flex-col gap-4'>
                                <h2 className='text-[14px] text-slate-600'>Download App:</h2>
                                <div className='flex items-center gap-[19px] mt-2'>
                                    <div>
                                        <img src={appStore} alt="" />
                                    </div>
                                    <div>
                                        <img src={googlePlay} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container bg-slate-200 px-[20px]">
                    <div className='flex flex-col lg:flex-row gap-[20px] items-center justify-between py-[24px]'>
                        <p>© Copyright 2024, All Rights Reserved by Banana Studio</p>
                        <div className=''>
                            <ul className='flex items-center gap-[20px] '>
                                <li className='bg-black text-white w-[25px] h-[25px] rounded-full p-1 duration-500 ease-in-out hover:scale-105'><FaTwitter /></li>
                                <li className='bg-black text-white w-[25px] h-[25px] rounded-full p-1 duration-500 ease-in-out hover:scale-105'><FaFacebookF /></li>
                                <li className='bg-black text-white w-[25px] h-[25px] rounded-full p-1 duration-500 ease-in-out hover:scale-105'><FaInstagram /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;