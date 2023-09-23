//import libaries
import React, { useState, useEffect } from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
    return (
        <div>
            <div className="about-us-section">
                <div className="about-us-left-column">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
                    Earum eius natus maxime, consectetur praesentium, aliquid <br />
                    incidunt amet sapiente corporis minus, quos neque eveniet <br />
                    suscipit enim? Dolores itaque aliquid assumenda architecto!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
                    Earum eius natus maxime, consectetur praesentium, aliquid <br />
                    incidunt amet sapiente corporis minus, quos neque eveniet <br />
                    suscipit enim? Dolores itaque aliquid assumenda architecto!</p>
                </div>
                <div className="about-us-right-column">
                    <h4>DEDICATION TO THE CUSTOMERS:</h4>
                    <p>Our mission is to provide high-quality products and services to our customers.</p>
                    <h4>EASE OF USE:</h4>
                    <p>Our mission is to provide high-quality products and services to our customers.</p>
                    <h4>RELIABLE:</h4>
                    <p>Our mission is to provide high-quality products and services to our customers.</p>
                </div>
            </div>
        </div>
     
    );
}

export default AboutUs;