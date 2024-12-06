import React from 'react';

// Image
import Image from "../assets/blog1.png";
import Image1 from "../assets/blog2.png";
import Image2 from "../assets/blog3.png";

// Icon
import { FaArrowRight } from "react-icons/fa6";


const BlogSection = () => {
    return (
        <>

            <section>
                <div className="container mt-[120px]">
                    <div>
                        <div className='flex flex-col items-center justify-center text-center gap-[16px] px-[20px]'>
                            <h4 className='text-[20px] font-medium text-green-600 bg-green-500 bg-opacity-15 rounded-[8px] px-[12px] py-[4px] max-w-fit'>Our Blog</h4>
                            <h2 className='text-[32px] lg:text-[48px] font-medium'>Fresh Harvest Blog</h2>
                            <p className='text-[12px] lg:text-[14px] text-slate-700 lg:w-[448px]'>Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.</p>
                        </div>
                        <div className='flex gap-[24px] flex-wrap mt-[40px]'>
                            <div className='lg:basis-[31%] flex flex-col gap-[24px]'>
                                <img src={Image} alt="" />
                                <div className='flex flex-col gap-[8px]'>
                                    <h4 className='text-[18px] text-slate-600'>May 23, 2024</h4>
                                    <p className='text-[18px] font-medium'>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                                    <p className='text-[#FF6A1A] flex items-center gap-[12px] font-semibold text-[18px]'>Read More <span><FaArrowRight /></span></p>
                                </div>
                            </div>
                            <div className='lg:basis-[31%] flex flex-col gap-[24px]'>
                                <img src={Image1} alt="" />
                                <div className='flex flex-col gap-[8px]'>
                                    <h4 className='text-[18px] text-slate-600'>May 23, 2024</h4>
                                    <p className='text-[18px] font-medium'>Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"</p>
                                    <p className='text-[#FF6A1A] flex items-center gap-[12px] font-semibold text-[18px]'>Read More <span><FaArrowRight /></span></p>
                                </div>
                            </div>
                            <div className='lg:basis-[31%] flex flex-col gap-[24px]'>
                                <img src={Image2} alt="" />
                                <div className='flex flex-col gap-[8px]'>
                                    <h4 className='text-[18px] text-slate-600'>May 23, 2024</h4>
                                    <p className='text-[18px] font-medium'>The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</p>
                                    <p className='text-[#FF6A1A] flex items-center gap-[12px] font-semibold text-[18px]'>Read More <span><FaArrowRight /></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default BlogSection;