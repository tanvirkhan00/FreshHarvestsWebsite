import React, { useContext, useEffect, useState } from 'react';
import RelatedProducts from './RelatedProducts';
// Tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { apiData } from './ContextApi';
import { useParams } from 'react-router';
import axios from 'axios';

// Icon
import { FaStar } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";




const DetailsProductsSection = () => {
    const products = useContext(apiData)
    const { id } = useParams()
    const [categories, setCategories] = useState([])




    // CategoryName
    useEffect(() => {
        axios.get("https://api-fresh-harvest.code-commando.com/api/v1/category")
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);
    
    const product = products.find((item) => item.id === id);
    console.log(product);

    let filterCategory = products.filter((item) => item.categoryId == product.categoryId)

    let filtercategoryName = categories.filter((categoryName) => categoryName.id == product.categoryId)

    if (!products || products.length === 0) {
        return <p className='text-center py-10'>Loading...</p>;
    }

    if (!product) {
        return <p className='text-center py-10'>Product not found!</p>;
    }

    useEffect(() => {
        window.scrollTo({
            top:0
        })
    },[])






    return (
        <>
            <section>
                <div className="container px-[20px] mt-[150px]">
                    <div className='flex items-center flex-col lg:flex-row gap-[30px]'>
                        <div className='lg:basis-[45%] flex items-center justify-center'>
                            <img className='' src={product.images} alt="" />
                        </div>
                        <div className='lg:basis-[45%] flex flex-col gap-[16px]'>
                            {filtercategoryName.map((item) => (
                                <p className='font-semibold bg-green-400 text-green-700 max-w-fit px-2 bg-opacity-30 capitalize rounded-[10px] text-[20px]'>{item.categoryName}</p>
                            ))}
                            <p className='text-[48px] font-medium'>{product.productName}</p>
                            <div className='flex items-center gap-[10px]'>
                                <span className='text-yellow-500'><FaStar /></span>
                                <span className='text-yellow-500'><FaStar /></span>
                                <span className='text-yellow-500'><FaStar /></span>
                                <span className='text-yellow-500'><FaStar /></span>
                                <span className='text-yellow-500'><FaStar /></span>
                                <p className='font-medium text-[18px]'>5.0 (1 review)</p>
                            </div>
                            <p className='text-[#EE4536] text-[32px]'>${product.price}/kg</p>
                            <p className='text-slate-500'>{product.description}</p>
                            <div className='flex items-center gap-[16px]'>
                                <p className='font-medium text-[18px]'>Quality</p>
                                <div className='flex items-center gap-4 border-2 border-slate-300 px-1 py-1'>
                                    <span><FiMinus /></span>
                                    <input className='outline-none w-[20px]' type="number" placeholder='1' />
                                    <span><FiPlus /></span>
                                </div>
                            </div>
                            <div className='flex flex-wrap items-center  mt-[24px] gap-3'>
                                <button className='px-[32px] py-[16px] flex items-center justify-center text-[18px] font-semibold gap-[10px] bg-slate-400 duration-300 ease-in-out hover:bg-[#EE4536] hover:text-white rounded-[8px] '>
                                    <span><CiHeart /></span>
                                    <p>Save as favourite</p>
                                </button>
                                <button className='px-[32px] py-[16px] flex items-center justify-center text-[18px] font-semibold gap-[10px] bg-slate-400 duration-300 ease-in-out hover:bg-[#EE4536] hover:text-white rounded-[8px] '>
                                    <span><IoCart /></span>
                                    <p>Add to cart</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[100px]'>
                        <Tabs className="flex flex-col gap-5">
                            <TabList className="flex items-center gap-4">
                                <Tab className="border-2 border-slate-200 px-[24px] py-[12px] rounded-[8px] duration-300 ease-in-out hover:bg-green-500">Description</Tab>
                                <Tab className="border-2 border-slate-200 px-[24px] py-[12px] rounded-[8px] duration-300 ease-in-out hover:bg-green-500">Reviews (1)</Tab>
                            </TabList>

                            <TabPanel>
                                <h2 className='bg-slate-200 py-[40px] px-[32px]'>{product.description}</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>
                                    <ul className='flex flex-col gap-2'>
                                        <li className='text-[16px] font-normal flex items-center gap-3'><span className='text-[20px] font-semibold'>Rating:</span>3</li>
                                        <li className='text-[16px] font-normal flex items-center gap-3'><span className='text-[20px] font-semibold'>Name:</span>Joyonti</li>
                                        <li className='text-[16px] font-normal flex items-center gap-3'><span className='text-[20px] font-semibold'>Gmail:</span>joyonti23@gmail.com</li>
                                        <li className='text-[16px] font-normal flex items-center gap-3'><span className='text-[20px] font-semibold'>Comments:</span>This food is soo testy</li>
                                    </ul>
                                </h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>

                <RelatedProducts filterCategory={filterCategory} />
            </section>
        </>
    );
};

export default DetailsProductsSection;