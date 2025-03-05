import React, { useState } from 'react'

function Nav() {
  const [menu, openMenu] = useState(false);
  const [shwMenu, setShowMenu] = useState(true)
  return (
    <nav className='flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20'>
        <span className='text-xl font-bold tracking-wide'>Simple Project</span>

         <ul className={`${menu ? "block" : "hidden"}  mx-24 py-2 mt-4 font-semibold md:mt-5 px-2 rounded-2xl bg-opacity-30 md:border-none text-center md:bg-teansparent md:mx-0 md:flex gap-6`}>
            <a href="#About">
              <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
            </a>
            <a href="#Experience">
              <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
            </a>
            <a href="#Projects">
              <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
            </a>
            <a href="#Contact">
              <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
            </a>
         </ul>
    </nav>
  )
}

export default Nav
