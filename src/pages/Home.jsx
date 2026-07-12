import React from 'react'
import TopHeader from '../components/TopHeader'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import Sidebar from '../components/Sidebar'

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

        </>
    )
}

export default Home
