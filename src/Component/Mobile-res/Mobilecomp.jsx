import React from "react";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Mobilecomp = () => {
  let [icons, setIcons] = useState(false);
  const changeIcons = () => {
    setIcons(!icons);
  };
  
  return (
    <div className="mobile-container">
      <div className="inner-mob">
        <div className="change-icon">
          {icons ? (
            <i
              class="fa-solid fa-xmark fa-2x toogle-icon"
              onClick={changeIcons}
            ></i>
          ) : (
            <i
              class="fa-solid fa-bars fa-2x toogle-icon "
              onClick={changeIcons}
            ></i>
          )}
        </div>
        <div className="mobile-nav">
          {icons ? (
            <div className="nav-content">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p>Home</p>
              </Link>
              <Link to="/About" style={{ textDecoration: "none" }}>
                <p>About</p>
              </Link>
              <Link to="/Resume" style={{ textDecoration: "none" }}>
                <p>Resume</p>
              </Link>
              <Link to="/Skills" style={{ textDecoration: "none" }}>
                <p>Skill</p>
              </Link>
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                <p>Contact</p>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Mobilecomp;
