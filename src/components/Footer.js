import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineBehance} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full h-full p-10 bg-white '>
        <div className='container mx-auto '>
            <div className='flex justify-between'>
                <div className="w-full p-10 space-y-9">
                    <h1 className='text-2xl font-bold text-black'>Top Categories</h1>
                    <div className='w-32 border-t border-green-600'></div>
                    <div className='grid grid-flow-col grid-cols-3 '>
                        <div className="flex flex-col items-center justify-center w-full p-10 space-y-5 ">
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Lorem ipsum</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Praesent pretium</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Pellentesque</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Aliquam</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Etiam dapibus</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Nunc sit</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Etiam tempor</a></div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full p-10 space-y-5 ">
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Lorem ipsum</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Praesent pretium</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Pellentesque</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Aliquam</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Etiam dapibus</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Nunc sit</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Etiam tempor</a></div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full p-10 space-y-5 ">
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Lorem ipsum</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Praesent pretium</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Pellentesque</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Aliquam</a></div>
                            <div className='flex items-center justify-start '> <BsFillPlayFill color='green' size={'15'} /> <a to="#" className='text-xl'>Etiam dapibus</a></div>
                           
                        </div>    
                    </div>
                </div>
                <div className="flex flex-col w-2/5 p-10 gap-y-10">
                    <h1 className='text-4xl text-black'>About Us</h1>
                    <div className='w-32 border-t border-green-600'></div>
                    <p className='text-sm text-gray-700'> <span className='text-base uppercase font-bold text-gray-800'>Lorem ipsum dolor sit</span> amet pede. Mauris mattis varius. <br /> Morbi et malesuada tincidunt, nonummy sed, ullamcorper <br /> fringilla, nibh. Cras ut turpis.</p>
                    <p className='text-base text-gray-400'>Aenean nonummy ligula. Etiam ac hendrerit wisi. Morbi <br /> egestas, nunc semper id libero.</p>
                    <div className='flex justify-start space-x-7 items-center'>
                        <a to="" className='text-xl text-gray-600 font-bold '>Contact Us</a>
                        <a to="" className='text-xl text-gray-600 font-bold '>Write a message</a>
                        <a to="" className='text-xl text-gray-600 font-bold '>FAQ</a>
                    </div>
                    <div className='flex justify-start space-x-10 items-center'>
                        <FiFacebook size={'30'} color={'green'}/>
                        <AiOutlineTwitter size={'30'} color={'green'}/>
                        <AiOutlineGithub size={'30'} color={'green'}/>
                        <AiOutlineBehance size={'30'} color={'green'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer