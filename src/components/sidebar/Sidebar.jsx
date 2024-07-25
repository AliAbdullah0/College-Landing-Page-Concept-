import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Sidebar() {
  const [SideDropDown,setSideDropDown] = useState(false)
  const showSideDropDown = ()=>{
    setSideDropDown((prev)=>!prev)
  }
  return (
    <>
    <div className='lg:flex flex lg:flex-col items-center lg:w-1/6 cursor-pointer ' >
        <div className='w-full lg:h-screen flex lg:flex-col flex-col items-center lg:items-start p-2 lg:gap-4 gap-1 sm:text-sm'>
          <div className='w-full ml-3 flex items-center lg:items-start flex-col'>
            <h3 className='font-semibold text-lg font-[Roboto]'>Bahria College</h3>
            <div className='font-light text-base font-[Roboto] flex gap-4 mt-3'>E-8-Naval Complex</div>
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>
          <div>
            <ul className='lg:text-base text-sm font-semibold font-[Roboto] ml-3 mb-2 space-y-1'>
              <li><Link to="#">Visit Portal</Link></li>
              <li><Link to="#">Fee Slips</Link></li>
              <li><Link to="#">Date Sheets</Link></li>
            </ul>
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-400 '></div>
          <div className='flex lg:flex-col lg:gap-4 lg:items-start lg:justify-normal justify-center items-center flex-wrap lg:text-sm text-sm font-light font-[Roboto]'>

          <div className='flex flex-col gap-3'>
            <div className='flex gap-2 w-full items-center ml-3 font-medium'><h2>Rate Us</h2><svg className='w-3 rotate-180' onClick={showSideDropDown} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg></div>
            { SideDropDown &&<div className='flex-col gap-2 w-full ml-3 lg:font-semibold font-extralight font-sans lg:font-[Roboto] flex'>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" className='rounded-md'/>
                <h3>Excellent</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" />
                <h3>Good</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" />
                <h3>Fair</h3>
              </div> <div className='flex gap-2 items-center'>
                <input type="checkbox" />
                <h3>Poor</h3>
              </div>
            </div>
            }
          </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>
          <div className='ml-3 gap-4'>
          <Link><div className='flex gap-2 font-medium '>Picture Gallery<svg className='w-3 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg></div></Link>
            </div>
          <div className='lg:w-full w-fit h-[1.5px] bg-slate-300 '></div>
          <div className='ml-3 gap-4'>
          <Link><div className='flex gap-2 font-medium '>Note from Principal<svg className='w-3 rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg></div></Link>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Sidebar;
