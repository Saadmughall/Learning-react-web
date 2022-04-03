import React, { useEffect } from 'react'
import {FiPlay} from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration:2000,
      delay:100,
    });
  },)
  
  return (
    <section className="flex justify-center  h-[40rem] w-full Hero-section bg-[url('/public/images/home_elearning.jpg')]  bg-no-repeat bg-cover bg-center">
          <div className="container flex p-10 md:items-center lg:justify-start">
              <div className='p-10 space-y-10 ' data-aos={"fade-right"}>
                <h1 className='text-6xl font-normal' >Booste up your skills <br /> with a new way of <br /> learning</h1>
                <button className='flex py-2  text-xl font-medium justify-around items-center text-white bg-[#31bf34] w-96'>
                  Start Learning Today
                  <span className='flex items-center justify-center rounded-full shadow-xl w-14 h-14'>
                  <FiPlay size={"25"}/>
                  </span>
                  </button>
                <div className='flex items-center justify-between text-xl font-bold text-blue-300 w-96'>
                  <a to="#">See more detail</a>
                  <a to="#"> Calendar</a>
                  <a to="#">Teachers</a>
                </div>
              </div>
          </div>
        </section>
  )
}

export default HeroSection