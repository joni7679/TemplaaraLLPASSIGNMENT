import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import heroImg from "../assets/hero.webp"
import appleLogo from "../assets/apple-logo.webp"
const HeroSlider = () => {
  return (
    <>
      <section className='col-lg-9 col-md-8 hero-slider-container'>

        <div className='hero-slide'>
          <div className="row px-5 py-4 align-items-center h-100">
            <div className='hero-des col-md-6 d-flex align-items-start  justify-content-start flex-column gap-3'>
              <div className="d-flex align-items-center gap-3">
                <img src={appleLogo} alt="applelogo" />
                <span className='hero-brand-name'>iPhone 14 Series</span>
              </div>
              <div className='hero-heading'>
                <h1>Up to 10% off Voucher</h1>
              </div>
              <a href="#" className='shop-now-btn'>shop now  <i className="bi bi-arrow-right"></i></a>

            </div>
            <div className='hero-img-container col-md-6'>
              <img src={heroImg} className='hero-img' alt="heroimg" />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSlider
