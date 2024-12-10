import React from 'react'

const Socialmedia = () => {
  return (
    <div className="min-h-10 bg-white py-10 mt-10">
      <div className="text-center mb-10">
    <div className='flex justify-center items-center text-4xl font-bold'>
        <h1>Our Instagram</h1>
    </div>
    <div> <p className='text-gray-500 '>Follow our store on Instagram</p></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"></div>

    <button className="text-sm text-black mt-2 ">Follow Us</button>
    </div>
    </div>
  )
}

export default Socialmedia