import React from 'react';

// Image
import Image from "../assets/offer.png"

const SpecialOffer = () => {
    return (
        <>

            <section>
                <div className="container mt-[120px] ">
                    <div>
                        <div className='bg-slate-200 relative h-[640px] flex flex-col justify-center gap-[32px] pl-[120px] pr-[47px]'>
                            <h4 className='text-[20px] font-medium text-green-600 bg-green-500 bg-opacity-15 rounded-[8px] px-[12px] py-[4px] max-w-fit'>Special Offer</h4>
                            <h2 className='text-[80px] font-medium tracking-[-2%]'>Seasonal Fruits Bundle</h2>
                            <p className='text-[48px] font-medium'>Discount up to <span className='text-[#FF6A1A]'>80% OFF</span></p>
                            <div className='flex items-center gap-[24px]'>
                                <div className='bg-white w-[98px] h-[122px] rounded-[10px] shadow-md flex items-center justify-center flex-col'>
                                    <h4 className='text-[40px]'>03</h4>
                                    <h3 className='text-[18px]'>Days</h3>
                                </div>
                                <div className='bg-white w-[98px] h-[122px] rounded-[10px] shadow-md flex items-center justify-center flex-col'>
                                    <h4 className='text-[40px]'>18</h4>
                                    <h3 className='text-[18px]'>Hour</h3>
                                </div>
                                <div className='bg-white w-[98px] h-[122px] rounded-[10px] shadow-md flex items-center justify-center flex-col'>
                                    <h4 className='text-[40px]'>54</h4>
                                    <h3 className='text-[18px]'>Min</h3>
                                </div>
                                <div className='bg-white w-[98px] h-[122px] rounded-[10px] shadow-md flex items-center justify-center flex-col'>
                                    <h4 className='text-[40px]'>21</h4>
                                    <h3 className='text-[18px]'>Second</h3>
                                </div>
                            </div>
                            <div className='flex items-center bg-[#176D38] rounded-[35px] px-[31px] py-[15px] gap-[5px] font-semibold max-w-fit'>
                                <h3 className='text-[32px] text-[#fff]'>CODE:</h3>
                                <span className='text-[32px] text-yellow-500'>FRUIT28</span>
                            </div>
                            <div className='absolute  top-[200px] right-[47px]'>
                                <img src={Image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default SpecialOffer;