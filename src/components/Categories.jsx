import React, { useState, useRef } from 'react';
import SectionHeader from './SectionHeader';

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


            <SectionHeader tag="Categories" title="Browse By Category" />
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
