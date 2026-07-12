import React from 'react';

export default function TopHeader() {
    return (
        <div className="promo-ticker">
            <div className="container d-flex justify-content-between align-items-center flex-wrap">
                <div className="m-auto text-center d-flex gap-3">
                    <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <a href="#shop" className='shopnow-text'>ShopNow</a>
                </div>
                <div className="language-selector d-none d-md-block">
                    <select aria-label="language-option" defaultValue="en">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
