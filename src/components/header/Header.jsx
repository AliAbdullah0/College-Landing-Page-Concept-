import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

function Header() {
  const [dropDown,setDropdown] = useState(false)
  const [mobileNavbar,setMobileNavbar] =  useState(false)
  const openDropDown=()=>{
    setDropdown(true)
  }
  const closeDropDown=()=>{
    setDropdown(false)
  }
  const openMobileNavbar = ()=>{
    setMobileNavbar((prev)=>!prev)
  }
  return (
    <>
      <div className='w-full p-2 flex items-center justify-center bg-black text-white text-sm font-light '>
        <h2 className='animate-bounce'>Admissions Open!</h2>
      </div>
      <div className='w-full h-13 flex items-center justify-between p-2 hover:transition duration-200 ease-in-out' >
        <div>
          <img src="src\assets\college-icon.webp" alt="" className='lg:w-1/3 w-1/4'/>
        </div>
        <div className='lg:flex hidden '>
          <ul className='flex items-center h-full justify-center gap-2 font-semibold lg:text-lg lg:mr-10 ' onMouseEnter={openDropDown}>
            <li><Link to='/' className='hover:border-b-[3px] border-black hover:transition duration-150 ease-in-out'>Home</Link></li>
            <li><Link to='' className='hover:border-b-[3px] border-black hover:transition duration-150 ease-in-out'>Admissions</Link></li>
            <li><Link to='' className='font-light hover:border-b-[3px] border-black hover:transition duration-150 ease-in-out'>Contact</Link></li>
            <li><Link to='' className='font-light hover:border-b-[3px] border-black hover:transition duration-150 ease-in-out'>About</Link></li>
          </ul>
        </div>
        <div className='flex items-center gap-2'>
          <Link><img src="src\assets\contact icon.png" alt="" className='lg:h-6 w-5 lg:w-auto'/></Link>
          <Link><img src="src\assets\heart.png" alt="" className='lg:h-5 w-4 lg:w-auto'/></Link>
          <Link><img src="src\assets\menu icon.png" alt="" className='h-6 lg:hidden flex' onClick={openMobileNavbar}/></Link>
          <button className='bg-blue-500 text-white p-2 lg:flex hover:bg-blue-600 hover:transition duration-150 hidden'>Portal</button>
        </div>
      </div>
      {mobileNavbar &&<div className='w-full lg:hidden'>
      <div className='p-2 pb-4'>
          <ul className='flex flex-col items-center h-full justify-center gap-2 font-semibold'>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to=''>Admissions</Link></li>
            <li><Link to='' className='font-light'>Contact</Link></li>
            <li><Link to='' className='font-light'>About</Link></li>
          </ul>
        </div>
      </div>
}
      {dropDown && <div className='w-full p-10 lg:flex hidden justify-evenly -mt-4 hover:transition duration-200 ease-in-out relative z-10' onMouseLeave={closeDropDown}>
        <div>
          <ul>
            <li className='font-semibold'>Admissions</li>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Grade X-XII</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Grade IX-XI</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Grade VI-VIII</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Grade I-V</li></Link>
          </ul>
        </div>
        <div>
        <ul>
            <li className='font-semibold'>Latest News</li>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Achivements</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Sports</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Events</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Exams</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Results</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Syllabus</li></Link>
          </ul>
        </div>
        <div>
        <ul>
            <li className='font-semibold'>Privacy Policy</li>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Terms & Conditions</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Community</li></Link>
            <Link><li className='text-xs text-gray-500 font-semibold font-[Roboto] hover:underline'>Made & Maintained By BCI Facility</li></Link>
          </ul>
        </div>
      </div>
      }
    </>
  );
}

export default Header;
