//import libaries
import React from 'react';
import '../styles/ContactUs.css';
import Input from '../Input'
import GoogleMapReact from 'google-map-react';

function HomePage() {
    const YOUR_LATITUDE = 40.7128;
    const YOUR_LONGITUDE = -74.0060;

    return (
        <div>
            <div className="contact-us-section">
                <div className="contact-us-right-column">
                    <h2>Contact Us</h2>
                    <div className="form-component"> 
                        <div className="form-section">
                            <Input 
                                name= 'name'
                                type= 'text'
                                placeholder ='Name'
                            />
                        </div>
                        <div className="form-section">
                            <Input 
                                name= 'email'
                                type= 'email'
                                placeholder ='Email'
                            />
                        </div>
                        <div className="form-section">
                            <Input 
                                name= 'message'
                                type= 'text'
                                placeholder ='Message'
                            />
                        </div>
                        <button>Send Message</button>
                    </div>
                </div>
                <div className="contact-us-left-column">
                    <p><strong>Office:</strong> +0 000 000 0000</p>
                    <p><strong>Mobile:</strong> +0 000 000 0000</p>
                    <p><strong>Email:</strong> example@example.com</p>
                    <p><strong>Address:</strong> City of Melbourne, Victoria, Australia</p>
                </div>
                <div className="contact-us-right-column">
                    <div className="google-map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDB1uTT0-eW7JLa-fpDSEoG6bOp-QXKVsA' }}
                            defaultCenter={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }}
                            defaultZoom={15}
                        >
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
     
    );
}

export default HomePage;