import React from 'react';

// Image
import Image from "../assets/Image.png"
import Image2 from "../assets/Image1.png"
import Clip from "../assets/Clip.png"
import appStore from "../assets/appleStore.png"
import googlePlay from "../assets/googleplay.png"

const Hiro = () => {
    return (
        <>

            <section>
                <div className="container mt-[150px]">
                    <div className=''>
                        <div className='relative z-40 after:absolute after:w-[30%] after:h-full after:bg-green-500 after:top-0 after:right-0 after:-z-20'>
                            <div className='flex flex-col gap-[16px]'>
                                <p className='text-[#749B3F] text-[20px] font-medium tracking-[-0.4px] px-[12px] py-[4px]  rounded-[8px]'>Welcome to Fresh Harvest</p>
                                <h1 className='text-[48px] lg:text-[80px] font-medium lg:w-[660px]'>Fresh Fruits and Vegetables</h1>
                                <p className='w-[341px] lg:w-[448px] text-[#4A4A52] text-[12px] font-normal leading-[18px] tracking-[2%]'>At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
                                <button className='bg-[#FF6A1A] px-[32px] py-[16px] rounded-[8px] text-[18px] font-semibold tracking-[-0.36px] inline-flex max-w-fit mt-[16px] text-[#fff]'>Shop Now</button>
                            </div>
                            <div className='w-[191px] lg:w-[331px] h-[91px] lg:h-[157px] bg-[#EBEBEB] rounded-[12px] flex items-center lg:ml-[200px] ml-[30px] relative mt-[30px] lg:mt-0'>
                                <div className='hidden lg:block absolute left-[-80px] h-[38px] w-[56px] top-0'>
                                    <img src={Clip} alt="" />
                                </div>
                                <div className='pl-[11px] lg:pl-[20px]'>
                                    <h3 className='text-[#176D38] text-[14px] tracking-[-0.28px] font-medium'>Special Offer</h3>
                                    <h2 className='text-[#212337] text-[16px] lg:text-[28px] font-medium tracing-[-0.56px]'>Fresh Salad</h2>
                                    <h2 ><span className='text-[#176D38] font-medium tracking-[-0.32px]'>Up to</span> <span className='text-[#212337] text-[13px] lg:text-[24px] font-medium tracking-[-0,48px]'>70%</span> off</h2>
                                    <div className='flex items-center bg-[#176D38] rounded-[20px] lg:rounded-[35px] px-[7px] lg:px-[12px] py-[3px] lg:py-[6px] gap-[5px] font-semibold w-[118px]'>
                                        <h3 className='text-[7px] lg:text-[12px] text-[#fff]'>CODE:</h3>
                                        <span className='text-[7px] lg:text-[12px] text-yellow-500'>FRESH25</span>
                                    </div>
                                </div>
                                <div>
                                    <img src={Image} alt="" />
                                </div>
                            </div>
                            <div className='mt-[120px] pb-[50px]'>
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
                            <div className='absolute -z-10 lg:pr-[64px] bottom-0 right-0'>
                                <img src={Image2} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Hiro;