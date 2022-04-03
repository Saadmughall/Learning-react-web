import React, { useEffect } from 'react'
import {AiOutlineUser} from 'react-icons/ai';
import {MdOutlineWatchLater} from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const FreeCourses = () => {
    useEffect(() => {
        AOS.init({
          duration:2000,
          delay:100,
        });
      },)
  return (
    <div className='container flex flex-col items-center justify-center py-10 mx-auto gap-y-16'>
        <h1 className='text-6xl font-thin text-gray-900' data-aos={'fade-up'}>Top Free Courses</h1>
        <div className='flex items-center justify-center'>
            <div className="h-1 border-t-2 border-gray-200 w-96"></div>
            <div className="border-t-2 border-[#31bf34] h-1 w-96"></div>
            <div className="h-1 border-t-2 border-gray-200 w-96"></div>
        </div>
        <div className='text-center'>
            <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet augue ut leo at ultrices posuere, lacus lorem, pretium convallis. Praesent eu <br /> libero. Cras adipiscing elit. Nam sed nulla ut felis facilisis.</p>
        </div>
        <div data-aos={"fade-left"} className='container relative grid  grid-cols-4 h-[43rem] gap-2 px-24 mx-auto align-middle  justify-items-center '>
            <div className="group" >
                <div className="absolute left-28 top-5 flex bg-[url('/public/images/home_elearning_blog1-350x263.jpg')]  bg-cover bg-left-top bg-no-repeat items-end justify-start w-[50rem] col-span-2 row-start-1 row-end-7 py-3  h-[41rem] ">
                <div className='absolute top-0 w-full h-full transition-opacity opacity-0 group-hover:delay-75 group-hover:duration-500 group-hover:bg-gray-900 group-hover:opacity-40'></div>    
                    <div className="z-50 px-20 space-y-5 ">
                        <div className='flex items-center text-center gap-x-2 group-hover:duration-500 group-hover:delay-75 group-hover:-translate-y-6'>
                            <AiOutlineUser color='white' size={"17"}/>
                            <h1 className='text-base text-gray-200'>Muffin Group at </h1>
                            <MdOutlineWatchLater color='white' size={'17'}/>
                            <h1 className='text-base text-gray-200'>April 27,2022</h1>
                        </div>
                        <div className='flex items-center text-center gap-x-2 group-hover:duration-500 group-hover:delay-75 group-hover:-translate-y-6'>
                            <h1 className='text-3xl font-bold text-white'>Nulla interdum adipiscing sed</h1>    
                        </div>
                        <div className='flex items-center text-center gap-x-2 group-hover:-translate-y-6'>
                            <div className='h-1 w-0 group-hover:transition-all group-hover:duration-500 group-hover:delay-75 group-hover:ease-linear  group-hover:w-32 bg-[#31bf34]'></div>    
                        </div>
                    </div>
                </div>
            </div>
            <div className='group'>
            <div className="absolute right-32 top-5 flex bg-[url('/public/images/home_elearning_blog2-195x146.jpg')]  bg-cover bg-left-top bg-no-repeat items-end justify-start w-[30rem] h-[20rem] col-span-2 row-span-3 py-3 ">
            <div className='absolute top-0 w-full h-full transition-opacity opacity-0 group-hover:delay-75 group-hover:duration-150 group-hover:bg-gray-900 group-hover:opacity-60'></div>    
                    <div className="z-50 px-10 space-y-5 ">
                        <div className='flex items-center text-center gap-x-2 group-hover:duration-500 group-hover:delay-75 group-hover:-translate-y-6'>
                            <AiOutlineUser color='white' size={"17"}/>
                            <h1 className='text-base text-gray-200'>Muffin Group at </h1>
                            <MdOutlineWatchLater color='white' size={'17'}/>
                            <h1 className='text-base text-gray-200'>April 27,2022</h1>
                        </div>
                        <div className='flex items-center text-center gap-x-2 group-hover:duration-500 group-hover:delay-75 group-hover:-translate-y-6'>
                            <h1 className='text-xl font-medium text-white'>Donec pulvinar nec congue ut</h1>    
                        </div>
                        <div className='flex items-center text-center gap-x-2 group-hover:-translate-y-6'>
                            <div className='h-1 w-0 group-hover:transition-all group-hover:duration-500 group-hover:delay-75 group-hover:ease-linear  group-hover:w-32 bg-[#31bf34]'></div>    
                        </div>
                    </div>
            </div>
            </div>
            <div className='group'>
            <div className="absolute right-32 top-[22rem] flex bg-[url('/public/images/home_elearning_blog3-195x146.jpg')]  bg-cover bg-left-top bg-no-repeat items-end justify-start w-[30rem] h-[20rem] col-span-2 row-span-3 py-3 ">
            <div className='absolute top-0 w-full h-full opacity-0 hover:transition-opacity group-hover:delay-75 group-hover:duration-150 group-hover:bg-gray-900 group-hover:opacity-70'></div>    
                    <div className="z-50 px-10 space-y-5 ">
                        <div className='flex items-center text-center gap-x-2 group-hover:duration-500 group-hover:delay-75 group-hover:-translate-y-6'>
                            <AiOutlineUser color='white' size={"17"}/>
                            <h1 className='text-base text-gray-200'>Muffin Group at </h1>
                            <MdOutlineWatchLater color='white' size={'17'}/>
                            <h1 className='text-base text-gray-200'>April 27,2022</h1>
                        </div>
                        <div className='flex items-center text-center gap-x-2 group-hover:duration-500 group-hover:delay-75 group-hover:-translate-y-6'>
                            <h1 className='text-xl font-medium text-white'>Donec pulvinar nec congue ut</h1>    
                        </div>
                        <div className='flex items-center text-center gap-x-2 group-hover:-translate-y-6'>
                            <div className='h-1 w-0 group-hover:transition-all group-hover:duration-500 group-hover:delay-75 group-hover:ease-linear  group-hover:w-32 bg-[#31bf34]'></div>    
                        </div>
                    </div>
            </div>
            </div>
            
                
        </div>
    </div>
  )
}

export default FreeCourses