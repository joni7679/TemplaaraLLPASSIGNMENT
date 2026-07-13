import React from 'react'


const Card = ({data}) => {
    return (
        <>
            <div className='arrival-card'>
                <div className="arroval-img-container">
                    <img src={data.image} alt="" />
                </div>
                <div className="arrival-info">

                </div>

            </div>

        </>
    )
}

export default Card
