import React from "react";
import "./style.css";
import Aos from "aos";
import { useEffect } from "react";
import Navbar from "../../Component/Nav-component/Navbar";
import { Link } from "react-router-dom";
import Mobilecomp from "../../Component/Mobile-res/Mobilecomp";
const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="contact-container">
      <div className="about-header">
        <p>Suriyaprakash</p>
        <Navbar />
      </div>
      <div className="contact-inner" data-aos="zoom-in-up">
      <Mobilecomp/>
        <div className="contact-heading">
          <h2>Contact</h2>
          <span className="liner"></span>
        </div>
        <p className="inner-para">Contact Me</p>
        <div className="all-icons">
          <div className="social-icons">
            <i class="fa-solid fa-magnifying-glass fa-3x"></i>
            <div className="inner-social">
              <p>Social Profiles:</p>
              <Link to="https://www.linkedin.com/in/suriya-prakash-62217728a/">
                <i class="fa-brands fa-linkedin contact-icons linkedin fa-2x"></i>
              </Link>
              <Link to="https://www.instagram.com/prakash_sp23/?next=%2F&hl=en">
                <i class="fa-brands fa-instagram contact-icons insta fa-2x"></i>
              </Link>
            </div>
          </div>
          <div className="location-icons">
            <i class="fa-solid fa-location-dot  fa-3x"> </i>
            <div className="inner-location">
              <p> Location:</p>
              <h4>Vadapalani,Chennai-126.</h4>
            </div>
          </div>
        </div>
        <div className="sec-icons">
          <div className="mail-icons">
            <i class="fa-solid fa-envelope fa-3x"></i>
            <div className="inner-mail">
              <p> Email:</p>
              <h4>suriyaprakash232002@gmail.com</h4>
            </div>
          </div>
          <div className="phone-icons">
            <i class="fa-solid fa-phone fa-3x"></i>
            <div className="inner-phone">
              <p> Phone No:</p>
              <h4>7812883429</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
