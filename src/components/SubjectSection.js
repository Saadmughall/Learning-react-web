import React, { useEffect } from 'react'
import FreeCourses from './FreeCourses'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const SubjectSection = () => {
    useEffect(() => {
        AOS.init({
          duration:2000,
          delay:100,
        });
      },)
  return (
    <div className='container flex flex-col items-center justify-center py-16 mx-auto gap-y-16'>
        <h1 className='text-6xl font-thin text-gray-900' data-aos={'fade-up'}>Over <span className='text-[#31bf34]'>12000</span> leasons and <span className='text-[#31bf34]'>30</span> Subjects</h1>
        <div className='flex items-center justify-center'>
            <div className="h-1 border-t-2 border-gray-200 w-96"></div>
            <div className="border-t-2 border-[#31bf34] h-1 w-96"></div>
            <div className="h-1 border-t-2 border-gray-200 w-96"></div>
        </div>
        <div className='container grid grid-cols-4 gap-2 px-24 mx-auto align-middle justify-items-center '>
            <div className="flex items-center justify-center py-3 ">
                <div className="bg-[url('/public/images/home_elearning_icon1.png')] bg-no-repeat bg-left-top w-24 h-24    "></div>
                <h4 className='text-2xl font-light'>Math</h4>
            </div>
            <div className="flex items-center justify-center py-3 ">
                <div className="bg-[url('/public/images/home_elearning_icon2.png')] bg-no-repeat bg-left-top w-24 h-24    "></div>
                <h4 className='text-2xl font-light'>Science <br /> And <br /> Engineer</h4>
            </div>
            <div className="flex items-center justify-center py-3 ">
                <div className="bg-[url('/public/images/home_elearning_icon3.png')] bg-no-repeat bg-left-top w-24 h-24    "></div>
                <h4 className='text-2xl font-light'>Computing</h4>
            </div>
            <div className="flex items-center justify-center py-3 ">
                <div className="bg-[url('/public/images/home_elearning_icon4.png')] bg-no-repeat bg-left-top w-24 h-24    "></div>
                <h4 className='text-2xl font-light'>Art <br /> & <br /> humanities</h4>
            </div>
            <div className="flex items-center justify-center py-3 ">
                <div className="bg-[url('/public/images/home_elearning_icon5.png')] bg-no-repeat bg-left-top w-24 h-24    "></div>
                <h4 className='text-2xl font-light'>Econimics <br /> & <br /> finance</h4>
            </div>
            <div className="flex items-center justify-center py-3 ">
                <div className="bg-[url('/public/images/home_elearning_icon6.png')] bg-no-repeat bg-left-top w-24 h-24 object-cover   "></div>
                <h4 className='text-2xl font-light'>Foreign <br /> Languages</h4>
            </div>
            <div className="flex items-center justify-center py-3 ">
                <div className="bg-[url('/public/images/home_elearning_icon7.png')] bg-no-repeat bg-left-top w-24 h-24 object-cover   "></div>
                <h4 className='text-2xl font-light'>Test <br /> Prep</h4>
            </div>    
        </div>
        <FreeCourses/>
    </div>
  )
}

export default SubjectSection