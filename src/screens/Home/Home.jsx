import React from 'react'
import './style.css'
import Navbar from '../../Component/Nav-component/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Mobilecomp from '../../Component/Mobile-res/Mobilecomp';
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div>
            <div className="home-container"  data-aos="fade-down">
               <Mobilecomp/>
              <div className="home-content">
              <p className='name' data-aos="zoom-in"
              data-aos-duration="2000">Suriyaprakash</p>
              <p className='name-content'>I'm <span className='inner'>Frontend Developer</span></p>
              <Navbar/>
              </div>
            </div>
    </div>
  )
}

export default Home