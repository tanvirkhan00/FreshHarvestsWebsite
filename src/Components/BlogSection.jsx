import React from 'react';

// Image
import Image from "../assets/blog1.png"

const BlogSection = () => {
    return (
        <>

            <section>
                <div className="container px-[120px] mt-[120px]">
                    <div>
                        <div className='flex flex-col items-center justify-center text-center gap-[16px]'>
                            <h4 className='text-[20px] font-medium text-green-600 bg-green-500 bg-opacity-15 rounded-[8px] px-[12px] py-[4px] max-w-fit'>Our Blog</h4>
                            <h2 className='text-[48px] font-medium'>Fresh Harvest Blog</h2>
                            <p className='text-[14px] text-slate-700 w-[448px]'>Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default BlogSection;