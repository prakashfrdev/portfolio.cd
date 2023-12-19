import React from "react";
import "./style.css";
import Aos from "aos";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Htmllogo from "../../assets/html.png";
import Csslogo from "../../assets/css.png";
import Javascriptlogo from "../../assets/javascript.png";
import Reactlogo from "../../assets/react.png";
import gitlogo from "../../assets/git.png";
import Navbar from "../../Component/Nav-component/Navbar";
import Mobilecomp from "../../Component/Mobile-res/Mobilecomp";
const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="skill-container">
      <div className="about-header">
        <p>Suriyaprakash</p>
        <Navbar />
      </div>
      <Mobilecomp />
      <h3>Technical Skills:</h3>
      <div className="full-logo" data-aos="fade-down">
        <div className="logos-container">
          <img className="html-img" src={Htmllogo}></img>
          <p className="logo-content">HTML</p>
        </div>
        <div className="logos-container">
          <img className="css-img" src={Csslogo}></img>
          <p className="logo-content">CSS</p>
        </div>
        <div className="logos-container">
          <img className="js-img" src={Javascriptlogo}></img>
          <p className="logo-content">JavaScript</p>
        </div>
        <div className="logos-container">
          <img className="react-img" src={Reactlogo}></img>
          <p className="logo-content">React</p>
        </div>
      </div>
      <div className="skill-second">
        <div className="skill-information">
          <p>
            <i class="fa-solid fa-chevron-right side-icon"></i>Creating
            Responsive Web Designs
          </p>
          <p>
            <i class="fa-solid fa-chevron-right side-icon"></i>Using Redux
            Toolkit
          </p>
          <p>
            <i class="fa-solid fa-chevron-right side-icon"></i>Good Problem
            Solving Skill
          </p>
          <p>
            <i class="fa-solid fa-chevron-right side-icon"></i>Using Javascript
            Libraries
          </p>
          <p>
            {/* <i class="fa-solid fa-chevron-right side-icon"></i>Github Link is Below */}
          </p>
        </div>
        <div className="logos-container">
          <img className="react-img" src={gitlogo}></img>
         <Link to='https://github.com/prakashfrdev' style={{textDecoration:'none'}}> <p className="logo-content">Git Link</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
