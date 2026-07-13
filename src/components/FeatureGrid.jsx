import React from "react";
import { newarrival } from "../data/newarrival";

const FeatureGrid = () => {

    const ps5 = newarrival.find(item => item.className === "big-card");
    const women = newarrival.find(item => item.className === "women-card");

    const smallCards = newarrival.filter(
        item => item.className === "small-card"
    );


    return (
        <div className="feature-grid">


            {/* Left Big Card */}

            <FeatureCard item={ps5} />



            {/* Right Section */}

            <div className="right-area">


                <FeatureCard item={women} />



                <div className="bottom-area">

                    {
                        smallCards.map(item => (
                            <FeatureCard
                                key={item.id}
                                item={item}
                            />
                        ))
                    }

                </div>


            </div>


        </div>
    )
}



const FeatureCard = ({ item }) => {

    return (

        <div
            className={`feature-card ${item.className}`}
        >


            <div className="arrival-img-container">

                <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                />

            </div>


            <div className="overlay"></div>


            <div className="content">

                <h2>{item.title}</h2>

                <p>{item.desc}</p>


                <a href="#">
                    Shop Now
                </a>


            </div>


        </div>

    )

}


export default FeatureGrid;