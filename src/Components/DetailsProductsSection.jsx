import React, { useContext, useEffect } from 'react';
import { apiData } from './ContextApi';
import { useParams } from 'react-router';

const DetailsProductsSection = () => {
    const products = useContext(apiData)
    const { id } = useParams()

    if (!products || products.length === 0) {
        return <p className='text-center py-10'>Loading...</p>;
    }

    const product = products.find((item) => item.id);

    if (!product) {
        return <p className='text-center py-10'>Product not found!</p>;
    }

    


    return (
        <>
            <section>
                <div className="container">
                    <div className='flex items-center gap-[46px] flex-wrap'>
                        <div className='basis-[45%]'>
                            <img src={product.images[0]} alt="" />
                        </div>
                        <div className='basis-[45%]'>
                            <h4>{product.productName}</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailsProductsSection;