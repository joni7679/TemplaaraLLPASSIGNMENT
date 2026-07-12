import React from 'react'
import p1 from "../assets/producat.png"
const ProductCard = ({ product }) => {
    if (!product) return null;
    return (
        <>
            <div className='product-card'>
                <div className="product-image-container">
                    <img src={product.image} loading="lazy" alt="producat" />
                    <button className='add-to-cart-btn'>
                        Add To Cart
                    </button>
                </div>
                {product.discount
                    && <span className='product-badge-discount'>
                        {product.discount}
                    </span>}

                <div className='product-actions-top'>
                    <div className="icon">
                        <i class="bi bi-heart"></i>
                    </div>
                    <div className="icon">
                        <i class="bi bi-eye"></i>
                    </div>
                </div>
                <div className="product-info">
                    <h3 className='product-title'>{product.title}</h3>
                    <div className="product-price-container d-flex align-items-center gap-3">
                        <span className='product-price-current'>
                            ${product.price}
                        </span>
                        <span className='product-price-original'>
                            ${product.oldPrice}
                        </span>
                    </div>
                    <div className="product-rating d-flex gap-3">
                        <div className='starts'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="racting-count">
                            ({product.reviews})
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
