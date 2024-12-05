import React from 'react';

// Icons
import { FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Footer = () => {
    return (
        <>

            <footer>
                <div className="container">
                    <div>
                        <div>
                            <img src="" alt="" />
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
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;