import React from 'react';

// Image 
import Image from "../assets/testimonial.png"

const Testimonial = () => {
    return (
        <>

            <section>
                <div className="container mt-[150px] px-[213px]">
                    <div>
                        <div className='flex flex-col items-center justify-center text-center gap-[16px]'>
                            <h3 className='text-[20px] font-medium text-green-600 bg-green-500 bg-opacity-15 rounded-[8px] px-[12px] py-[4px] max-w-fit'>Testimonial</h3>
                            <h2 className='font-medium text-[48px]'>What Our Customars Say</h2>
                            <p className='text-[14px] w-[448px]'>Don't just take our word for it — here's what some of our customars have to say about theis experience with Fresh Harvest</p>
                        </div>
                        <div className='mt-[16px]'>
                            <div className='flex items-center justify-between gap-[83px]'>
                                <img src={Image} alt="" />
                                <div className='bg-slate-200 p-[32px] flex flex-col gap-[32px] rounded-[24px]'>
                                    <p>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                                    <p className='text-[18px] font-normal'><span className='font-semibold'>Jane Doe - </span> Professional chef</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Testimonial;