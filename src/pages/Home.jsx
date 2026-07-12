import React from 'react'
import TopHeader from '../components/TopHeader'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import Sidebar from '../components/Sidebar'
import FlashSalesProducat from '../components/FlashSalesProducat'
import Categories from '../components/Categories'
import BestSelling from '../components/BestSelling'
import Footer from '../components/Footer'
import MusicPromo from '../components/MusicPromo'
import Explore from '../components/Explore'

const Home = () => {
    return (
        <>
            <TopHeader />
            <Navbar />
            <section className='container hero-section '>
                <div className="row">
                    <Sidebar />
                    <HeroSlider />
                </div>
            </section>
            <FlashSalesProducat />
            <hr className="container my-5" style={{ opacity: 0.15 }} />
            <Categories />
            <hr className="container my-5" style={{ opacity: 0.15 }} />
            <BestSelling />
            <MusicPromo />
            <Explore />
            <Footer />

        </>
    )
}

export default Home
