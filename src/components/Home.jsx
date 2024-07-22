import React from 'react'
import image from "../assets/image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full md:w-1/2 pl-4 md:pl-8'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Learner</h2>
          <p className='text-gray-500 py-4 max-w-md text-lg md:text-xl'>
            I have two months of experience of web developing. I have learnt basics of HTML, CSS, DOMS in js. 
            Currently, I am learning to work on web application using technologies like React, Tailwind.
          </p>
          <div className='mt-4'>
          <Link 
            to="Portfolio"
            smooth
            duration={500}
            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
           from-cyan-500 to-blue-500 cursor-pointer'>
            Portfolio
            <span className='ml-4 group-hover:rotate-90 duration-300'>
              <MdOutlineKeyboardArrowRight size={25}/>
            </span>
          </Link>
        </div>
        </div>
        
        <div className='md:w-1/2 flex justify-center pl-4 md:pl-8'>
          <img 
            src={image}
            alt="my profile"
            className='rounded-2xl mx-auto w-1/2 md:w-3/4'
          />
        </div>
      </div>
    </div>
  )
};
export default Home;
