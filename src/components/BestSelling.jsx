import React from 'react'
import { sellingproducts } from '../data/sellingProducat'
import ProductCard from './ProductCard'
import Button from './Button'

const BestSelling = () => {
    return (
        <>
            <section className='best-selling-product'>
                <div className='container '>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <h3 className='inter selling-title'>Best Selling Products</h3>
                        </div>
                        <div>
                            <Button title="View All" />
                        </div>
                    </div>
                    <div className="row">
                        {
                            sellingproducts.map((product) => {
                                return (
                                    <div className='grid col-lg-3 col-md-6 col-12 mt-5'>
                                        <ProductCard key={product.id} product={product} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSelling
