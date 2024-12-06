import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

// Image
import logo from "../assets/Logo.png"

// Icons
import { IoMdHeart } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {

    const [menuShow, setmenuShow] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setmenuShow(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <>

            <nav className='fixed w-full z-50 left-0  top-0 bg-white bg-opacity-90 border-b-2 border-blue-500'>
                <div className="container">
                    <div className='flex items-center justify-between h-[100px] px-[20px]'>
                        <div className=''>
                            <img className='w-[224px] h-[39px]' src={logo} alt="" />
                        </div>
                        <div className=''>
                            <ul className={`lg:flex lg:flex-row flex flex-col gap-y-3 gap-x-10  pl-[20px] pt-[20px] lg:pt-0 font-sans text-[#767676] text-[18px] font-medium lg:static fixed duration-[800ms]  ${menuShow == true ? "bg-[#262626] top-[0px] left-0 w-1/2 h-full py-2" : "top-[0px] left-[-250px] h-full"}`}
                            >
                                <li><Link to="/">Home</Link></li>
                                <li className="hover:text-[#749B3F] transition">Shop</li>
                                <li className="hover:text-[#749B3F] transition">About Us</li>
                                <li className="hover:text-[#749B3F] transition">Blog</li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-[16px]'>
                            <div className='items-center gap-[8px] hidden lg:flex'>
                                <span className='h-[24px] w-[24px] flex items-center justify-center '><IoMdHeart /></span>
                                <p>Favorites</p>
                            </div>
                            <div className='flex items-center gap-[8px] relative'>
                                <span className='h-[24px] w-[24px] flex items-center justify-center'><FaShoppingCart /></span>
                                <p>Cart</p>
                                <span className='w-[16px] h-[16px] bg-[#EE4536] border-[2px] border-[#749B3F] rounded-[8px] absolute top-[-7px] text-[12px] flex items-center text-[#fff] justify-center left-[10px]'>3</span>
                            </div>
                            <button className='border-[1px] border-black rounded-[4px] py-[12px] px-[24px] text-[14px] font-semibold hidden lg:block'>
                                <Link to="/signIn">Sign in</Link>
                            </button>
                        </div>
                        <div className='lg:hidden' ref={menuRef} >
                            <span onClick={() => setmenuShow((prev) => !prev)} ><IoIosMenu /></span>
                        </div>
                    </div>
                </div>
            </nav >

        </>
    );
};

export default Navbar;