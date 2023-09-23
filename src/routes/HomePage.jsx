//import libaries
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import {useNavigate, Link} from "react-router-dom"

//import images
import image1 from '../images/gallery-image-1.jpg'
import image2 from '../images/gallery-image-2.jpg'
import image3 from '../images/gallery-image-3.jpg'


function HomePage() {
    const navigate = useNavigate();

    const handleAboutUsClick = () => {
        navigate('/aboutus');
    };
    
    const handleContactUsClick = () => {
        navigate('/contactus');
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        image1,
        image2,
        image3,
    ];

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div>
            <div className="header-container">
                <div className="image-gallery">
                    <div className="gallery-overlay"></div> 
                    <img
                        src={images[currentImageIndex]}
                        alt={`Image ${currentImageIndex}`}
                        className="gallery-image"
                    />
                    <div className="gallery-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                    <div className="welcome-heading">
                        <h2>WELCOME TO OUR WEBSITE</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
                        Earum eius natus maxime, consectetur praesentium, aliquid <br />
                        incidunt amet sapiente corporis minus, quos neque eveniet <br />
                        suscipit enim? Dolores itaque aliquid assumenda architecto!</p>
                        <button onClick={handleAboutUsClick}>About Us</button><button onClick={handleContactUsClick}>Contact us</button>
                    </div>
                </div>
            </div>

            <div className="home-section">
                <div className="home-left-column">
                    <h1>ITS MORE THAN WHAT YOU EXPECT</h1>
                </div>
                <div className="home-right-column">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
                    suscipit enim!</p>
                    <h4><Link to="/signup">Get Started</Link></h4>
                </div>
            </div>
        </div>
    );
}

export default HomePage;