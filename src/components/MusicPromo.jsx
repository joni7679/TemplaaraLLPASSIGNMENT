import React from 'react'
import music from "../assets/music.png"
const MusicPromo = () => {
    return (
        <>
            <section className='promo-section mt-5'>
                <div className="container ">
                    <div className="categories-card d-flex align-items-center justify-content-between">
                        <div>
                            <span className='categories-promo-label'>
                                Categories
                            </span>
                            <h3 className='music-promo-title '>Enhance Your <br /> Music Experience</h3>
                            <div className='music-countdown mt-3'>
                                <div className='music-countdown-circle '>
                                    <span>23</span>
                                    <span>Hours</span>
                                </div>
                                <div className='music-countdown-circle '>
                                    <span>05</span>
                                    <span>Days</span>
                                </div>
                                <div className='music-countdown-circle '>
                                    <span>59</span>
                                    <span>Minutes</span>
                                </div>
                                <div className='music-countdown-circle '>
                                    <span>35</span>
                                    <span>Seconds</span>
                                </div>
                            </div>
                            <button className='buy-now-btn'>Buy now!</button>
                        </div>
                        <div className="music-image-container">
                            <img src={music} className='music-image' alt="music" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MusicPromo
