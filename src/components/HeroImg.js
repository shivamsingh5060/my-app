import "./HeroImgStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import IntroImg from "../assets/intro2.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI , I'M WEB DEVELOPER</p>
            <h1>REACT DEVELOPER</h1>
        
        <div>
            <Link to="/project" className="btn">PROJECT</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
        </div>
    </div>
  );
}

export default HeroImg;