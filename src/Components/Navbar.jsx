import React from 'react';
import { Link } from 'react-router';

// Image
import logo from "../assets/Logo.png"

// Icons
import { IoMdHeart } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
    return (
        <>

            <nav>
                <div className="container">
                    <div className='flex items-center justify-between h-[100px]'>
                        <div className=''>
                            <img className='w-[224px] h-[39px]' src={logo} alt="" />
                        </div>
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-[64px] text-[14px]'>
                                <li><Link to="/">Home</Link></li>
                                <li>Shop</li>
                                <li>About Us</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-[16px] pr-[14px]'>
                            <div className='lg:flex items-center gap-[8px] hidden lg:block'>
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
                        <span className='lg:hidden'><IoIosMenu/></span>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;