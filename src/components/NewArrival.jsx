import React from 'react'
import SectionHeader from './SectionHeader'
import { newarrival } from '../data/newarrival'
import FeatureGrid from './FeatureGrid'

const NewArrival = () => {
    return (
        <>
            <section className='new-arrival-section'>
                <div className="container">
                    <SectionHeader tag="Featured" title="New Arrival" showArrow={false} />
                    <FeatureGrid />
                </div>

            </section>
        </>
    )
}

export default NewArrival
