//import libaries
import React, { useState } from 'react';
import '../styles/Home.css';
import {useNavigate} from "react-router-dom"


//import images
import image1 from '../images/gallery-image-1.jpg'
import image2 from '../images/gallery-image-2.jpg'
import image3 from '../images/gallery-image-3.jpg'


function HomePage() {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        image1,
        image2,
        image3,
        // Add more image URLs here
    ];

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
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
                    <button>About Us</button><button>Contact us</button>
                </div>
            </div>
            <div className="about-us-section">
                <div className="left-column">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
                    Earum eius natus maxime, consectetur praesentium, aliquid <br />
                    incidunt amet sapiente corporis minus, quos neque eveniet <br />
                    suscipit enim? Dolores itaque aliquid assumenda architecto!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
                    Earum eius natus maxime, consectetur praesentium, aliquid <br />
                    incidunt amet sapiente corporis minus, quos neque eveniet <br />
                    suscipit enim? Dolores itaque aliquid assumenda architecto!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
                    Earum eius natus maxime, consectetur praesentium, aliquid <br />
                    incidunt amet sapiente corporis minus, quos neque eveniet <br />
                    suscipit enim? Dolores itaque aliquid assumenda architecto!</p>
                </div>
                <div className="right-column">
                    <h4>DEDICATION TO THE CUSTOMERS</h4>
                    <p>Our mission is to provide high-quality products and services to our customers.</p>
                    <h4>EASE OF USE</h4>
                    <p>Our mission is to provide high-quality products and services to our customers.</p>
                    <h4>RELIABLE</h4>
                    <p>Our mission is to provide high-quality products and services to our customers.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;