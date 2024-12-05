import React from 'react';

// Image
import Image from "../assets/Image.png"
import Image2 from "../assets/Image1.png"
import Clip from "../assets/Clip.png"

// Icons
import { FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Hiro = () => {
    return (
        <>

            <section>
                <div className="container">
                    <div className='flex items-center'>
                        <div className='pl-[225px]'>
                            <div className='flex flex-col gap-[16px]'>
                                <p className='text-[#749B3F] text-[20px] font-medium tracking-[-0.4px] bg-[rgba(116, 155, 63, 0.10)] px-[12px] py-[4px]  rounded-[8px]'>Welcome to Fresh Harvest</p>
                                <h1 className='text-[80px] font-medium tracking-[-1.6px] w-[660px]'>Fresh Fruits and Vegetables</h1>
                                <p className='w-[448px] text-[#4A4A52] text-[14px] font-normal leading-[24px] tracking-[-0.24px]'>At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
                                <button className='bg-[#FF6A1A] px-[32px] py-[16px] rounded-[8px] text-[18px] font-semibold tracking-[-0.36px] inline-flex max-w-fit mt-[16px] text-[#fff]'>Shop Now</button>
                            </div>
                            <div className='w-[331px] h-[157px] bg-[#EBEBEB] rounded-[12px] flex items-center ml-[200px] relative'>
                                <div className='absolute left-[-80px] h-[38px] w-[56px] top-0'>
                                    <img src={Clip} alt="" />
                                </div>
                                <div className='pl-[20px]'>
                                    <h3 className='text-[#176D38] text-[14px] tracking-[-0.28px] font-medium'>Special Offer</h3>
                                    <h2 className='text-[#212337] text-[28px] font-medium tracing-[-0.56px]'>Fresh Salad</h2>
                                    <h2 ><span className='text-[#176D38] font-medium tracking-[-0.32px]'>Up to</span> <span className='text-[#212337] text-[24px] font-medium tracking-[-0,48px]'>70%</span> off</h2>
                                    <div className='flex items-center bg-[#176D38] rounded-[35px] px-[12px] py-[6px] gap-[5px] font-semibold w-[118px]'>
                                        <h3 className='text-[12px] text-[#fff]'>CODE:</h3>
                                        <span className='text-[12px] text-yellow-500'>FRESH25</span>
                                    </div>
                                </div>
                                <div>
                                    <img src={Image} alt="" />
                                </div>
                            </div>
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
                        <div className='pr-[64px]'>
                            <img src={Image2} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Hiro;