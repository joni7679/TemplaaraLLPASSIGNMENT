import React from 'react';

export default function Navbar({ cartCount = 0, wishlistCount = 2 }) {
    return (
        <nav className="navbar  navbar-expand-lg navbar-custom sticky-top">
            <div className="container">
                <a className="navbar-brand navbar-brand-exclusive" href="#">Eco-Mart</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#signup">Sign Up</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                        <div className="search-container">
                            <input type="text" className="search-input" placeholder="What are you looking for?" aria-label="Search" />
                            <i className="bi bi-search  search-icon"></i>
                        </div>
                        <button className="nav-icon-btn" aria-label="Wishlist">
                            <i className="bi bi-heart"></i>
                            {wishlistCount > 0 && <span className="nav-icon-badge">{wishlistCount}</span>}
                        </button>
                        <button className="nav-icon-btn" aria-label="Cart">
                            <i className="bi bi-cart3"></i>
                            {cartCount > 0 && <span className="nav-icon-badge">{cartCount}</span>}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
