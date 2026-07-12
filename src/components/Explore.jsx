import React from 'react'
import { ourproducts } from '../data/ourproducat'
import ProductCard from './ProductCard'

const Explore = () => {
    return (
        <>
            <section className='explore-section'>
                <div className="container">
                    <div>
                        <div></div>
                        <h2 className="section-label">Today's</h2>
                    </div>
                    <div className="d-flex justify-content-between align-items-end flex-wrap gap-4 mb-4">
                        <div>
                            <h2 className='inter'>Explore Our Products</h2>
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
                    <div className="row">
                        {ourproducts.map((product) => {
                            return (
                                <div className='col-lg-3 col-md-6 col-12'>
                                    <ProductCard key={product.id} product={product} />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Explore
