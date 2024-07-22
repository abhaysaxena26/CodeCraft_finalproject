import React from 'react'
import { Link } from 'react-router-dom'
  
const Error = () => {
  
  return (
    <div className='h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center justify-center'>
        <div className="max-w-screen-lg p-4 mx-auto ">
          <h1 className="text-4xl font-bold">Error 404</h1>
          <p className="text-xl mt-4">Page not found!</p>
          <Link to="/">
            <button 
              className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
              from-cyan-500 to-blue-500 cursor-pointer'>
              Back to Home
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Error