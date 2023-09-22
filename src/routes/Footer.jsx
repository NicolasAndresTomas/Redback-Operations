import React from "react";
import '../styles/Footer.css';
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import logo from '../images/logo.png'

function Footer(){
    return (
        <div>
            <div className="top-footer">
                <div className="column">
                    <img src={logo} alt="Logo" />
                    <p>We are a team based in Peterborough. we are confident that we will save you time and money.</p>
                </div>
                <div className="column">
                    <h3>SITE INFO</h3>
                    <Link classname='link' to='/'>Home</Link>
                    <br />
                    <Link classname='link' to='/profile'>Profile</Link>
                    <br />
                    <Link classname='link' to='/'>About Us</Link>
                    <br />
                    <Link classname='link' to='/'>Contact Us</Link>
                </div>
                <div className="column">
                    <h3>ADDRESS</h3>
                    <p>City of Melbourne, Victoria, Australia</p>
                </div>
                <div className="column">
                    <h3>CONTACT DETAILS</h3>
                    <p><strong>Office:</strong> +0 000 000 0000</p>
                    <p><strong>Mobile:</strong> +0 000 000 0000</p>
                    <p><strong>Email:</strong> example@example.com</p>
                </div>
            </div>

            <div className="bottom-footer">
                <div className="footer-left-container">
                    <div className="navbar-left-contents">
                        <p>© Copyright 2023 @ example.com. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="footer-right-contents">
                    <a href="https://www.facebook.com/DeakinUniversity"><FaFacebook className="icon"/></a>
                    <a href="https://www.instagram.com/deakinuniversity/"><FaInstagram className="icon"/></a>
                    <a href="https://twitter.com/deakin"><FaTwitter className="icon"/></a>
                </div>
            </div>
        </div>

    )
}
export default Footer