import React from 'react';
import HomePage from './routes/HomePage.jsx';
import {Routes, Route} from 'react-router-dom'
import NavFooter from './NavFooter'
import Profile from './routes/Profile';
import Login from './routes/Login'
import Signup from './routes/Signup';
import AboutUs from './routes/AboutUs';
import OurTechnology from './routes/OurTechnology';
import ContactUs from './routes/ContactUs';
function App() {
  
  return (
  <div className="main-content">
    <div className="overview-wrapper">
      <Routes>
        <Route path='/' element={<NavFooter />}>
        <Route index element={<HomePage />}/>
        <Route path='login' element= {<Login />}/>
        <Route path='signup' element= {<Signup />}/>
        <Route path='profile' element= {<Profile />}/>
        <Route path='aboutus' element= {<AboutUs />}/>
        <Route path='ourtechnology' element= {<OurTechnology />}/>
        <Route path='contactus' element= {<ContactUs />}/>
        </Route>
      </Routes>
    </div>
  </div>
  );
}

export default App;


