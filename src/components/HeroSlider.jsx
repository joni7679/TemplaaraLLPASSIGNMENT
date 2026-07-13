import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import heroImg from "../assets/hero.webp"
import appleLogo from "../assets/apple-logo.webp"
const HeroSlider = () => {
  return (
    <>
      <section className='col-lg-9 col-md-8 hero-slider-container'>

        <div id="heroCarousel" className="carousel slide h-100" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>

          </div>
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <div className='hero-slide h-100' >
                <div className="row px-5 py-4 align-items-center h-100">
                  <div className='hero-des col-md-6 d-flex align-items-start justify-content-center flex-column gap-3'>
                    <div className="d-flex align-items-center gap-3">
                      <img src={appleLogo} alt="applelogo" />
                      <span className='hero-brand-name'>
                        iPhone 14 Series
                      </span>
                    </div>
                    <div className='hero-heading'>
                      <h1>Up to 10% off Voucher</h1>
                    </div>
                    <a href="#" className='shop-now-btn'>
                      Shop Now <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                  <div className='hero-img-container col-md-6'>
                    <img src={heroImg} className='hero-img' alt="heroimg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item h-100">
              <div className='hero-slide h-100'>
                <div className="row px-5 py-4 align-items-center h-100">
                  <div className='hero-des col-md-6 d-flex align-items-start justify-content-center flex-column gap-3'>
                    <div className="d-flex align-items-center gap-3">
                      <span className='hero-brand-name'>
                        PlayStation 5
                      </span>
                    </div>
                    <div className='hero-heading'>
                      <h1>Gaming Experience Like Never Before</h1>
                    </div>
                    <a href="#" className='shop-now-btn'>
                      Shop Now <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                  <div className='hero-img-container col-md-6'>
                    <img src={heroImg} className='hero-img' alt="ps5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item h-100">
              <div className='hero-slide h-100'>
                <div className="row px-5 py-4 align-items-center h-100">
                  <div className='hero-des col-md-6 d-flex align-items-start justify-content-center flex-column gap-3'>
                    <div className="d-flex align-items-center gap-3">
                      <span className='hero-brand-name'>
                        PlayStation 5
                      </span>
                    </div>
                    <div className='hero-heading'>
                      <h1>Gaming Experience Like Never Before</h1>
                    </div>
                    <a href="#" className='shop-now-btn'>
                      Shop Now <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                  <div className='hero-img-container col-md-6'>
                    <img src={heroImg} className='hero-img' alt="ps5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item h-100">
              <div className='hero-slide h-100'>
                <div className="row px-5 py-4 align-items-center h-100">
                  <div className='hero-des col-md-6 d-flex align-items-start justify-content-center flex-column gap-3'>
                    <div className="d-flex align-items-center gap-3">
                      <span className='hero-brand-name'>
                        PlayStation 5
                      </span>
                    </div>
                    <div className='hero-heading'>
                      <h1>Gaming Experience Like Never Before</h1>
                    </div>
                    <a href="#" className='shop-now-btn'>
                      Shop Now <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                  <div className='hero-img-container col-md-6'>
                    <img src={heroImg} className='hero-img' alt="ps5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSlider
