import React, { useContext } from 'react';
import { apiData } from './ContextApi';
import { Link } from 'react-router';

const RelatedProducts = ({ filterCategory }) => {




    return (
        <>


            <section>
                <div className="container px-[120px] mt-[100px]">
                    <div>
                        <div className='flex flex-col text-center gap-[16px] items-center justify-center'>
                            <h3 className='text-[20px] font-medium text-green-600 bg-green-500 bg-opacity-15 rounded-[8px] px-[12px] py-[4px] max-w-fit'>Our Products</h3>
                            <h2 className='text-[48px] font-medium'>Related Products</h2>
                            <p className='text-[14px] text-gray-500'>We pride ourselves on offering a wide variety of fresh and flavorful fruit's, vegetables and salad ingredients. </p>
                        </div>
                        <div className='flex flex-wrap gap-[24px] mt-[32px]'>
                            {filterCategory.map((item) => (
                                <Link to={`/product/${item.id}`}>
                                    <div className='w-[282px] shadow-sm shadow-black h-[360px] rounded-[20px] flex flex-col items-center text-center'>
                                        <img src={item.images} alt={item.productName} />
                                        <div className='flex flex-col gap-[12px]'>
                                            <h1 className='text-[18px] font-medium'>{item.productName}</h1>
                                            <h3>${item.price}/kg</h3>
                                            <button className='border-[1px] border-slate-400 rounded-[8px] duration-500 ease-in-out hover:bg-[#FF6A1A] hover:text-[#fff]'>Add to cart</button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default RelatedProducts;