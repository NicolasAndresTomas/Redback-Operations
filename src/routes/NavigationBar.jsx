import React from "react";
import {Outlet, Link, useNavigate} from "react-router-dom"
import '../styles/NavigationBar.css'
import logo from '../images/logo.png'

function NavigationBar()
{
    const navigate = useNavigate()
const handleSubmit = async(event) =>
{

    navigate('/signup');

}

    return <div>
    <div className="navbar">
        <div className="navbar-left-container">
            <img src={logo} alt="Logo" />
            <div className="navbar-left-contents">
                <Link classname='link' to='/'>Home</Link>
                <Link classname='link' to='/profile'>Profile</Link>
                <Link classname='link' to='/'>About Us</Link>
                <Link classname='link' to='/'>Contact Us</Link>
            </div>
        </div>
        <div className="navbar-right-contents">
                <Link classname='link' to='/login'>Login</Link>
                <button onClick={handleSubmit}>Get Started</button>
        </div>
    </div>
    <Outlet />
    </div>
}
export default NavigationBar