import React from 'react'
import p1 from "../assets/producat.png"
import { products } from '../data/flashsalesProducat'
import ProductCard from './ProductCard'
import Button from './Button'

const FlashSalesProducat = () => {
    return (
        <>
            <section className='container mt-5 pt-5'>
                <div className='d-flex align-items-center gap-3'>
                    <div className='accentbar'></div>
                    <h2 className="section-label">Today's</h2>
                </div>
                <div className="d-flex justify-content-between align-items-end flex-wrap gap-4 mb-4">
                    <div className='mt-3'>
                        <h2 className='inter'>Flash Sales</h2>
                        <div></div>
                    </div>
                    <div className='d-flex gap-2'>
                        <button class="arrow-btn" aria-label="Scroll Left" fdprocessedid="zthycn">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <button class="arrow-btn" aria-label="Scroll Left" fdprocessedid="zthycn">
                            <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className='d-flex flex-nowrap overflow-x-auto gap-4 pb-3'>
                    {
                        products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product}/>
                            )
                        })
                    }
                </div>
                <div className='text-center mt-5'>
                    <Button title="View All Products"/>
                </div>
            </section>
        </>
    )
}

export default FlashSalesProducat
