import React from 'react';
import qrcodeImg from "../assets/qr-code.png"
export default function Footer() {

    const support = [
        {
            adderss: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."
        },

    ]
    const accoutnMenu = [
        {
            id: 1,
            name: "My Account",
        },
        {
            id: 2,
            name: "Login / Register",
        },
        {
            id: 3,
            name: "Cart",
        },
        {
            id: 4,
            name: "Wishlist",
        },
        {
            id: 5,
            name: "Shop",
        },
    ]
    const quickMenu = [
        {
            id: 1,
            name: "Privacy Policy",
        },
        {
            id: 2,
            name: "Terms Of Use",
        },
        {
            id: 3,
            name: "FAQ",
        },
        {
            id: 4,
            name: "Contact",
        },

    ]
    const socialLinks = [
        {
            id: 1,
            name: "Facebook",
            icon: "bi bi-facebook",
            link: "#",
        },
        {
            id: 2,
            name: "Twitter",
            icon: "bi bi-twitter",
            link: "#",
        },
        {
            id: 3,
            name: "Instagram",
            icon: "bi bi-instagram",
            link: "#",
        },
        {
            id: 4,
            name: "Linkedin",
            icon: "bi bi-linkedin",
            link: "#",
        },
    ];

    return (
        <footer className="footer-section mt-5">

            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className='text-white'>Exclusive</h5>
                        <p className="mb-4">Subscribe</p>
                        <p className="small text-light mb-3">Get 10% off your first order</p>
                        <div className="subscribe-container">
                            <input type="email" className="subscribe-input" placeholder="Enter your email" aria-label="Subscribe Email" />
                            <button className="subscribe-btn" aria-label="Submit Email"><i className="bi bi-send"></i></button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className='text-white'>Support</h5>
                        <p className="small text-light mb-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p className="small text-light mb-2">exclusive@gmail.com</p>
                        <p className="small text-light">+88015-88888-9999</p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className='text-white'>Account</h5>
                        <ul className="small text-light d-flex align-items-start gap-3 flex-column ps-0 mt-2">
                            {
                                accoutnMenu.map((menu) => {
                                    const { id, name } = menu
                                    return (
                                        <li key={id}><a href="#" className='footer-link'>{name}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className='text-white'>Quick Link</h5>
                        <ul className="small text-light d-flex align-items-start gap-3 flex-column ps-0 mt-2">
                            {quickMenu.map((menu) => {
                                const { id, name } = menu
                                return (
                                    <li key={id} ><a href="#" className='footer-link'>{name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className='text-white'>Download App</h5>
                        <p className="small text-light mb-3">Save $3 with App New User Only</p>
                        <div className="qr-download-container mb-3 d-flex align-items-center gap-2">
                            <img src={qrcodeImg} className="qr-code-img" alt="QR Code Link to Mobile App" />
                            <div className="store-buttons  d-flex align-items-end gap-2 flex-column">
                                <a href="#" className="store-btn">
                                    <svg viewBox="0 0 135 40" style={{ height: '36px' }}>
                                        <rect width="135" height="40" rx="4" fill="#000" stroke="#fff" strokeWidth="0.5" />
                                        <path d="M10,8 L22,20 L10,32 Z" fill="#00F0FF" />
                                        <path d="M10,8 L25,14 L22,20 Z" fill="#FFC107" />
                                        <path d="M10,32 L25,26 L22,20 Z" fill="#FF5722" />
                                        <path d="M22,20 L25,14 L30,20 L25,26 Z" fill="#4CAF50" />
                                        <text x="38" y="18" fill="#fff" fontSize="8" fontFamily="Arial">GET IT ON</text>
                                        <text x="38" y="30" fill="#fff" fontSize="12" fontFamily="Arial" fontWeight="bold">Google Play</text>
                                    </svg>
                                </a>
                                <a href="#" className="store-btn mt-2">
                                    <svg viewBox="0 0 135 40" style={{ height: '36px' }}>
                                        <rect width="135" height="40" rx="4" fill="#000" stroke="#fff" strokeWidth="0.5" />
                                        <path d="M18,12 C18,9.5 20,8 20,8 C20,8 18.5,8 17.5,9 C16.5,10 16,11.5 16,12.5 C16,12.5 17.5,12.5 18,12 Z M23,28 C22,29.5 20,31.5 18,31.5 C16,31.5 15.5,30 14,30 C12.5,30 12,31.5 10,31.5 C8,31.5 6,29.5 5,28 C3,24 3,18 5.5,15 C7,13.5 9,12 11,12 C13,12 14,13 15,13 C16,13 17,12 19,12 C21,12 23,13 24,15 C19.5,17 20,23.5 24,25 C23,27 23.5,27.5 23,28 Z" fill="#fff" />
                                        <text x="38" y="18" fill="#fff" fontSize="7" fontFamily="Arial">Download on the</text>
                                        <text x="38" y="30" fill="#fff" fontSize="12" fontFamily="Arial" fontWeight="bold">App Store</text>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="social-links d-flex align-items-center gap-4">
                            {
                                socialLinks.map((link) => {
                                    const { id, icon, name } = link
                                    return (
                                        <a key={id} href="#" aria-label={name}><i className={icon}></i></a>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                <div className="copyright-text text-center p-2">
                    <p>&copy; Copyright test 2026. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
