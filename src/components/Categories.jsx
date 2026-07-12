import React, { useState, useRef } from 'react';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState('Camera');
    const scrollRef = useRef(null);

    const categories = [
        { name: 'Phones', icon: 'bi-phone' },
        { name: 'Computers', icon: 'bi-laptop' },
        { name: 'SmartWatch', icon: 'bi-watch' },
        { name: 'Camera', icon: 'bi-camera' },
        { name: 'HeadPhones', icon: 'bi-headphones' },
        { name: 'Gaming', icon: 'bi-controller' },
    ];

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    return (
        <section className="container mt-5">
            <div className="section-label">Categories</div>
            <div className="d-flex justify-content-between align-items-end mb-4">
                <h2 className="h1 fw-bold mb-0">Browse By Category</h2>
                <div className="d-flex gap-2">
                    <button
                        className="arrow-btn"
                        aria-label="Scroll Categories Left"
                        onClick={handleScrollLeft}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <button
                        className="arrow-btn"
                        aria-label="Scroll Categories Right"
                        onClick={handleScrollRight}
                    >
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="d-flex flex-nowrap overflow-x-auto gap-4 pb-3"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`category-block flex-shrink-0 ${activeCategory === cat.name ? 'active' : ''}`}
                        style={{ width: '170px' }}
                        onClick={() => setActiveCategory(cat.name)}
                    >
                        <i className={`bi ${cat.icon}`}></i>
                        <span>{cat.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
