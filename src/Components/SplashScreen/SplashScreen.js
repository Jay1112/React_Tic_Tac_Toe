import React from "react";
import './SplashScreen.css';
import logo from '../../assets/images/logo.png';

function SplashScreen(){
    return (
        <div className="splash-screen">
            <div className='logo-box zoom-in-out-box'>
                <img src={logo} alt="logo" className='logo'/>
            </div>
        </div> 
    );
}

export default SplashScreen;