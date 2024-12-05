import React from 'react';

// Image
import logo from "../assets/Logo.png";
import visa from "../assets/Visa.png";
import payple from "../assets/Paypal.png";
import Applepay from "../assets/ApplePay.png";

// Icons
import { FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
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
                <div className="container px-[120px] mt-[120px] bg-slate-200 pt-[64px] border-b-2 border-slate-300 pb-[32px]">
                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-between'>
                            <img className='w-[230px]' src={logo} alt="" />
                            <div>
                                <h2 className='text-[14px] text-slate-600'>Download App:</h2>
                                <div className='flex items-center gap-[19px] mt-2'>
                                    <div className='flex items-center bg-[#000] text-[#fff] rounded-[10px] gap-2 px-[20px]'>
                                        <span className='text-[25px]'><FaApple /></span>
                                        <div>
                                            <p className='text-[12px]'>Download on the </p>
                                            <p className='font-semibold'>App Store</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center bg-[#000] text-[#fff] rounded-[10px] gap-2 px-[20px]'>
                                        <span className='text-[25px]'><IoLogoGooglePlaystore /></span>
                                        <div>
                                            <p className='text-[12px]'>Get IT ON</p>
                                            <p className='font-semibold'>Google Play</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-medium text-[18px]'>Quick Links 1</h1>
                            <ul className='flex flex-col gap-[12px] text-[14px] text-slate-500 mt-[12px]'>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Detail Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-medium text-[18px]'>Quick Links 1</h1>
                            <ul className='flex flex-col gap-[12px] text-[14px] text-slate-500 mt-[12px]'>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Detail Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-medium text-[18px]'>Contact us</h1>
                            <div className='flex flex-col gap-[12px] text-[14px] text-slate-500 mt-[12px]'>
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
                                <div>
                                    <p className='font-medium text-slate-700'>Accpted Payment Methods: </p>
                                    <div className='flex items-center gap-[10px] mt-[12px]'>
                                        <img src={visa} alt="" />
                                        <img src={payple} alt="" />
                                        <img src={Applepay} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-[120px] bg-slate-200">
                    <div className='flex items-center justify-between py-[24px]'>
                        <p>© Copyright 2024, All Rights Reserved by Banana Studio</p>
                        <div>
                            <ul className='flex items-center gap-[20px]'>
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