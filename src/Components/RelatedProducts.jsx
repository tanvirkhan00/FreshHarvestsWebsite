import React from 'react';
import { Link } from 'react-router';

const RelatedProducts = ({ filterCategory }) => {




    return (
        <>


            <section>
                <div className="container mt-[100px] px-[20px]">
                    <div>
                        <div className='flex flex-col text-center gap-[16px] items-center justify-center'>
                            <h3 className='text-[20px] font-medium text-green-600 bg-green-500 bg-opacity-15 rounded-[8px] px-[12px] py-[4px] max-w-fit'>Our Products</h3>
                            <h2 className='text-[32px] lg:text-[48px] font-medium'>Related Products</h2>
                            <p className='text-[12px] lg:text-[14px] text-gray-500'>We pride ourselves on offering a wide variety of fresh and flavorful fruit's, vegetables and salad ingredients. </p>
                        </div>
                        <div className='flex flex-wrap gap-[24px] mt-[32px]'>
                            {filterCategory.map((item) => (
                                <div className='basis-[47%] lg:basis-[23%] pb-[20px] shadow-md rounded-[20px] flex flex-col items-center text-center'>
                                    <Link to={`/product/${item.id}`}><img className='h-[120px] w-[150px] mx-auto' src={item.images[0]} alt={item.productName} /></Link>
                                    <div className='flex flex-col gap-[4px]'>
                                        <h1 className='text-[18px] font-medium'>{item.productName}</h1>
                                        <h3>${item.price}/kg</h3>
                                        <div className='border-[1px] px-[20px] border-slate-400 rounded-[8px] py-[12px] duration-500 ease-in-out hover:bg-[#FF6A1A] hover:text-[#fff]'>
                                            <p>Add to cart</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default RelatedProducts;