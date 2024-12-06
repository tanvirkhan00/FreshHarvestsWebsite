import React, { useContext, useEffect, useState } from 'react';
import { apiData } from './ContextApi';
import axios from 'axios';
import { Link } from 'react-router';

const ProductsHome = () => {
    const Products = useContext(apiData)

    const [categories, setCategories] = useState([]);
    const [categoryItem, setcategoryItem] = useState([]);

    useEffect(() => {
        axios.get("https://api-fresh-harvest.code-commando.com/api/v1/category")
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    // Category
    let handleCategory = (itemId) => {
        let filterCategory = Products.filter((item) => item.categoryId == itemId.id)
        setcategoryItem(filterCategory)
    }





    return (
        <>

            <section>
                <div className="container mt-[150px]">
                    <div className='flex flex-col gap-[32px]'>
                        <div className='flex flex-col text-center gap-[16px] items-center justify-center'>
                            <h3 className='text-[20px] font-medium text-green-600 bg-green-500 bg-opacity-15 rounded-[8px] px-[12px] py-[4px] max-w-fit'>Our Products</h3>
                            <h2 className='text-[32px] lg:text-[48px] font-medium'>Our Fresh Products</h2>
                            <p className='text-[14px] text-gray-500 px-[10px] lg:px-0'>We pride ourselves on offering a wide variety of fresh and flavorful fruit's, vegetables and salad ingredients. </p>
                        </div>
                        <div className=''>
                            <ul className='flex items-center gap-[12px] lg:gap-[24px] justify-center'>
                                <li onClick={() => location.reload()} className='border-2 border-slate-300 rounded-[8px] px-[12px] lg:px-[24px] py-[6px] lg:py-[12px] text-slate-400 duration-500 cursor-pointer ease-in-out hover:text-white hover:bg-green-500'>All</li>
                                {categories.map((category) => (
                                    <li onClick={() => handleCategory(category)} className='border-2 border-slate-300 rounded-[8px] px-[12px] lg:px-[24px] py-[6px] lg:py-[12px] text-slate-400 duration-500 cursor-pointer ease-in-out hover:text-white hover:bg-green-500'>{category.
                                        categoryName
                                    }</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {categoryItem.length > 0 ?
                                <div className='flex flex-wrap gap-[24px]'>
                                    {categoryItem.map((item) => (
                                        <div className='basis-[47%] lg:basis-[23%] pb-[20px] shadow-md rounded-[20px] flex flex-col items-center text-center'>
                                            <Link to={`/product/${item.id}`}><img className='h-[120px] w-[150px] mx-auto' src={item.images[0]} alt={item.productName} /></Link>
                                            <div className='flex flex-col gap-[4px]'>
                                                <h1 className='text-[18px] font-medium'>{item.productName}</h1>
                                                <h3>${item.price}/kg</h3>
                                                <button className='border-[1px] border-slate-400 rounded-[8px] py-[12px] px-[50px] duration-500 ease-in-out hover:bg-[#FF6A1A] hover:text-[#fff]'>Add to cart</button>
                                            </div>
                                        </div>
                                    ))}
                                </div> :
                                <div className='flex flex-wrap gap-[24px]'>
                                    {Products.map((item) => (
                                        <div className='basis-[47%] lg:basis-[23%] pb-[20px] shadow-md rounded-[20px] flex flex-col items-center text-center'>
                                            <Link to={`/product/${item.id}`}><img className='h-[120px] w-[150px] mx-auto' src={item.images[0]} alt={item.productName} /></Link>
                                            <div className='flex flex-col gap-[4px]'>
                                                <h1 className='text-[18px] font-medium'>{item.productName}</h1>
                                                <h3>${item.price}/kg</h3>
                                                <button className='border-[1px] border-slate-400 rounded-[8px] py-[12px] px-[50px] duration-500 ease-in-out hover:bg-[#FF6A1A] hover:text-[#fff]'>Add to cart</button>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            }
                        </div>
                        <button className='border-2 border-[#FF6A1A] rounded-[8px] py-[16px] px-[32px] text-[#FF6A1A] text-[18px] font-semibold max-w-fit mx-auto mt-[32px]'>See All Products</button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ProductsHome;