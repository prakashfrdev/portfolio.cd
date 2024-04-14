import React from "react";
import "./style.css";
import Aos from "aos";
import { useEffect } from "react";
import Navbar from "../../Component/Nav-component/Navbar";
import Formal from '../../assets/formalimg.png'
import Mobilecomp from "../../Component/Mobile-res/Mobilecomp";
const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="about-container">
      <div className="resa">
       <Mobilecomp/>
       </div>
      <div className="about-content">
        <div className="about-header" data-aos="fade-up">
          <p>Suriyaprakash</p>
        <Navbar/>
        </div>
        <div className="inner-about" data-aos="zoom-in"
           data-aos-duration="1000">
          <div className="about-heading">
          <h2>About</h2>
          <span className="liner"></span>
          <p className="inner-para"> LEARN MORE ABOUT ME </p>

          </div>
          <div className="bio-data">
          <img src={Formal} className="about-img"></img>
          <div className="bio-content">
            <h3>Frontend Developer & React Developer</h3>
            <div className="bio-container">
            <p className="bio-details"><i class="fa-solid fa-chevron-right side-icon"></i>Name :<span className="bio-detailcon">Suriyaprakash</span></p>
            <p className="bio-details"><i class="fa-solid fa-chevron-right side-icon"></i>DOB  :<span className="bio-detailcon">23/04/2002</span></p>
            <p className="bio-details"><i class="fa-solid fa-chevron-right side-icon"></i>Qualification :<span className="bio-detailcon">BSc CS</span></p>
            <p className="bio-details"><i class="fa-solid fa-chevron-right side-icon"></i>City :<span className="bio-detailcon">Chennai</span></p>
            <p className="bio-details"><i class="fa-solid fa-chevron-right side-icon"></i>Experience :<span className="bio-detailcon">Fresher</span></p>
            <p className="bio-details"><i class="fa-solid fa-chevron-right side-icon"></i>Phone :<span className="bio-detailcon">7812883429</span></p>
          </div>
          <p className="under-bio">My name is Suriyaprakash.I describe myself as a frontend developer .I am looking for a entry level frontend developer role. </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
