import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/Computer_Programmer1920X10180.jpg";
import React2 from "../assets/5651988.jpg";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I'm a react front-end Developer.
                I have created responsive secured
                websites.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>

                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutContent;