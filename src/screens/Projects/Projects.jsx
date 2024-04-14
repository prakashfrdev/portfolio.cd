import React from "react";
import "./style.css";
import Navbar from "../../Component/Nav-component/Navbar";
import Mobilecomp from "../../Component/Mobile-res/Mobilecomp";
import Pomo from "../../assets/Screenshot_5-4-2024_113537_localhost.jpeg";
import Pos from "../../assets/Screenshot_5-4-2024_113128_localhost.jpeg";
import github from '../../assets/github-sign.png'
import weblink from '../../assets/log-out.png'
import Stumang from '../../assets/Screenshot_5-4-2024_113856_localhost.jpeg'
import colorFind from '../../assets/Screenshot_5-4-2024_11440_localhost.jpeg'
const Projects = () => {
  return (
    <div className="project-container">
      <Mobilecomp />

      <div className="project-header">
        <p>Suriyaprakash</p>
        <Navbar />
      </div>

      <div className="project-inner">
        <div className="contact-heading">
          <h2>Projects</h2>
          <span className="liner"></span>
        </div>
        <div className="inner-pro">
          <div class="card">
            <img src={Pomo} />
            <div class="card__content">
              <p class="card__title">Pomodoro timer</p>
              <p class="card__description">
                Integrated notification alerts to signal the end of work and
                break intervals. React JS for the frontend Redux for state
                management.
              </p>
              <p  class="card__description">
              individual preferences and work patterns.
              </p>
              <p class="card__description">
                Users could set their preferred work and break intervals,
                allowing for flexibility based on
              </p>
              <div className="gitcode">
                <div className="inner-git">
                <a href="https://github.com/prakashfrdev/pomodoro-project.git"> <img src={github} style={{width:'30px',height:'30px', margin:'10px 0px',cursor:'pointer'}}/></a>
             <p class="card__description">gtihub</p>
                </div>
               <div className="inner-git">
               <a href="https://pomo-project-2024.web.app/"><img src={weblink} style={{width:'30px',height:'30px', margin:'10px 0px',cursor:'pointer'}}/> </a> 
             <p class="card__description">Website</p>
               
               </div>
              </div>
          
              
            </div>
          </div>
          <div class="card">
            <img src={Pos} />
            <div class="card__content">
              <p class="card__title">Billing app</p>
              <p class="card__description">
              Billing Website for Hotel
              </p>
              <p  class="card__description">
              Developed a billing website using React and Redux for efficient management of billing processes in a hotel setting.
              </p>
              <p class="card__description">
              Technologies Used: React, Redux, JavaScript, HTML5, CSS3
              </p>
              <div className="gitcode">
                <div className="inner-git">
                <a href="https://github.com/prakashfrdev/pomodoro-project.git"> <img src={github} style={{width:'30px',height:'30px', margin:'10px 0px',cursor:'pointer'}}/></a>
             <p class="card__description">gtihub</p>
                </div>
               <div className="inner-git">
               <a href="https://kooraikadai-billingapp.web.app/"><img src={weblink} style={{width:'30px',height:'30px', margin:'10px 0px',cursor:'pointer'}}/> </a> 
             <p class="card__description">Website</p>
               
               </div>
              </div>
          
              
            </div>
          </div>
          <div class="card">
            <img src={Stumang} />
            <div class="card__content">
              <p class="card__title">Student managment system</p>
              <p class="card__description">
              Developed a student management system using React and Ant Design, for my institute's
administrative needs.
              </p>
              <p class="card__description">
              Focused primarily on frontend development, implementing user interfaces and interactions.
              </p>
              <p class="card__description">
              Technologies: React, Ant Design, JavaScript, HTML, CSS
              </p>
              <div className="gitcode">
                <div className="inner-git">
                <a href="https://bitbucket.org/inetztechnologies/student-management-frontend/src/master/"> <img src={github} style={{width:'30px',height:'30px', margin:'10px 0px',cursor:'pointer'}}/></a>
             <p class="card__description">gtihub</p>
                </div>
               <div className="inner-git">
               <a><img src={weblink} style={{width:'30px',height:'30px', margin:'10px 0px',cursor:'pointer'}}/> </a> 
             <p class="card__description">Website</p>
               
               </div>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={colorFind} />
            <div class="card__content">
              <p class="card__title">Color name to hex value</p>
              <p class="card__description">
              Developed a web application to convert color names to hexadecimal values, providing a convenient tool for designers and developers to identify specific colors.
              </p>
              <p class="card__description">Enhanced proficiency in front-end web development technologies such as HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
