import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const MeetTeachers = () => {
    useEffect(() => {
        AOS.init({
          duration:1000,
          delay:100,
        });
      },)
  return (
    <div className='container items-center p-10 mx-auto space-y-10 px-28'>
        <div className='flex items-center justify-between w-full py-3 '>
            <h1 className='text-4xl font-normal text-gray-900'>Meet the teachers</h1>
            <div className='space-x-5'>
                <a className='text-base font-medium text-blue-400'>View all teachers</a>
                <a className='text-base font-medium text-blue-400'>Become a teacher</a>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className="border-t-2 border-[#31bf34] h-1 w-full"></div>
            <div className="w-full h-1 border-t-2 border-gray-200"></div>
            <div className="w-full h-1 border-t-2 border-gray-200"></div>
        </div>
        <div className='grid grid-flow-col grid-cols-3 gap-x-3'>
            <div className="group" data-aos={"fade-right"}>
            <div className="flex items-center justify-between h-36">
                <div className="w-full  h-36 bg-[url('/public/images/home_elearning_ourteam3.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="flex flex-col items-start justify-center w-full px-5 space-y-3 bg-gray-100 h-36">
                    <h1 className='text-base font-normal text-gray-600'>Architecture</h1>
                    <div className='h-[0.10rem] w-8  group-hover:transition-all group-hover:duration-500 group-hover:delay-75 group-hover:ease-linear  group-hover:w-16 bg-[#31bf34]'></div>    
                    <h1 className='text-xl font-semibold text-gray-900'>Paul Vanteir</h1>
                </div>
            </div>
            </div>
            <div className="group" data-aos={"fade-up"}>
            <div className="flex items-center justify-between h-36">
                <div className="w-full  h-36 bg-[url('/public/images/home_elearning_ourteam1.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="flex flex-col items-start justify-center w-full px-5 space-y-3 bg-gray-100 h-36">
                    <h1 className='text-base font-normal text-gray-600'>Marketing</h1>
                    <div className='h-[0.10rem] w-8  group-hover:transition-all group-hover:duration-500 group-hover:delay-75 group-hover:ease-linear  group-hover:w-16 bg-[#31bf34]'></div>    
                    <h1 className='text-xl font-semibold text-gray-900'>Dr. klara Minestone</h1>
                </div>
            </div>
            </div>
            <div className="group" data-aos={"fade-left"}>
            <div className="flex items-center justify-between h-36">
                <div className="w-full  h-36 bg-[url('/public/images/home_elearning_ourteam2.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="flex flex-col items-start justify-center w-full px-5 space-y-3 bg-gray-100 h-36">
                    <h1 className='text-base font-normal text-gray-600'>Programming</h1>
                    <div className='h-[0.10rem] w-8  group-hover:transition-all group-hover:duration-500 group-hover:delay-75 group-hover:ease-linear  group-hover:w-16 bg-[#31bf34]'></div>    
                    <h1 className='text-xl font-semibold text-gray-900'>Prof. Dan steinburg</h1>
                </div>
            </div>
            </div>    
        </div>
    </div>
  )
}

export default MeetTeachers