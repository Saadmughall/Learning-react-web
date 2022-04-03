import React from 'react'

const Categories = () => {
  return (
    <div className='bg-gray-100 border-t-2 border-b-2'>
        <div className='container mx-auto '>
            <div className='grid grid-flow-rows lg:grid-flow-col lg:grid-cols-4'>
                <div className="flex items-center justify-center transition-colors duration-150 ease-linear delay-75 p-7 gap-x-5 hover:bg-white hover:border-l-2 hover:border-r-2 hover:border-gray-200">
                    <div className='flex items-center justify-center w-8 h-8 text-xl border-2 border-gray-800 rounded-full'>1</div>
                    <h1 className='text-3xl font-light text-gray-800'>Beginner</h1>
                </div>
                <div className="flex items-center justify-center transition-colors duration-150 ease-linear delay-75 p-7 gap-x-5 hover:bg-white hover:border-l-2 hover:border-r-2 hover:border-gray-200">
                    <div className='flex items-center justify-center w-8 h-8 text-xl border-2 border-gray-800 rounded-full'>2</div>
                    <h1 className='text-3xl font-light text-gray-800'>Pre-intermediates</h1>
                </div>
                <div className="flex items-center justify-center transition-colors duration-150 ease-linear delay-75 p-7 gap-x-5 hover:bg-white hover:border-l-2 hover:border-r-2 hover:border-gray-200">
                    <div className='flex items-center justify-center w-8 h-8 text-xl border-2 border-gray-800 rounded-full'>3</div>
                    <h1 className='text-3xl font-light text-gray-800'>Intermediates</h1>
                </div>
                <div className="flex items-center justify-center transition-colors duration-150 ease-linear delay-75 p-7 gap-x-5 hover:bg-white hover:border-l-2 hover:border-r-2 hover:border-gray-200">
                    <div className='flex items-center justify-center w-8 h-8 text-xl border-2 border-gray-800 rounded-full'>4</div>
                    <h1 className='text-3xl font-light text-gray-800'>Experts</h1>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Categories