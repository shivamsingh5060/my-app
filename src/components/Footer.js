import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaYoutube } from "react-icons/fa";

const Footer = () => {

  const phoneNumber = '+91-7054489832';
  const emailAddress = 'shivamsinghking274204@gmail.com';

  const instagramLink = 'https://www.instagram.com/thetradex.in/';
  const youtubeLink = 'https://www.youtube.com/channel/UCRqbj0kKbNvbjmms3x5Z5Vw';
  const linkedinLink = 'https://www.linkedin.com/in/shivam-singh-588b57218';

  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{ color: '#FF0000', marginRight: '2rem', borderRadius: '50%' }} /> 
                
                 <div>
                    <p>Laxmipur, Deoria, Uttar Pradesh, India.</p>
                    
                 </div>
                </div>
                <div classname="phone"> 
                 <h4>
                    <FaPhone size={20} style={{ color: '#00FF00', marginRight: '2rem', borderRadius: '10px' }} /> 

                     <a href={`tel:${phoneNumber}`} style={{ color: '#fff', textDecoration: 'none' }}>
                         {phoneNumber} 
                     </a>
                  </h4>
                  

                </div>

                <div classname="email"> 
                 <h4>
                      <FaMailBulk size={20} style={{ color: '#FFA500', marginRight: '2rem', borderRadius: '50%' }} />
                          <a href={`mailto:${emailAddress}`} style={{ color: '#fff', textDecoration: 'none' }}>
                             {emailAddress} 
                     </a>
                    </h4>
                </div>
             </div>

            <div className="right">
                <h4>About the company </h4>
                <p>
                This is Shivam Singh, CO-Founder of thetradex.in, 
                I enjoy discussing new project and design challenges.
                </p>
                <div className="social">

                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                 <FaInstagram size={30} style={{ color: '#C13584', marginRight: '1rem', borderRadius: '50%' }} />
                  </a>

                  <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                 <FaYoutube size={30} style={{ color: '#FF0000', marginRight: '1rem', borderRadius: '50%' }} />
                  </a>

                  <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} style={{ color: '#0077B5', marginRight: '1rem', borderRadius: '50%' }} />
                  </a>

                </div>               
            </div>
        </div>
    </div>
  );
};
export default Footer;