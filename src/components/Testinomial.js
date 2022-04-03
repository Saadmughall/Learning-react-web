import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';  
const Testinomial = () => {
  useEffect(() => {
    AOS.init({
      duration:2000,
      delay:200,
    });
  },)
  return (
    <div data-aos={"fade-down"} className='container p-32 mx-auto  flex justify-start items-center px-20 bg-[url("/public/images/home_elearning_contentslider_slide2.png")] bg-auto bg-no-repeat bg-center h-full'>
            <div className="flex h-full p-10 space-x-5 space-y-5 ">
                <div className='w-[0.15rem] bg-gray-300 h-96'></div>
                <div className='flex-col w-full space-y-5 '>
                    <div className='w-16 h-16 '>
                        <img src="/images/home_elearning_contentslider_blockquote.png" className='' alt="" />
                    </div>
                    <p className='text-5xl font-bold text-gray-900'>Etiam ullamcorper. Suspendisse a <br /> pellentesque dui, non felis. Maecenas <br /> malesuada elit lectus felis.Lorem <br /> ipsum dolor sit amet enim. </p>
                    <h1 className='text-xl font-extrabold text-green-400'>Marcus Strom , Businessman</h1>
                </div>
            </div>
    </div>
  )
}

export default Testinomial