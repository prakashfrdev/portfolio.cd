import React from "react";
import "./style.css";
import Mobilecomp from "../../Component/Mobile-res/Mobilecomp";
import Navbar from "../../Component/Nav-component/Navbar";
import  Aos  from "aos";
import { useEffect } from "react";

let dlUrl='https://drive.google.com/file/d/16iOchReYtPGa3x-00t_kyadeK3hm2RRA/view?usp=drivesdk'
const Resume = () => {
  const downloadFunc=(url)=>{
       const aTag=document.createElement('a');
       aTag.href=url
       aTag.setAttribute('download','Resume')
       document.body.appendChild(aTag);
       aTag.click();
       aTag.remove();
  }
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="resume-container">
      <Mobilecomp/>
       <div className="about-header">
          <p>Suriyaprakash</p>
        <Navbar/>
        </div>
      <div className="center-res"data-aos="zoom-in-up">
        <div className="inner-resume">
          <p className="resume-name">
            <span className="res-name">Suriya</span> Prakash
          </p>
          <div className="down-opt">
          <p className="res-role">Frontend developer</p>
          <button className="download-resume" onClick={()=>downloadFunc(dlUrl)}>Download Resume <i class="fa-solid fa-arrow-down"></i></button>
          </div>
          <span className="resume-line"></span>
          <div className="education-resume">
            <h3>EDUCATION :</h3>
            <div className="educ-name">
              <div className="">
                <p>BSC Computer Science</p>
                <p>percentage:71%</p>
                <p>Sri Krishnasamy Arts And Science College</p>
              </div>
              <div className="educ-content">
                <p>2019-2022</p>
              </div>
            </div>
            <div className="educ-name">
              <div className="">
                <p>HSC</p>
                <p>percentage:46%</p>
                <p>SHN Edward Hr Sec School,Sattur,626203</p>
              </div>
              <div className="educ-content">
                <p>2018-2019</p>
              </div>
            </div>
            <div className="educ-name">
              <div className="">
                <p>SSLC</p>
                <p>percentage:57%</p>
                <p>SHN Edward Hr Sec School,Sattur,626203</p>
              </div>
              <div className="educ-content">
                <p>2016-2017</p>
              </div>
            </div>
            <span className="resume-line"></span>
            <h3>Experience:</h3>
            <p className="course-data" style={{fontSize:'25px', fontWeight:'bolder'}}> Frontend developer intern :</p>
             <p className="course-data" style={{marginLeft:'30px', marginTop:'-10px'}}> I have completed 6-month internship in Inetz technologies vadapalani chennai.
              on December-2023 to May-2024</p>
                        
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Resume;
