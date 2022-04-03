import React from 'react'
import {GrDocumentText} from 'react-icons/gr'
const LearningPackage = () => {
  return (
    <div className='w-full bg-[#25B029] h-full'>
        <div className='container mx-auto p-10'>
            <div className='flex justify-between'>
                <div className="w-full p-10 space-y-9">
                    <h1 className='text-6xl text-white '>Choose your learning package</h1>
                    <p className='text-xl text-white '>Maecenas ac lacus. Aenean aliquet, diam felis, malesuada arcu magna, tincidunt tellus tortor, pretium erat <br /> volutpat. Curabitur non felis. Donec sit amet sapien eu lectus eget lectus. Nulla dolor quam</p>
                    <div className='grid grid-flow-col grid-cols-3 '>
                        <div className="flex flex-col items-center justify-center w-full p-10 space-y-5 ">
                            <h1 className='text-5xl text-white'>Free</h1>
                            <div className='flex'>
                                <h1 className='text-5xl text-white'> <span className='text-xl text-white'>$</span>0</h1>
                                <h1 className='text-xl text-gray-800'>/ monthly</h1>
                            </div>
                            <div className='w-full border-t border-white border-opacity-50'></div>
                            <p className='text-xl text-center text-white'>
                            Vitae adipiscing turpis. Aenean <br /> ligula nibh, molestie id vivide.
                            </p>
                            <h1 className='text-xl text-center text-white'>Donec id dui</h1>
                            <div className='w-full border-t border-white border-opacity-30'></div>
                            <h1 className='text-xl text-center text-white'>Praesent tortor eros</h1>
                            <div className='w-full border-t border-white border-opacity-30'></div>
                            <div className='w-3 h-3 rounded-full opacity-30 bg-slate-200'></div>
                            <div className='w-full border-t border-white border-opacity-30'></div>
                            <div className='w-3 h-3 rounded-full opacity-30 bg-slate-200'></div>
                            <button className='p-3 px-10 text-xl text-center text-white bg-green-600 shadow-sm'>Start Now</button>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full p-10 space-y-5 bg-gray-500 bg-opacity-25 ">
                            <h1 className='text-5xl text-white'>Standard</h1>
                            <div className='flex'>
                                <h1 className='text-5xl text-white'> <span className='text-xl text-white'>$</span>29</h1>
                                <h1 className='text-xl text-gray-800'>/ monthly</h1>
                            </div>
                            <div className='w-full border-t border-white border-opacity-50'></div>
                            <p className='text-xl text-center text-white'>
                            Vitae adipiscing turpis. Aenean <br /> ligula nibh, molestie id vivide.
                            </p>
                            <h1 className='text-xl text-center text-white'>Donec id dui</h1>
                            <div className='w-full border-t border-white border-opacity-30'></div>
                            <h1 className='text-xl text-center text-white'>Praesent tortor eros</h1>
                            <div className='w-full border-t border-white border-opacity-30'></div>
                            <div className='w-3 h-3 rounded-full opacity-30 bg-slate-200'></div>
                            <div className='w-full border-t border-white border-opacity-30'></div>
                            <div className='w-3 h-3 rounded-full opacity-30 bg-slate-200'></div>
                            <button className='p-3 px-10 text-xl text-center text-gray-900 bg-white shadow-sm'>Start Now</button>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full p-10 space-y-5 ">
                            <h1 className='text-5xl text-white'>Free</h1>
                            <div className='flex'>
                                <h1 className='text-5xl text-white'> <span className='text-xl text-white'>$</span>0</h1>
                                <h1 className='text-xl text-gray-800'>/ monthly</h1>
                            </div>
                            <div className='w-full border-t border-white border-opacity-50'></div>
                            <p className='text-xl text-center text-white'>
                            Vitae adipiscing turpis. Aenean <br /> ligula nibh, molestie id vivide.
                            </p>
                            <h1 className='text-xl text-center text-white'>Donec id dui</h1>
                            <div className='w-full border-t border-white border-opacity-30'></div>
                            <h1 className='text-xl text-center text-white'>Praesent tortor eros</h1>
                            <div className='w-full border-t border-white border-opacity-30'></div>
                            <div className='w-3 h-3 rounded-full opacity-30 bg-slate-200'></div>
                            <div className='w-full border-t border-white border-opacity-30'></div>
                            <div className='w-3 h-3 rounded-full opacity-30 bg-slate-200'></div>
                            <button className='p-3 px-10 text-xl text-center text-white bg-green-600 shadow-sm'>Start Now</button>
                        </div>    
                    </div>
                </div>
                <div className="flex flex-col w-2/5 p-10 gap-y-5">
                    <h1 className='text-6xl text-white'>Free 30 <span className='text-4xl'>days</span></h1>
                    <button className='flex items-center justify-center p-5 px-10 text-xl text-white bg-gray-900 gap-x-5 w-80'><GrDocumentText size={"20"} color='white' /> Start free trail</button>
                    <p className='text-xl font-medium text-white'>Duis commodo odio. Etiam vehicula libero <br /> quis velit. Cras dolor sit amet dui. Integer <br /> ultrices magna. Curabitur egestas. <br /> Suspendisse ac erat.</p>
                    <a className='text-xl text-white'>Price Detail</a>
                    <a className='text-xl text-white'>License</a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default LearningPackage