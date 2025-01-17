import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

function Navbar() {
  
  const [nav,setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
      listname:"Home",
    },
    {
      id: 2,
      link: "about",
      listname:"About",
    },
    {
      id: 3,
      link: "portfolio",
      listname:"Portfolio",
    },
    {
      id: 4,
      link: "experience",
      listname:"Experience",
    },
    {
      id: 5,
      link: "contact",
      listname:"Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-4xl font-signature ml-2">abhay saxena</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({id,link,listname})=>(
          <li 
            key = {id}
            className="px-4 cursor-pointer font-medium text-gray-400 hover:scale-105 duration-150"
          >
          <Link
            to={link} 
            smooth 
            duration={500}
          >
            {listname}
          </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} 
           className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
        {nav? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
        bg-gradient-to-b from-black to-gray-800 text-gray-400'>
          {links.map(({id,link})=>(
            <li 
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
            <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
            >
              {link}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default Navbar;